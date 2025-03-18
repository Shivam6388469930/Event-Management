import React from 'react'

const Merchanding = () => {
  return (
    <div>
       <div className='d-flex justify-around h-96'>
                <div className='d-flex justify-center items-center w-[40%] h-full '>
                    <p className='  font-bold' style={ { fontSize: "4rem" } }>Merchanding</p>
                </div>
                <div className='d-flex justify-center items-center w-[60%] h-full '>
                    <p className=' font-bold' style={ { fontSize: "2rem" } }>
                    It is the ability to understand the need of clients and offer a remarkable customer experience, deliver goods and services on time. Keeping in mind the Quality.
                       </p>
                </div>
            </div>
            <div className='d-flex justify-center h-[70vh]'>
                <img src="services/merchandise.jpg" alt="" srcset="" style={ { width: "100%", height: "100%" } } />
            </div>
            <div>
                <p className=' font-bold' style={ { fontSize: "1.5rem" } }>At CS Entertainment, we believe that merchandising plays a crucial role in enhancing the overall event experience and leaving a lasting impression on attendees.</p>
            </div>
            <div className='m-3'>
                <h1 className=' font-bold m-2' style={ { fontSize: "2.5rem" } }>Discover the diverse array of merchandising opportunities we provide to elevate your event:</h1>
                <div className='d-flex flex-col justify-around'>
                <p class="desc1 mt-4 text-xl font-bold">  <strong style={ { fontSize: "2rem", fontWeight: "bolder" } } >Branded Merchandise:</strong> We offer a comprehensive range of branded merchandise options that help promote your event and leave a lasting impression. From apparel and accessories to promotional items and collectibles, we can customize merchandise with your event logo, theme, and messaging. Our high-quality products ensure that attendees can proudly wear, use, or display them long after the event is over.</p>
                        
                        <p class="desc1 text-xl font-bold">  <strong style={ { fontSize: "2rem", fontWeight: "bolder" } }>Limited Edition Items:</strong> Create a sense of exclusivity and excitement with limited edition merchandise. We can help you design and produce limited edition items that are unique to your event, creating a sense of urgency and desirability among attendees. Limited edition merchandise not only serves as a special keepsake but also enhances the perceived value of your event.</p>
                            
                        <p class="desc1 text-xl font-bold">  <strong style={ { fontSize: "2rem", fontWeight: "bolder" } }>Event-specific Merchandise:</strong> Tailor your merchandise to the specific theme or purpose of your event. Whether it's a concert, conference, festival, or sporting event, we can curate merchandise that aligns with the event's identity and resonates with attendees. From concert tour merchandise and conference swag bags to festival-themed apparel and sports memorabilia, we have you covered.</p>
                            
                        <p class="desc1 text-xl font-bold" >  <strong style={ { fontSize: "2rem", fontWeight: "bolder" } }>Sponsor Merchandise Integration:</strong> Maximize the visibility and impact of your sponsors by integrating their branding into event merchandise. We can work closely with your sponsors to create co-branded merchandise that showcases their products or services alongside your event branding. This creates valuable exposure for sponsors and adds value to the merchandise offerings.</p>
                         
                            
                        <p class="desc1 text-xl font-bold" >Our merchandising solutions are designed to enhance the event experience, foster engagement, and create lasting memories for attendees. We provide end-to-end support, from merchandise design and production to inventory management and sales logistics.
    
                            If you're ready to take your event merchandising to the next level, contact us today. Together, we'll curate a merchandise lineup that resonates with your audience, generates excitement, and serves as a cherished reminder of your exceptional event.</p>
                    
                
                </div>
           
            </div>
            <div className='m-4 text-3xl font-semibold'>
                <p>Events Gallery</p>
            </div>
            <div className='flex m-14'>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", borderRadius: "7%" } }>
                    <img src="photogalleyimg/23.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "20vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/26.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "10vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/40.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "-4vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/11.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "5vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/12.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>


            </div>
    </div>
  )
}

export default Merchanding;
