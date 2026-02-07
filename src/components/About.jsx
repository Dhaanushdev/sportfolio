import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
    const { education } = portfolioData;

    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="year-badge">{edu.year}</div>
                            <h3 className="degree">{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <div className="percentage">Score: {edu.percentage}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
