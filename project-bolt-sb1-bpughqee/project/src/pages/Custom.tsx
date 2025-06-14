import React, { useState } from 'react';
import { Plus, Trash2, Clock, Target, Save, Edit3 } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  muscleGroup: string;
}

interface WorkoutSet {
  id: string;
  name: string;
  exercises: Exercise[];
  totalTime: number;
}

const Custom: React.FC = () => {
  const [workoutSets, setWorkoutSets] = useState<WorkoutSet[]>([]);
  const [currentSet, setCurrentSet] = useState<WorkoutSet | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [setName, setSetName] = useState('');

  const availableExercises = [
    { name: 'Push-ups', muscleGroup: 'Chest' },
    { name: 'Squats', muscleGroup: 'Legs' },
    { name: 'Pull-ups', muscleGroup: 'Back' },
    { name: 'Bench Press', muscleGroup: 'Chest' },
    { name: 'Deadlifts', muscleGroup: 'Back' },
    { name: 'Shoulder Press', muscleGroup: 'Shoulders' },
    { name: 'Bicep Curls', muscleGroup: 'Arms' },
    { name: 'Tricep Dips', muscleGroup: 'Arms' },
    { name: 'Lunges', muscleGroup: 'Legs' },
    { name: 'Plank', muscleGroup: 'Core' },
    { name: 'Russian Twists', muscleGroup: 'Core' },
    { name: 'Mountain Climbers', muscleGroup: 'Full Body' },
  ];

  const muscleGroups = ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Full Body'];

  const addExerciseToSet = (exerciseName: string, muscleGroup: string) => {
    if (!currentSet) return;

    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: exerciseName,
      sets: 3,
      reps: '10-12',
      rest: '60s',
      muscleGroup,
    };

    setCurrentSet({
      ...currentSet,
      exercises: [...currentSet.exercises, newExercise],
    });
  };

  const removeExercise = (exerciseId: string) => {
    if (!currentSet) return;

    setCurrentSet({
      ...currentSet,
      exercises: currentSet.exercises.filter(ex => ex.id !== exerciseId),
    });
  };

  const updateExercise = (exerciseId: string, field: string, value: any) => {
    if (!currentSet) return;

    setCurrentSet({
      ...currentSet,
      exercises: currentSet.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, [field]: value } : ex
      ),
    });
  };

  const saveWorkoutSet = () => {
    if (!currentSet || !setName.trim()) return;

    const estimatedTime = currentSet.exercises.length * 5; // Rough estimate
    const finalSet: WorkoutSet = {
      ...currentSet,
      name: setName,
      totalTime: estimatedTime,
    };

    if (isCreating) {
      setWorkoutSets([...workoutSets, finalSet]);
    } else {
      setWorkoutSets(workoutSets.map(set => set.id === currentSet.id ? finalSet : set));
    }

    setCurrentSet(null);
    setIsCreating(false);
    setSetName('');
  };

  const startNewSet = () => {
    setCurrentSet({
      id: Date.now().toString(),
      name: '',
      exercises: [],
      totalTime: 0,
    });
    setIsCreating(true);
    setSetName('');
  };

  const editSet = (set: WorkoutSet) => {
    setCurrentSet(set);
    setSetName(set.name);
    setIsCreating(false);
  };

  const deleteSet = (setId: string) => {
    setWorkoutSets(workoutSets.filter(set => set.id !== setId));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Custom Workout Builder
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Create personalized workout sets tailored to your goals. Mix and match exercises 
            to build the perfect routine for your fitness journey.
          </p>
        </div>

        {!currentSet ? (
          <div className="space-y-8">
            {/* Create New Set Button */}
            <div className="text-center">
              <button
                onClick={startNewSet}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5" />
                <span>Create New Workout Set</span>
              </button>
            </div>

            {/* Existing Workout Sets */}
            {workoutSets.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Your Workout Sets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workoutSets.map((set) => (
                    <div
                      key={set.id}
                      className="bg-white rounded-xl shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-secondary-900 mb-3">{set.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{set.exercises.length} exercises</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>~{set.totalTime} min</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-xs text-secondary-500 mb-2">Exercises:</div>
                          <div className="flex flex-wrap gap-1">
                            {set.exercises.slice(0, 3).map((exercise, index) => (
                              <span
                                key={index}
                                className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                              >
                                {exercise.name}
                              </span>
                            ))}
                            {set.exercises.length > 3 && (
                              <span className="text-xs text-secondary-500">
                                +{set.exercises.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => editSet(set)}
                            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1"
                          >
                            <Edit3 className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => deleteSet(set.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {workoutSets.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">No Workout Sets Yet</h3>
                <p className="text-secondary-600 mb-8">
                  Create your first custom workout set to get started with personalized training.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Set Name Input */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Workout Set Name
              </label>
              <input
                type="text"
                value={setName}
                onChange={(e) => setSetName(e.target.value)}
                placeholder="Enter workout set name..."
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exercise Selection */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">Available Exercises</h3>
                
                {muscleGroups.map((group) => (
                  <div key={group} className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-800 mb-3">{group}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableExercises
                        .filter(ex => ex.muscleGroup === group)
                        .map((exercise, index) => (
                          <button
                            key={index}
                            onClick={() => addExerciseToSet(exercise.name, exercise.muscleGroup)}
                            className="text-left bg-primary-50 hover:bg-primary-100 text-primary-700 p-3 rounded-lg transition-all duration-200 border border-primary-200 hover:border-primary-300"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{exercise.name}</span>
                              <Plus className="w-4 h-4" />
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Set */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-900">Current Set</h3>
                  <div className="text-sm text-secondary-600">
                    {currentSet.exercises.length} exercises
                  </div>
                </div>

                {currentSet.exercises.length === 0 ? (
                  <div className="text-center py-8">
                    <Target className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-600">Add exercises to your workout set</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {currentSet.exercises.map((exercise) => (
                      <div
                        key={exercise.id}
                        className="bg-primary-50 rounded-lg p-4 border border-primary-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-secondary-900">{exercise.name}</h4>
                          <button
                            onClick={() => removeExercise(exercise.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-secondary-600 mb-1">
                              Sets
                            </label>
                            <input
                              type="number"
                              value={exercise.sets}
                              onChange={(e) => updateExercise(exercise.id, 'sets', parseInt(e.target.value))}
                              className="w-full px-2 py-1 border border-primary-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                              min="1"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-secondary-600 mb-1">
                              Reps
                            </label>
                            <input
                              type="text"
                              value={exercise.reps}
                              onChange={(e) => updateExercise(exercise.id, 'reps', e.target.value)}
                              className="w-full px-2 py-1 border border-primary-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-secondary-600 mb-1">
                              Rest
                            </label>
                            <input
                              type="text"
                              value={exercise.rest}
                              onChange={(e) => updateExercise(exercise.id, 'rest', e.target.value)}
                              className="w-full px-2 py-1 border border-primary-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={saveWorkoutSet}
                    disabled={!setName.trim() || currentSet.exercises.length === 0}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 disabled:bg-secondary-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Set</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentSet(null);
                      setIsCreating(false);
                      setSetName('');
                    }}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Custom;