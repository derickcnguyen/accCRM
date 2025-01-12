import React from 'react';
import type { Contact } from '../types';

interface ContactFormProps {
  onSubmit: (data: Omit<Contact, 'id' | 'created_at' | 'user_id'>) => void;
  initialData?: Contact | null;
}

export function ContactForm({ onSubmit, initialData }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      job_role: formData.get('job_role') as string,
      status: formData.get('status') as Contact['status'],
      last_contacted: formData.get('last_contacted') as string,
      notes: formData.get('notes') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold mb-1">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={initialData?.name}
          required
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Job Role</label>
        <input
          type="text"
          name="job_role"
          defaultValue={initialData?.job_role}
          placeholder="e.g. Software Engineer, Marketing Manager"
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={initialData?.email}
          required
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          defaultValue={initialData?.phone}
          required
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Company</label>
        <input
          type="text"
          name="company"
          defaultValue={initialData?.company}
          required
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Status</label>
        <select
          name="status"
          defaultValue={initialData?.status || 'pending'}
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="lead">Lead</option>
          <option value="customer">Customer</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div>
        <label className="block font-bold mb-1">Last Contacted</label>
        <input
          type="date"
          name="last_contacted"
          defaultValue={initialData?.last_contacted?.split('T')[0]}
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">Notes</label>
        <textarea
          name="notes"
          defaultValue={initialData?.notes || ''}
          className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[100px] resize-none"
          placeholder="Add any notes about this contact..."
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-yellow-300 border-4 border-black font-bold hover:bg-yellow-400 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all"
      >
        {initialData ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
}