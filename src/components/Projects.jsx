import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-links">
                                    <button onClick={() => openModal(project)} className="project-link btn-text">View Details</button>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">GitHub</a>
                                </div>
                            </div>
                            <div className="project-bg-effect"></div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={closeModal}>&times;</button>
                            <h3>{selectedProject.title}</h3>
                            <p className="modal-description">{selectedProject.description}</p>
                            <div className="modal-links">
                                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
