import React, { useState } from 'react';
import { Phone, Mail, Building2, Clock, Edit, Trash2, StickyNote, Briefcase } from 'lucide-react';
import type { Contact } from '../types';

interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export function ContactCard({ contact, onEdit, onDelete, onUpdateNotes }: ContactCardProps) {
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState(contact.notes || '');

  const handleNotesSubmit = () => {
    onUpdateNotes(contact.id, notes);
    setIsEditingNotes(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNotesSubmit();
    }
  };

  return (
    <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="absolute top-4 right-4 space-x-2">
        <button
          onClick={() => onEdit(contact)}
          className="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 transition-colors"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          className="p-2 bg-red-300 border-2 border-black hover:bg-red-400 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <h3 className="text-xl font-bold mb-4">{contact.name}</h3>
      
      <div className="space-y-2">
        {contact.job_role && (
          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            <span>{contact.job_role}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href={`tel:${contact.phone}`} className="underline">
            {contact.phone}
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Building2 size={16} />
          <span>{contact.company}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>
            Last contacted:{' '}
            {contact.last_contacted
              ? new Date(contact.last_contacted).toLocaleDateString()
              : 'Never'}
          </span>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2">
            <StickyNote size={16} />
            <span className="font-bold">Notes</span>
            {!isEditingNotes && (
              <button
                onClick={() => setIsEditingNotes(true)}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                {contact.notes ? 'Edit' : 'Add'}
              </button>
            )}
          </div>
          
          {isEditingNotes ? (
            <div className="space-y-2">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[80px] resize-none"
                placeholder="Add notes..."
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleNotesSubmit}
                  className="px-3 py-1 bg-green-300 border-2 border-black hover:bg-green-400 transition-colors text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setNotes(contact.notes || '');
                    setIsEditingNotes(false);
                  }}
                  className="px-3 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-sm whitespace-pre-wrap">
              {contact.notes || 'No notes added yet'}
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <span className={`
          px-3 py-1 text-sm font-bold border-2 border-black
          ${contact.status === 'lead' ? 'bg-blue-300' : ''}
          ${contact.status === 'customer' ? 'bg-green-300' : ''}
          ${contact.status === 'archived' ? 'bg-gray-300' : ''}
        `}>
          {contact.status.toUpperCase()}
        </span>
      </div>
    </div>
  );
}