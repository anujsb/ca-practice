'use client';

import { useState } from 'react';

export default function BillingForm({ setBillingRecords }: { setBillingRecords: (records: any) => void }) {
  const [clientId, setClientId] = useState('');
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/billing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId: parseInt(clientId), hours: parseInt(hours), rate: parseInt(rate) }),
    });
    const newRecord = await res.json();
    setBillingRecords((prev: any) => [...prev, newRecord]);
    setClientId('');
    setHours('');
    setRate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="number"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Client ID"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Hours"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Rate"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Billing
      </button>
    </form>
  );
}