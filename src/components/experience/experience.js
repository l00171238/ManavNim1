import React from 'react';
import './experience.css'; 

function Experience() {
  
    const skills = ['Amazon Web Service', 'Python', 'Cloudformation', 'CI/CD', 'Containerization', 'Aerospike','OWS'];
    const skills2 = ['Amazon Web Service', 'Ansible', 'Redhat Linux', 'Containerzation'];
    return (
    <section className="experience">
      <div className="experience-box">
        <h2>Yahoo !</h2>
        <p>April 2023 - Sept 2023</p><br/>
        <p>played a pivotal role in optimizing the software development and deployment lifecycle. I streamlined software build and testing processes, implemented efficient deployment strategies, and deployed monitoring and troubleshooting solutions to ensure system reliability. Collaborating with cross-functional teams, I improved the overall efficiency of the development pipeline and enhanced the speed and reliability of software delivery. This internship exposed me to DevOps best practices, automation tools, and cloud technologies, equipping me with essential skills for a career in DevOps.</p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="experience-box">
        <h2>Grras Solution Pvt. Ltd.</h2>
        <p>March 2022 - Sept 2022</p><br/>
        <p> Actively managed, improved, and closely monitored AWS cloud infrastructure, encompassing EC2, S3, and RDS services, which included overseeing backups, patches, and scaling operations. Additionally, I efficiently managed multiple servers using Ansible for streamlined maintenance.I excelled in diagnosing and resolving server performance issues, leveraging logging data to generate insightful reports. My responsibilities also included the installation and configuration of various software and hardware, contributing to the overall smooth operation of systems.</p>
        <ul className="skills-list">
          {skills2.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
