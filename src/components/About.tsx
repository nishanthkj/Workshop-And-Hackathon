import React from 'react';
import { Building2, Target, Lightbulb, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About MITM
          </h2>
          <p className="text-lg text-gray-600">
            Excellence in Technical Education Since 2007
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building2 className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Our Institution</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Maharaja Institute of Technology Mysore (MITM) was established in 2007 by MET® in a
              peaceful, sprawling location away from urban disruption. Founded by a group of esteemed
              individuals in Science and Technology, the institute began with 300 seats across five
              engineering disciplines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the years, it has grown to accommodate over 900 students across undergraduate,
              postgraduate, and research programs. MITM is known for its quality education,
              "Teaching Centric" approach, and dedicated faculty.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The institute focuses on innovation, transparency, and high standards of education,
              with modern infrastructure and over 50 buses providing transportation within a 60 km
              radius. Its alumni are well recognized in society and industry.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "To be recognized as a premier technical and management institution promoting
                extensive education fostering research, innovation and entrepreneurial attitude"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To empower students with indispensable knowledge through dedicated teaching and collaborative learning.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To advance extensive research in science, engineering and management disciplines.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To facilitate entrepreneurial skills through effective institute-industry collaboration and interaction with alumni.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To instill the need to uphold ethics in every aspect.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To mould holistic individuals capable of contributing to the advancement of the society.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Department of Computer Science and Artificial Intelligence
            </h3>
          </div>

          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="leading-relaxed">
              The Department offers excellent infrastructure with modern labs, classrooms, and a library, supported by qualified faculty focused on cutting-edge technology and teamwork. It organizes seminars, workshops, and industry visits, and offers add-on courses. With a strong placement record and excellent academic results, students actively participate in technical and non-technical activities. Many excel in competitive exams like GATE, GRE, and CAT, and gain admissions to top universities. Faculty and students regularly win awards at national and international conferences and are members of professional societies like ISTE, CSI, and IEI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Vision</h4>
              </div>
              <p className="text-gray-600">
                "To be recognized as the best center for technical education and research in the field of information science and engineering."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Mission</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To facilitate adequate transformation in students through a proficient teaching learning process with the guidance of mentors and all-inclusive professional activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To infuse students with professional, ethical and leadership attributes through industry collaboration and alumni affiliation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>To enhance research and entrepreneurship in associated domains and to facilitate real time problem solving.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;