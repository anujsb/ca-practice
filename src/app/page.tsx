import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Zoho Practice Clone</h1>
      <nav>
        <ul className="space-y-2">
          <li><Link href="/clients" className="text-blue-500">Clients</Link></li>
          <li><Link href="/tasks" className="text-blue-500">Tasks</Link></li>
          <li><Link href="/billing" className="text-blue-500">Billing</Link></li>
        </ul>
      </nav>
    </div>
  );
}