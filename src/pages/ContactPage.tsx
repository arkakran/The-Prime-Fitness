import React from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link 
            to="/" 
            className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-200 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-red-500">Fitness Journey?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step towards a healthier, stronger you. Contact us today to book your free trial, 
            meet our expert trainers, or join our fitness community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us Now</h3>
                  <p className="text-gray-300">+91 95368 44029</p>
                  <p className="text-sm text-gray-400">Available during gym hours</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Our Gym</h3>
                  <p className="text-gray-300">2nd Floor, Mavi plaza, GP Pocket</p>
                  <p className="text-gray-300">Ganga Nagar, Meerut, UP 250001</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Operating Hours</h3>
                  <p className="text-gray-300">Mon-Sat: 5:00 AM - 9:00 AM & 4:00 PM - 10:00 PM</p>
                  <p className="text-gray-300">Sunday: Holiday</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-700 rounded-xl">
              <h3 className="text-white font-semibold mb-3">💡 Pro Tip</h3>
              <p className="text-gray-300 text-sm">
                Visit us during off-peak hours (10 AM - 4 PM) for a more personalized gym tour 
                and one-on-one consultation with our trainers.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Meet Our Expert Trainers</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our certified trainers have years of experience helping people achieve their fitness goals. 
                They'll assess your current fitness level and create a personalized workout plan.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Certified fitness professionals</li>
                <li>• Personalized workout plans</li>
                <li>• Nutrition guidance included</li>
                <li>• Progress tracking and monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Free Trial Session</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Experience our gym facilities with a complimentary trial session. No commitment required - 
                just bring your workout clothes and enthusiasm!
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Full access to all equipment</li>
                <li>• Complimentary fitness assessment</li>
                <li>• Trainer guidance included</li>
                <li>• No hidden charges</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Membership Benefits</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Join our fitness community and unlock exclusive benefits designed to accelerate 
                your fitness journey and keep you motivated.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• 24/7 locker facility access</li>
                <li>• Clean shower and changing rooms</li>
                <li>• Equipment orientation session</li>
                <li>• Member-only fitness challenges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't wait for tomorrow - your fitness journey starts today. Contact us now to book 
            your free trial or speak with our team about membership options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919536844029"
              className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 95368 44029
            </a>
            <Link
              to="/#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-500 px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;