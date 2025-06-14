import React, { useState } from 'react';
import { Search, Filter, Clock, Target, Zap, Star } from 'lucide-react';

interface Workout {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  muscleGroup: string;
  equipment: string[];
  rating: number;
  exercises: number;
}

const Browse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');

  const workouts: Workout[] = [
    {
      id: '1',
      name: 'Morning Power Push',
      description: 'High-intensity upper body workout to kickstart your day',
      duration: '30 min',
      difficulty: 'Intermediate',
      muscleGroup: 'Upper Body',
      equipment: ['Dumbbells', 'Bench'],
      rating: 4.8,
      exercises: 8,
    },
    {
      id: '2',
      name: 'Bodyweight Beast',
      description: 'No equipment needed - just your body weight and determination',
      duration: '25 min',
      difficulty: 'Beginner',
      muscleGroup: 'Full Body',
      equipment: ['Bodyweight'],
      rating: 4.9,
      exercises: 10,
    },
    {
      id: '3',
      name: 'Iron Legs Challenge',
      description: 'Brutal leg workout that will test your limits',
      duration: '45 min',
      difficulty: 'Advanced',
      muscleGroup: 'Lower Body',
      equipment: ['Barbell', 'Dumbbells'],
      rating: 4.7,
      exercises: 12,
    },
    {
      id: '4',
      name: 'Core Crusher',
      description: 'Targeted abs and core strengthening routine',
      duration: '20 min',
      difficulty: 'Intermediate',
      muscleGroup: 'Core',
      equipment: ['Mat', 'Medicine Ball'],
      rating: 4.6,
      exercises: 6,
    },
    {
      id: '5',
      name: 'Cardio Blast',
      description: 'High-energy cardio workout to burn calories fast',
      duration: '35 min',
      difficulty: 'Beginner',
      muscleGroup: 'Cardio',
      equipment: ['Bodyweight'],
      rating: 4.8,
      exercises: 15,
    },
    {
      id: '6',
      name: 'Strength Foundation',
      description: 'Build fundamental strength with compound movements',
      duration: '50 min',
      difficulty: 'Intermediate',
      muscleGroup: 'Full Body',
      equipment: ['Barbell', 'Dumbbells', 'Bench'],
      rating: 4.9,
      exercises: 9,
    },
  ];

  const muscleGroups = ['Full Body', 'Upper Body', 'Lower Body', 'Core', 'Cardio'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const equipment = ['Bodyweight', 'Dumbbells', 'Barbell', 'Bench', 'Mat', 'Medicine Ball'];

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || workout.difficulty === selectedDifficulty;
    const matchesMuscleGroup = !selectedMuscleGroup || workout.muscleGroup === selectedMuscleGroup;
    const matchesEquipment = !selectedEquipment || workout.equipment.includes(selectedEquipment);

    return matchesSearch && matchesDifficulty && matchesMuscleGroup && matchesEquipment;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDifficulty('');
    setSelectedMuscleGroup('');
    setSelectedEquipment('');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Browse Workouts
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover the perfect workout for your goals, equipment, and fitness level. 
            Use our smart filters to find exactly what you need.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search workouts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            {/* Muscle Group Filter */}
            <select
              value={selectedMuscleGroup}
              onChange={(e) => setSelectedMuscleGroup(e.target.value)}
              className="px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Muscle Groups</option>
              {muscleGroups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>

            {/* Equipment Filter */}
            <select
              value={selectedEquipment}
              onChange={(e) => setSelectedEquipment(e.target.value)}
              className="px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Equipment</option>
              {equipment.map(eq => (
                <option key={eq} value={eq}>{eq}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-secondary-600">
              {filteredWorkouts.length} workout{filteredWorkouts.length !== 1 ? 's' : ''} found
            </div>
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkouts.map(workout => (
            <div
              key={workout.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-primary-100 hover:border-primary-300 group animate-fade-in"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-t-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{workout.rating}</span>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(workout.difficulty)}`}>
                    {workout.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{workout.name}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{workout.exercises} exercises</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                    {workout.muscleGroup}
                  </span>
                </div>
                
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {workout.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-secondary-500 mb-2">Equipment needed:</div>
                  <div className="flex flex-wrap gap-1">
                    {workout.equipment.map((eq, index) => (
                      <span
                        key={index}
                        className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs"
                      >
                        {eq}
                      </span>
                    ))}
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

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-12 h-12 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">No Workouts Found</h3>
            <p className="text-secondary-600 mb-8">
              Try adjusting your filters or search terms to find the perfect workout.
            </p>
            <button
              onClick={clearFilters}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;