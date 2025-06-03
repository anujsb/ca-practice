'use client';

import { useState, useEffect } from 'react';
import ClientForm from '@/components/ClientForm';

export default function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/api/clients')
      .then((res) => res.json())
      .then(setClients);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <ClientForm setClients={setClients} />
      <ul>
        {clients.map((client: any) => (
          <li key={client.id}>{client.name} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
}