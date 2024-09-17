import { useState } from "react";

const ContactSectionTwo = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:porchlyt@gmail.com?subject=Contact Form Submission&body=Name: ${formData.first_name} ${formData.last_name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="max-w-[1200px] py-[40px] w-[90%] mx-auto">
            <p className="text-[1.8rem]">Have questions? Fill out the form below and we'll get back to you.</p>
            
            {/* form and map */}
            <div className="flex flex-col md:flex-row mt-[40px] gap-[20px]">
                <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
                    {/* heading */}
                    <p className="text-[2.4rem] font-bold text-[#5f5f5f] leading-[1.25] mb-[25px]">Get in touch with us</p>
                    <p className="text-[1.2rem] uppercase italic mb-[15px]">
                        <span className="text-[1.2rem] text-[#ff2825]">*</span> Indicates required field
                    </p>

                    {/* Name label and field */}
                    <div className="w-full">
                        <label className="text-[1.6rem]">NAME <span className="text-[1.6rem] text-[#ff2825]">*</span></label>
                        {/* inputs */}
                        <div className="my-[10px] w-full flex flex-col sm:flex-row gap-[10px]">
                            <input type="text" placeholder="First" className="w-full md:w-1/2 text-[1.2rem] border py-[10px] px-[20px] border-[rgba(0,0,0,0.4)]" name="first_name" value={formData.first_name} onChange={handleChange} required />
                            <input type="text" placeholder="Last" className="w-full md:w-1/2 text-[1.2rem] border py-[10px] px-[20px] border-[rgba(0,0,0,0.4)]" name="last_name" value={formData.last_name} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* email */}
                    <div className="w-full">
                        <label className="text-[1.6rem]">EMAIL <span className="text-[1.6rem] text-[#ff2825]">*</span></label>
                        <input type="email" className="my-[10px] w-full text-[1.2rem] border py-[10px] px-[20px] border-[rgba(0,0,0,0.4)]" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    {/* message */}
                    <div className="w-full">
                        <label className="text-[1.6rem]">MESSAGE <span className="text-[1.6rem] text-[#ff2825]">*</span></label><br />
                        <textarea draggable="false" className="my-[10px] w-full text-[1.2rem] border py-[10px] px-[20px] border-[rgba(0,0,0,0.4)] h-[200px] resize-none" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    {/* submit */}
                    <button type="submit" className="hover:text-black hover:bg-transparent text-white bg-black border-black transition-all border text-[1.2rem] py-[1.4rem] px-[3rem] w-fit">Submit</button>
                </form>

                {/* map */}
                <div className="w-full md:w-1/2">
                    <p className="text-[1.6rem] text-[#5f5f5f] mb-[20px]">
                        Life & Med Tech Consulting<br />
                        38 Honeycrisp Crescent, Vaughan, Ontario, L4K 0M8<br />
                        (437) 410-2473<br />
                        porchlyt@gmail.com<br />
                    </p>

                    {/* Embed Google Maps */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.6257586957116!2d-79.51092468453562!3d43.826224779115736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b300b40df70e3%3A0x561d82b47bb2cbe8!2s38%20Honeycrisp%20Crescent%2C%20Vaughan%2C%20ON%20L4K%200M8%2C%20Canada!5e0!3m2!1sen!2sng!4v1694799406849!5m2!1sen!2sng"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactSectionTwo;