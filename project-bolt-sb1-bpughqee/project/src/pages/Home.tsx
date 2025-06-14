import React from 'react';
import { 
  Dumbbell, 
  Target, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  Play,
  Clock,
  Flame
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Workouts', value: '1000+', icon: Dumbbell },
    { label: 'Success Rate', value: '95%', icon: Target },
    { label: 'Avg Rating', value: '4.9', icon: Star },
  ];

  const features = [
    {
      title: 'Smart Training',
      description: 'AI-powered workout recommendations based on your goals and progress',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Custom Routines',
      description: 'Build personalized workout plans that fit your schedule and preferences',
      icon: Dumbbell,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your improvements with detailed analytics and reports',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent block">
                  Fitness Journey
                </span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                Experience the future of fitness with our AI-powered platform. Get personalized workouts, 
                track your progress, and achieve your goals faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('training')}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Training</span>
                </button>
                <button
                  onClick={() => onNavigate('browse')}
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Workouts</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative animate-bounce-in">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Dumbbell className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-primary-100">Your fitness journey begins here</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                  <div className="text-secondary-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Choose Gfit?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven fitness methodologies 
              to deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Body?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of users who have already achieved their fitness goals with FitForge. 
            Start your journey today and see the difference in just 30 days.
          </p>
          <button
            onClick={() => onNavigate('training')}
            className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;