import React, { useState } from 'react';
import { contactFunction } from '../Service/Api';

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // To manage loading state
    const [error, setError] = useState(null); // To manage errors

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate phone number format
    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Simple phone validation (10 digits)
        return phoneRegex.test(phone);
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            setError(null); // Reset any previous error

            // Validate required fields
            if (!formData.fname || !formData.lname || !formData.email || !formData.phone) {
                alert('Please fill out all required fields!');
                setIsSubmitting(false);
                return;
            }

            // Validate email and phone
            if (!validateEmail(formData.email)) {
                alert('Please enter a valid email address!');
                setIsSubmitting(false);
                return;
            }

            if (!validatePhone(formData.phone)) {
                alert('Please enter a valid phone number!');
                setIsSubmitting(false);
                return;
            }

            // Call API function
            const response = await contactFunction(formData);

            if (response.status===201) {
                alert('Your message has been sent successfully!');
                setFormData({ fname: '', lname: '', email: '', phone: '', address: '', message: '' }); // Reset form
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <div>
            <div className="flex justify-center font-bold text-3xl w-full pt-16">
                <div
                    className="w-100 mb-3"
                    style={{
                        height: '60vh',
                        backgroundImage: `url('image/contactimg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="d-flex flex-col justify-center items-center h-full">
                        <p className="text-4xl font-bold font-serif text-red-600">CONTACT US</p>
                        <p className="text-xl font-bold font-serif">This event is managed and organized by professional teams.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center font-bold text-3xl text-red-700 pt-2 w-full">
                <p>
                    <u>Contact</u> Us
                </p>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="w-full md:h-screen flex flex-col justify-around md:border-r-4 md:border-b-4 md:mb-40 md:z-8 md:border-solid md:border-gray-300">
                    {/** Form Inputs **/}
                    {['fname', 'lname', 'email', 'phone', 'address', 'message'].map((field, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center md:p-5 md:w-[70%]">
                            <label htmlFor={field} className="text-2xl">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            {field === 'address' || field === 'message' ? (
                                <textarea
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="border-x-2 border-y-2 border-solid border-black text-2xl m-3 md:m-0"
                                ></textarea>
                            ) : (
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="border-x-2 border-y-2 border-solid border-black text-2xl m-3 md:m-0"
                                />
                            )}
                        </div>
                    ))}
                    <div>
                        <button
                            type="button"
                            className={`bg-blue-500 w-[40vw] text-2xl m-5 p-2 rounded-md hover:bg-green-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                </div>

                {/** Contact Details Section **/}
                <div className="w-full md:h-screen flex flex-col p-8 md:pt-28 md:p-0">
                    <div className="flex justify-center text-xl font-semibold md:text-2xl">
                        Contact <span className="text-red-500">Details</span>
                    </div>
                    <div>
                        <p>agraharishivam6388@gmail.com</p>
                        <a href="tel:+6388469930" className="text-blue-500">
                            Call 6388469930
                        </a>
                    </div>
                    <div className="flex justify-center text-xl font-semibold md:text-2xl mt-4">
                        Social <span className="text-red-500">Media</span>
                    </div>
                    <div>
                        <p>
                            Instagram-
                            <a href="https://www.instagram.com/agrahari8058" className="text-blue-500">
                                agrahari8058
                            </a>
                        </p>
                        <p>
                            Facebook-
                            <a href="https://www.facebook.com/profile.php?id=100055833523615" className="text-blue-500">
                                Click here
                            </a>
                        </p>
                        <p>
                            LinkedIn-
                            <a href="https://www.linkedin.com/in/shivam-agrahari-1a816b240" className="text-blue-500">
                                Click here
                            </a>
                        </p>
                    </div>
                    <div className="flex justify-center text-xl font-semibold md:text-2xl mt-4">
                        Add<span className="text-red-500">ress</span>
                    </div>
                    <div>
                        <p>Sheat College of Engineering</p>
                        <p>Varanasi (210068)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
