import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const { technical, personal } = portfolioData.skills;
    const { certifications } = portfolioData;

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills & Certifications</h2>

                <div className="skills-wrapper">
                    <div className="skills-column">
                        <h3>Technical Skills</h3>
                        <div className="skills-list">
                            {technical.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-name">{skill}</span>
                                    <div className="skill-bar">
                                        <div className="skill-progress" style={{ width: `${Math.random() * 30 + 60}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-column">
                        <h3>Personal Skills</h3>
                        <ul className="personal-skills-list">
                            {personal.map((skill, index) => (
                                <li key={index} className="personal-skill-item">
                                    <span className="check-icon">✓</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="certifications-section">
                    <h3>Certifications</h3>
                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
                                <div className="cert-icon">📜</div>
                                <p>{cert.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
