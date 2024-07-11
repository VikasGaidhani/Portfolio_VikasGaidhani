import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Sai Shraddha Jewellers',
      skills: 'HTML | CSS | Javascript | React | Node jS | Express jS',
      about: `I developed a feature-rich e-commerce website for a jewelry shop using the MERN stack (MongoDB, Express.js, React.js, Node.js). This dynamic platform showcases a sleek, responsive design optimized for mobile and desktop users. Key functionalities include a comprehensive product catalog with advanced search and filtering capabilities, a secure and intuitive shopping cart and checkout system, and robust user account management with secure authentication. The website also features an admin dashboard for streamlined management of products, orders, and users, along with detailed analytics and reporting tools. By focusing on performance, security, and user experience, this project highlights my expertise in creating scalable, high-quality e-commerce solutions tailored to the unique needs of the jewelry industry.`,
      learning: 'Acquired React skills, learnt components organization, effectively utilized multiple hooks, and refined API call orchestration.',
      visitLink: 'https://saishraddhajewellers.com/',
      sourceLink: 'https://github.com/Sanika03/silk-craft',
    },
    {
      title: "Fittingswale",
      skills: "HTML | CSS | JavaScript | React | Node.js | Express.js | MongoDB",
      about: "I create dynamic and responsive furniture shop websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application features modern, mobile-friendly designs, detailed product catalogs, secure shopping cart and checkout processes, and comprehensive user accounts. Each project includes an admin dashboard for easy management and analytics. I focus on performance, security, and delivering tailored, high-quality solutions to meet each client's unique needs.",
      learning: "Developed proficiency in writing optimized React and Node.js code and implementing aesthetically pleasing color schemes.",
      visitLink: "https://www.fittingswale.in/",
      sourceLink: "https://github.com/Sanika03/BuzzShare"
    },
    
   
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base text-justify mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className='font-bold'>Learnings</span>: {learning}</p>
                </div>
                <div className="flex gap-4 text-grape">
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">Visit</a>
                  {/* <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">View Source</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
