import React, { useState } from 'react';
import { User, Edit3, Save, Camera, Award, Target, TrendingUp } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Gowtham kumar',
    email: 'gowtham@email.com',
    age: 20,
    gender: 'Male',
    height: 180,
    weight: 60,
    fitnessLevel: 'Intermediate',
    goals: ['Gain Weight', 'Build Muscle', 'Improve Endurance'],
    joinDate: '2023-06-15',
  });

  const achievements = [
    { title: 'First Workout', description: 'Completed your first workout', date: '2023-06-15', icon: '🎯' },
    { title: 'Week Warrior', description: '7 days workout streak', date: '2023-07-01', icon: '🔥' },
    { title: 'Month Master', description: '30 days workout streak', date: '2023-08-15', icon: '💪' },
    { title: 'Weight Loss Champion', description: 'Lost 5kg in 3 months', date: '2023-09-15', icon: '⚖️' },
    { title: 'Strength Beast', description: 'Increased bench press by 20kg', date: '2023-10-01', icon: '🏋️' },
    { title: 'Consistency King', description: '100 workouts completed', date: '2023-12-01', icon: '👑' },
  ];

  const workoutStats = [
    { label: 'Total Workouts', value: '127', icon: Target },
    { label: 'Total Hours', value: '89.5', icon: TrendingUp },
    { label: 'Calories Burned', value: '15,420', icon: Award },
    { label: 'Current Streak', value: '12 days', icon: TrendingUp },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field: string, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            My Profile
          </h1>
          <p className="text-xl text-secondary-600">
            Manage your personal information and track your fitness journey.
          </p>
        </div>

        {/* Profile Header */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold backdrop-blur-sm">
                {profile.name.charAt(0)}
              </div>
              <button className="absolute bottom-2 right-2 bg-white text-primary-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
              <p className="text-primary-100 mb-4">{profile.email}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{profile.age}</div>
                  <div className="text-sm text-primary-200">Age</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{profile.height}cm</div>
                  <div className="text-sm text-primary-200">Height</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{profile.weight}kg</div>
                  <div className="text-sm text-primary-200">Weight</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{profile.fitnessLevel}</div>
                  <div className="text-sm text-primary-200">Level</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-secondary-900">Personal Information</h3>
                {isEditing && (
                  <button
                    onClick={handleSave}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.name}</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.email}</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Age</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profile.age}
                      onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.age} years</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Gender</label>
                  {isEditing ? (
                    <select
                      value={profile.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.gender}</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Height (cm)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profile.height}
                      onChange={(e) => handleInputChange('height', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.height} cm</div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Weight (kg)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      step="0.1"
                      value={profile.weight}
                      onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-primary-50 rounded-lg text-secondary-900">{profile.weight} kg</div>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">Fitness Goals</label>
                <div className="flex flex-wrap gap-2">
                  {profile.goals.map((goal, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {goal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">{achievement.title}</h4>
                        <p className="text-sm text-secondary-600">{achievement.description}</p>
                        <p className="text-xs text-secondary-500">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workout Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Workout Stats</h3>
              <div className="space-y-4">
                {workoutStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-secondary-900">{stat.label}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-primary-600">{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BMI Calculator */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Health Metrics</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {(profile.weight / Math.pow(profile.height / 100, 2)).toFixed(1)}
                  </div>
                  <div className="text-sm text-secondary-600">BMI</div>
                  <div className="text-xs text-secondary-500 mt-1">Normal weight</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">-3.2kg</div>
                  <div className="text-sm text-secondary-600">Weight Change</div>
                  <div className="text-xs text-secondary-500 mt-1">Since joining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;