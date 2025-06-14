import React, { useState } from 'react';
import { ChevronRight, Clock, Target, Zap, Users, Calendar } from 'lucide-react';
import WorkoutCard from '../components/WorkoutCard';

const Training: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const workoutModules = [
    {
      id: 'full-body',
      title: 'Full Body Workout',
      description: 'Complete workout targeting all major muscle groups',
      exercises: 12,
      duration: '45-60 min',
      difficulty: 'Intermediate' as const,
      color: 'from-blue-500 to-blue-600',
      workouts: [
        { name: 'Full Body Strength', duration: '45 min', exercises: 10 },
        { name: 'Full Body HIIT', duration: '30 min', exercises: 8 },
        { name: 'Full Body Endurance', duration: '60 min', exercises: 15 },
      ]
    },
    {
      id: 'chest',
      title: 'Chest Workout',
      description: 'Focused chest exercises for strength and definition',
      exercises: 8,
      duration: '30-45 min',
      difficulty: 'Beginner' as const,
      color: 'from-red-500 to-red-600',
      workouts: [
        { name: 'Chest Power', duration: '35 min', exercises: 8 },
        { name: 'Chest Pump', duration: '40 min', exercises: 10 },
        { name: 'Upper Chest Focus', duration: '30 min', exercises: 6 },
      ]
    },
    {
      id: 'back',
      title: 'Back Workout',
      description: 'Build a strong and defined back with targeted exercises',
      exercises: 10,
      duration: '40-50 min',
      difficulty: 'Intermediate' as const,
      color: 'from-green-500 to-green-600',
      workouts: [
        { name: 'Back Strength', duration: '45 min', exercises: 9 },
        { name: 'Lat Focus', duration: '35 min', exercises: 7 },
        { name: 'Back & Rear Delts', duration: '50 min', exercises: 12 },
      ]
    },
    {
      id: 'arms',
      title: 'Arm Workout',
      description: 'Sculpt impressive arms with bicep and tricep exercises',
      exercises: 9,
      duration: '35-45 min',
      difficulty: 'Beginner' as const,
      color: 'from-purple-500 to-purple-600',
      workouts: [
        { name: 'Arm Pump', duration: '40 min', exercises: 10 },
        { name: 'Bicep Blaster', duration: '25 min', exercises: 6 },
        { name: 'Tricep Crusher', duration: '30 min', exercises: 7 },
      ]
    },
    {
      id: 'shoulders',
      title: 'Shoulder Workout',
      description: 'Develop strong, rounded shoulders with comprehensive training',
      exercises: 8,
      duration: '30-40 min',
      difficulty: 'Intermediate' as const,
      color: 'from-yellow-500 to-yellow-600',
      workouts: [
        { name: 'Shoulder Power', duration: '35 min', exercises: 8 },
        { name: 'Lateral Raise Focus', duration: '25 min', exercises: 5 },
        { name: 'Shoulder Stability', duration: '40 min', exercises: 10 },
      ]
    },
    {
      id: 'lower-body',
      title: 'Lower Body Workout',
      description: 'Build powerful legs and glutes with compound movements',
      exercises: 11,
      duration: '45-55 min',
      difficulty: 'Advanced' as const,
      color: 'from-indigo-500 to-indigo-600',
      workouts: [
        { name: 'Leg Power', duration: '50 min', exercises: 12 },
        { name: 'Glute Focus', duration: '40 min', exercises: 9 },
        { name: 'Quad & Hamstring', duration: '45 min', exercises: 10 },
      ]
    },
    {
      id: 'abs',
      title: 'Abs Workout',
      description: 'Core strengthening exercises for a defined midsection',
      exercises: 7,
      duration: '20-30 min',
      difficulty: 'Beginner' as const,
      color: 'from-orange-500 to-orange-600',
      workouts: [
        { name: 'Core Burn', duration: '25 min', exercises: 8 },
        { name: 'Six Pack Attack', duration: '20 min', exercises: 6 },
        { name: 'Core Stability', duration: '30 min', exercises: 10 },
      ]
    },
  ];

  const selectedModuleData = workoutModules.find(m => m.id === selectedModule);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!selectedModule ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Training Modules
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Choose from our comprehensive workout modules designed by professional trainers. 
                Each module contains multiple workouts targeting specific muscle groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workoutModules.map((module) => (
                <WorkoutCard
                  key={module.id}
                  title={module.title}
                  duration={module.duration}
                  difficulty={module.difficulty}
                  exercises={module.exercises}
                  description={module.description}
                  onClick={() => setSelectedModule(module.id)}
                />
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Targeted Training</h3>
                  <p className="text-secondary-600">Each module focuses on specific muscle groups for optimal results</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Expert Designed</h3>
                  <p className="text-secondary-600">Created by certified trainers with years of experience</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Progressive</h3>
                  <p className="text-secondary-600">Workouts that adapt and progress with your fitness level</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center mb-8">
              <button
                onClick={() => setSelectedModule(null)}
                className="text-primary-600 hover:text-primary-800 font-medium flex items-center space-x-2"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span>Back to Modules</span>
              </button>
            </div>

            <div className={`h-64 bg-gradient-to-br ${selectedModuleData?.color} rounded-2xl mb-8 relative overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">{selectedModuleData?.title}</h1>
                  <p className="text-xl text-white/90 mb-6">{selectedModuleData?.description}</p>
                  <div className="flex items-center justify-center space-x-8 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{selectedModuleData?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>{selectedModuleData?.exercises} exercises</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>{selectedModuleData?.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedModuleData?.workouts.map((workout, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-primary-100 hover:border-primary-300 group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">{workout.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{workout.exercises} exercises</span>
                      </div>
                    </div>
                    <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                      <Zap className="w-4 h-4" />
                      <span>Start Workout</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;