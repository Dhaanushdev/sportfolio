import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const { phone, email, linkedin, github } = portfolioData.personalInfo;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact-content">
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-cards">
                        <a href={`mailto:${email}`} className="contact-card">
                            <div className="icon">📧</div>
                            <h3>Email</h3>
                            <p>{email}</p>
                        </a>
                        <a href={`tel:${phone}`} className="contact-card">
                            <div className="icon">📱</div>
                            <h3>Phone</h3>
                            <p>{phone}</p>
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                    </div>
                </div>

                <footer className="footer">
                    <p>Designed & Built by Santhosh B</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
