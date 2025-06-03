'use client';

import { useState } from 'react';

export default function TaskForm({ setTasks }: { setTasks: (tasks: any) => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, clientId: parseInt(clientId) }),
    });
    const newTask = await res.json();
    setTasks((prev: any) => [...prev, newTask]);
    setTitle('');
    setDescription('');
    setClientId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 mr-2"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Client ID"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
}