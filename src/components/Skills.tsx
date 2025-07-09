
import { Code, Database, Globe, Monitor, Smartphone, GitBranch } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", icon: "☕", color: "text-orange-600" },
        { name: "C", icon: "🔧", color: "text-blue-600" },
        { name: "Python", icon: "🐍", color: "text-green-600" },
        { name: "JavaScript", icon: "📜", color: "text-yellow-600" },
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML", icon: "🌐", color: "text-orange-500" },
        { name: "CSS", icon: "🎨", color: "text-blue-500" },
        { name: "React.js", icon: "⚛️", color: "text-cyan-500" },
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", icon: "🍃", color: "text-green-600" },
        { name: "Git", icon: "📚", color: "text-red-600" },
        { name: "GitHub", icon: "🐙", color: "text-gray-800" },
        { name: "VS Code", icon: "💻", color: "text-blue-600" },
      ]
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "Windows", icon: "🪟", color: "text-blue-600" },
        { name: "Linux", icon: "🐧", color: "text-yellow-600" },
      ]
    }
  ];

  const learningSkills = [
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "React.js", icon: "⚛️", color: "text-cyan-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className={`font-medium ${skill.color}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Currently Learning</h3>
            <p className="text-gray-600">Technologies I'm actively exploring and mastering</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {learningSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 hover:scale-110 transition-transform duration-300"
              >
                <span className="text-2xl mr-3">{skill.icon}</span>
                <span className={`font-medium ${skill.color}`}>{skill.name}</span>
                <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
