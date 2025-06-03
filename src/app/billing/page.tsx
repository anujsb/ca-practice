'use client';

import { useState, useEffect } from 'react';
import BillingForm from '@/components/BillingForm';

export default function BillingPage() {
  const [billingRecords, setBillingRecords] = useState([]);

  useEffect(() => {
    fetch('/api/billing')
      .then((res) => res.json())
      .then(setBillingRecords);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      <BillingForm setBillingRecords={setBillingRecords} />
      <ul>
        {billingRecords.map((record: any) => (
          <li key={record.id}>
            Client ID: {record.clientId} - {record.hours} hours @ ${record.rate} = ${record.total}
          </li>
        ))}
      </ul>
    </div>
  );
}