import projects from '../data/projects';

function Projects() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="my-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
