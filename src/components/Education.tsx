
import { GraduationCap, Calendar, Award } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution: "MAKAUT University",
      period: "Expected Graduation: 2026",
      cgpa: "7.9/10",
      status: "ongoing",
      description: "Pursuing comprehensive education in Information Technology with focus on programming, software development, and emerging technologies."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Dreamland School",
      period: "2022",
      cgpa: "75%",
      status: "completed",
      description: "Completed higher secondary education with strong performance in science subjects."
    },
    {
      degree: "Secondary (10th)",
      institution: "Dreamland School",
      period: "2020",
      cgpa: "85%",
      status: "completed",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'ongoing' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium text-blue-600 mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-medium">CGPA: {edu.cgpa}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
