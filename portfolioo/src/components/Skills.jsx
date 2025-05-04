import skills from '../data/skills';

function Skills() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="border p-2 rounded text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
