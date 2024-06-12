import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  status: 'todo' | 'inProgress' | 'done';
}

interface TaskItemProps {
  task: Task;
  onEdit: (id: number, title: string, description: string) => void;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
  onMove: (id: number, newStatus: Task['status']) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleCompletion, onMove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    onEdit(task.id, title, description);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border mb-2 p-2 w-full rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border mb-2 p-2 w-full rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </h3>
          <p className="text-gray-600">{task.description}</p>
          <div className="flex space-x-2 mt-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
            <button
              className={`font-bold py-1 px-2 rounded ${task.completed ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-gray-300 hover:bg-gray-500 text-gray-700'}`}
              onClick={() => onToggleCompletion(task.id)}
            >
              {task.completed ? 'Unmark' : 'Complete'}
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            {task.status !== 'todo' && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMove(task.id, 'todo')}
              >
                Move to To Do
              </button>
            )}
            {task.status !== 'inProgress' && (
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMove(task.id, 'inProgress')}
              >
                Move to In Progress
              </button>
            )}
            {task.status !== 'done' && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMove(task.id, 'done')}
              >
                Move to Done
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
