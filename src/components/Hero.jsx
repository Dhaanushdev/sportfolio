import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
    const { name, objective } = portfolioData.personalInfo;

    return (
        <section id="hero" className="hero">
            <div className="hero-content fade-in">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">{name}</h1>
                <h3 className="title">AI & Data Science Enthusiast</h3>
                <p className="objective">{objective}</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">View Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </div>
            </div>
            <div className="hero-visual">
                {/* Abstract geometric shape or illustration could go here */}
                <div className="circle"></div>
            </div>
        </section>
    );
};

export default Hero;
