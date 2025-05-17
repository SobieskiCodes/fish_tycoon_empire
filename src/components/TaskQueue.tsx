import React from 'react';
import { ArrowUp, ArrowDown, X, Timer, Zap, AlertTriangle } from 'lucide-react';

interface QueuedTask {
  id: string;
  name: string;
  type: 'breeding' | 'foraging' | 'crafting';
  apCost: number;
  startTime: string;
}

interface ActiveTask {
  id: string;
  name: string;
  type: 'breeding' | 'foraging' | 'crafting';
  progress: number;
  timeRemaining: string;
  apCost: number;
}

const TaskQueue: React.FC = () => {
  const activeTask: ActiveTask = {
    id: '1',
    name: 'Foraging: Riverbank',
    type: 'foraging',
    progress: 75,
    timeRemaining: '10m 15s',
    apCost: 8
  };

  const queuedTasks: QueuedTask[] = [
    {
      id: '2',
      name: 'Breeding: Angelfish Pair',
      type: 'breeding',
      apCost: 12,
      startTime: '25m'
    },
    {
      id: '3',
      name: 'Gathering: River Stones',
      type: 'foraging',
      apCost: 5,
      startTime: '55m'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="h-5 w-5 text-blue-400" />
        <h2 className="text-lg font-semibold text-white">Task Queue</h2>
      </div>

      {/* Active Task */}
      <div className="bg-gray-700 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium text-white">{activeTask.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>{activeTask.apCost} AP</span>
            </div>
          </div>
          <button className="text-red-400 hover:text-red-300 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Progress</span>
            <span>{activeTask.progress}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${activeTask.progress}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-400">
            {activeTask.timeRemaining} remaining
          </div>
        </div>
      </div>

      {/* Queued Tasks */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Queue</h3>
        {queuedTasks.map((task, index) => (
          <div key={task.id} className="bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-white">{task.name}</p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>{task.apCost} AP</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="h-4 w-4 text-blue-400" />
                    <span>Starts in: {task.startTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {index > 0 && (
                  <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                    <ArrowUp className="h-4 w-4 text-blue-400" />
                  </button>
                )}
                {index < queuedTasks.length - 1 && (
                  <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                    <ArrowDown className="h-4 w-4 text-blue-400" />
                  </button>
                )}
                <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                  <X className="h-4 w-4 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {queuedTasks.length === 0 && (
        <div className="flex items-center justify-center gap-2 text-gray-400 py-4">
          <AlertTriangle className="h-5 w-5" />
          <span>No tasks in queue</span>
        </div>
      )}
    </div>
  );
};

export default TaskQueue;