
import { ExternalLink, Github, Music, Globe, Book, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Music Player (Spotify-like)",
      description: "A modern music streaming application with playlist management, audio controls, and responsive design. Built with focus on user experience and smooth audio playback.",
      icon: <Music className="h-8 w-8" />,
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      features: ["Audio playback", "Playlist management", "Responsive design", "Modern UI"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Modern Portfolio Website",
      description: "A comprehensive portfolio website showcasing skills, projects, and achievements. Features responsive design, smooth animations, and contact functionality.",
      icon: <Globe className="h-8 w-8" />,
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      features: ["Responsive layout", "Contact form", "Project showcase", "Skill visualization"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Dictionary Web App",
      description: "An interactive dictionary application with word search, definitions, pronunciations, and examples. Features clean UI and comprehensive word information.",
      icon: <Book className="h-8 w-8" />,
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      features: ["Word search", "Definitions", "Pronunciations", "Examples"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Mutual Fund Tracker",
      description: "A modern music streaming application with playlist management, audio controls, and responsive design. Built with focus on user experience and smooth audio playback.",
      icon: <Music className="h-8 w-8" />,
      technologies: ["React", "JavaScript", "CSS", "HTML","API Integration"],
      features: ["Suggest Mutual Funds", "Track Mutual funds","Shows your searched mutual fund", "Responsive design", "Modern UI"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Simon Say Game",
      description: "A memory-based game implementation of the classic Simon Says. Features progressive difficulty, sound effects, and engaging visual feedback.",
      icon: <Gamepad2 className="h-8 w-8" />,
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      features: ["Memory challenge", "Progressive difficulty", "Sound effects", "Score tracking"],
      color: "from-red-400 to-red-600"
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-3">{project.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://github.com/Nawraj-07", "_blank")}
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open("https://github.com/Nawraj-07", "_blank")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
