import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Integrate your email service here (e.g., EmailJS, Resend)
    };

    return (
        <section className="bg-jungle-50 py-16 px-4">
            <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-jungle-700 mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="card bg-white p-6 shadow-md">
                    <div className="form-control mb-4">
                        <label className="label text-jungle-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-jungle-500"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label text-jungle-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-jungle-500"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label text-jungle-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-jungle-500"
                            required
                        />
                    </div>
                    <button type="submit" className="btn bg-jungle-500 hover:bg-jungle-600 text-white w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
