
import { User, Target, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, objectives, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Personal Info</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-medium">Name:</span> Nawraj Singh</p>
              <p><span className="font-medium">Phone:</span> +91-7980608611</p>
              <p><span className="font-medium">Email:</span> singhnawraj003@gmail.com</p>
              <p><span className="font-medium">D.O.B:</span> 07.08.2004</p>
              <p><span className="font-medium">Location:</span> Doluipara, Uttarpara, Hooghly-712245</p>
            </div>
          </div>

          {/* Career Objective */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Career Objective</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Aspiring IT professional seeking a challenging opportunity to apply and enhance my programming 
              and problem-solving skills. Passionate about learning new technologies and contributing to 
              innovative projects.
            </p>
          </div>

          {/* Background */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Background</h3>
            </div>
            <div className="space-y-3 text-gray-700">
      
              <p><span className="font-medium">Current Status:</span> B.Tech Student</p>
              <p><span className="font-medium">University:</span> MAKAUT University</p>
              <p><span className="font-medium">Expected Graduation:</span> 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
