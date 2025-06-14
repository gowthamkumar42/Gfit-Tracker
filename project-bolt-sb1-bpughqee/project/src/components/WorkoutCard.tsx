import React from 'react';
import { Clock, Target, Zap } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: number;
  description: string;
  image?: string;
  onClick?: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  difficulty,
  exercises,
  description,
  onClick
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-primary-100 hover:border-primary-300 animate-fade-in"
    >
      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-t-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>{exercises} exercises</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-secondary-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-primary-600">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Start Workout</span>
          </div>
          <div className="w-8 h-0.5 bg-primary-200 group-hover:bg-primary-500 transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;