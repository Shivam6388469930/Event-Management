const Contact = require('../Model/contact');
const nodemailer=require('nodemailer')

// Function to validate required fields
const validateContactForm = (data) => {
    const { fname, lname, email, phone, address, message } = data;
    if (!fname || !lname || !email || !phone || !address || !message) {
        throw new Error("All fields are required");
    }
};

exports.controlcontact = async (req, res) => {
    const transport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.Email,
            pass:process.env.Password
        },
        tls: {
            rejectUnauthorized: false // Ignore self-signed certificate error
          }
    })
    try {
        // Validate input
        validateContactForm(req.body);

        const { fname, lname, email, phone, address, message } = req.body;

        // Create the contact entry
        const contactform = await Contact.create({
            fname,
            lname,
            email,
            phone,
            address,
            message,
        });

        // Send success response
        res.status(201).json({
            success: true,
            data: contactform,
            message: "Contact form submitted successfully",
        });
        if(contactform){
            const mailOptions= {
                from: process.env.Email,
                to: email,
                subject: "Your message is recived successfully",
                text: `Hi ${fname},

Thank you for contacting us! We wanted to let you know that your message has been received, and our team is currently reviewing it. You will be contacted within 24 hours.

Message details:
--------------------------------------------------------------
First Name: ${fname}
Last Name: ${lname}
Email: ${email}
Phone: ${phone}
Message:
${message}

We look forward to assisting you.

Best regards,
EventKiya
Customer Support Team`
              };
              transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error(error);
                  return res.status(500).json({ message: "Email not sent" });  // Ensure this sends a proper error message
                } else {
                  console.log("Email sent:", info.response);
                  return res.status(200).json({ message: "Email sent successfully" });
                }
              });
        }
    } catch (error) {
        console.error(error);
 
        // Send error response with specific error message
        res.status(500).json({
            success: false,
            message: error.message || "An error occurred while submitting the contact form",
            error: error.stack || error.message, // Send stack trace for development
        });
    }
}
exports.getcontact = async (req, res) => {
    try {
        const user = await Contact.find({}); // Await the database query
        res.status(200).json(user); // Send the response after query completion
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contacts', details: error.message });
    }
};



