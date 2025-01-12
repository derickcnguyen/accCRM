import React from 'react';
import { ArrowRight, Users, Clock, Building2, BarChart2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SocialLinks } from './layout/SocialLinks';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Contact Management',
    description: 'Efficiently organize and manage your business contacts in one place'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Activity Tracking',
    description: 'Keep track of your last interactions and never miss a follow-up'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Company Insights',
    description: 'Store and access important company information for each contact'
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: 'Status Management',
    description: 'Track contact status from lead to customer with ease'
  }
];

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-yellow-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-black transform -rotate-2 inline-block bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-4">
                Acc-CRM
              </h1>
              
              <div className="flex flex-col items-center gap-4">
                <p className="text-2xl md:text-3xl font-bold transform rotate-1 inline-block bg-blue-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2">
                  Where Relationships Build Results
                </p>
                
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 bg-white border-4 border-black p-4 transform -rotate-1">
                  The modern CRM that helps you build and maintain stronger business relationships
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => navigate('/login')}
                  className="px-8 py-4 bg-yellow-300 border-4 border-black font-bold text-lg hover:bg-yellow-400 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white border-4 border-black font-bold text-lg hover:bg-gray-50 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
              {[
                { label: 'Active Users', value: '10,000+' },
                { label: 'Contacts Managed', value: '1M+' },
                { label: 'Time Saved', value: '25hrs/week' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="font-bold text-2xl md:text-3xl">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 transform -rotate-1 inline-block bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="bg-yellow-300 border-4 border-black p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-300 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-4xl font-bold mb-8 inline-block bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 transform rotate-1">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who use Acc-CRM to manage their business relationships effectively.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-yellow-300 border-4 border-black font-bold text-lg hover:bg-yellow-400 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2"
          >
            Start for Free <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-4 right-4">
        <SocialLinks />
      </div>
    </div>
  );
}