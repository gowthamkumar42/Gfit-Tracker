import React, { useState } from 'react';
import { Calendar, TrendingUp, Target, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek } from 'date-fns';

const Reports: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock data for completed workouts
  const completedWorkouts = [
    { date: new Date(2024, 0, 5), name: 'Chest Power', duration: 35 },
    { date: new Date(2024, 0, 7), name: 'Leg Day', duration: 50 },
    { date: new Date(2024, 0, 10), name: 'Upper Body', duration: 40 },
    { date: new Date(2024, 0, 12), name: 'Core Blast', duration: 25 },
    { date: new Date(2024, 0, 15), name: 'Full Body', duration: 45 },
    { date: new Date(2024, 0, 17), name: 'Cardio HIIT', duration: 30 },
    { date: new Date(2024, 0, 20), name: 'Back & Biceps', duration: 42 },
    { date: new Date(2024, 0, 22), name: 'Shoulder Focus', duration: 35 },
    { date: new Date(2024, 0, 25), name: 'Leg Power', duration: 48 },
    { date: new Date(2024, 0, 27), name: 'Push Day', duration: 38 },
  ];

  const stats = [
    { label: 'Workouts This Month', value: '15', change: '+3 from last month', icon: Target },
    { label: 'Total Minutes', value: '580', change: '+120 from last month', icon: TrendingUp },
    { label: 'Current Streak', value: '7 days', change: 'Personal best!', icon: Award },
    { label: 'Avg Duration', value: '38 min', change: '+5 min from last month', icon: Calendar },
  ];

  const bodyMetrics = [
    { metric: 'Weight', current: '75.2 kg', change: '-2.1 kg', trend: 'down' },
    { metric: 'Body Fat', current: '15.8%', change: '-1.2%', trend: 'down' },
    { metric: 'Muscle Mass', current: '63.2 kg', change: '+1.8 kg', trend: 'up' },
    { metric: 'BMI', current: '22.1', change: '-0.6', trend: 'down' },
  ];

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const hasWorkout = (date: Date) => {
    return completedWorkouts.some(workout => isSameDay(workout.date, date));
  };

  const getWorkout = (date: Date) => {
    return completedWorkouts.find(workout => isSameDay(workout.date, date));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Progress Reports
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Track your fitness journey with detailed progress reports, workout calendar, 
            and body transformation metrics.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-primary-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-secondary-600 mb-2">{stat.label}</h3>
                <p className="text-xs text-green-600 font-medium">{stat.change}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Workout Calendar */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary-900">Workout Calendar</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-secondary-600" />
                </button>
                <h3 className="text-lg font-semibold text-secondary-900 min-w-[120px] text-center">
                  {format(currentDate, 'MMMM yyyy')}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-secondary-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-secondary-600">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                const isCurrentMonth = isSameMonth(day, currentDate);
                const workout = getWorkout(day);
                const hasWorkoutToday = hasWorkout(day);
                
                return (
                  <div
                    key={index}
                    className={`p-2 h-12 text-center text-sm relative ${
                      isCurrentMonth
                        ? hasWorkoutToday
                          ? 'bg-primary-500 text-white rounded-lg shadow-sm'
                          : 'text-secondary-900 hover:bg-primary-50 rounded-lg'
                        : 'text-secondary-300'
                    } transition-colors duration-200`}
                    title={workout ? `${workout.name} - ${workout.duration} min` : ''}
                  >
                    <div className="flex items-center justify-center h-full">
                      {format(day, 'd')}
                    </div>
                    {hasWorkoutToday && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 text-xs text-secondary-600">
              <span className="inline-flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded"></div>
                <span>Workout completed</span>
              </span>
            </div>
          </div>

          {/* Body Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Body Metrics</h2>
            
            <div className="space-y-4">
              {bodyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-100"
                >
                  <div>
                    <h3 className="font-semibold text-secondary-900">{metric.metric}</h3>
                    <p className="text-2xl font-bold text-primary-600">{metric.current}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {metric.change}
                    </div>
                    <div className={`text-xs ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-blue-500'
                    }`}>
                      {metric.trend === 'up' ? '↗ Improved' : '↘ Decreased'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary-100">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Recent Workouts</h2>
          
          <div className="space-y-3">
            {completedWorkouts.slice(-5).reverse().map((workout, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-100 hover:bg-primary-100 transition-colors duration-200"
              >
                <div>
                  <h3 className="font-semibold text-secondary-900">{workout.name}</h3>
                  <p className="text-sm text-secondary-600">{format(workout.date, 'MMMM d, yyyy')}</p>
                </div>
                <div className="text-right">
                  <div className="text-primary-600 font-medium">{workout.duration} min</div>
                  <div className="text-xs text-secondary-500">Completed</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Insights */}
        <div className="mt-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Progress Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🎯 Goals Status</h3>
              <ul className="space-y-2 text-primary-100">
                <li>✅ Workout 4x per week - On track!</li>
                <li>✅ Lose 2kg this month - Achieved!</li>
                <li>🔄 Increase bench press by 5kg - In progress</li>
                <li>🔄 Run 5K under 25 minutes - Training</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">📈 Recommendations</h3>
              <ul className="space-y-2 text-primary-100">
                <li>• Focus more on lower body workouts</li>
                <li>• Increase protein intake for muscle growth</li>
                <li>• Add more cardio sessions</li>
                <li>• Consider a rest day this week</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;