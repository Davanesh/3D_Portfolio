import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Davanesh's_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">My Resume</h2>
          <p className="text-xl text-secondary mt-4">
            Explore my background and download my resume.
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white">More About Me</h3>
            <p className="text-secondary text-lg">
              I am currently pursuing my Bachelor's in Computer Science at Veltech University Chennai, where I have developed a strong foundation in software development and problem-solving skills. I have a deep passion for learning and constantly strive to improve my technical abilities.
            </p>
            <p className="text-secondary text-lg mt-4">
              I am particularly interested in full-stack development and am eager to apply my knowledge in both front-end and back-end technologies. I enjoy working on challenging problems and delivering solutions that improve user experiences.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={handleDownload}
            className="bg-accent text-white px-8 py-4 rounded-lg shadow-lg hover:bg-accent-dark transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-dark"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;