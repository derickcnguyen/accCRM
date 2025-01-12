import React, { useState } from 'react';
import { Phone, Mail, Building2, Clock, Edit, Trash2, StickyNote, Briefcase } from 'lucide-react';
import type { Contact } from '../../types';

interface ContactCardContentProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export function ContactCardContent({ contact, onEdit, onDelete, onUpdateNotes }: ContactCardContentProps) {
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState(contact.notes || '');

  const handleNotesSubmit = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    onUpdateNotes(contact.id, notes);
    setIsEditingNotes(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNotesSubmit();
    }
  };

  return (
    <>
      <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(contact);
          }}
          className="p-2 bg-yellow-300 border-2 border-black hover:bg-yellow-400 transition-colors"
          aria-label="Edit contact"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(contact.id);
          }}
          className="p-2 bg-red-300 border-2 border-black hover:bg-red-400 transition-colors"
          aria-label="Delete contact"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <h3 className="text-xl font-bold mb-4 break-all">{contact.name}</h3>
      
      <div className="space-y-2">
        {contact.job_role && (
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="flex-shrink-0" />
            <span className="break-all">{contact.job_role}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Mail size={16} className="flex-shrink-0" />
          <a 
            href={`mailto:${contact.email}`} 
            className="underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {contact.email}
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone size={16} className="flex-shrink-0" />
          <a 
            href={`tel:${contact.phone}`} 
            className="underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {contact.phone}
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Building2 size={16} className="flex-shrink-0" />
          <span className="break-all">{contact.company}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock size={16} className="flex-shrink-0" />
          <span className="break-all">
            Last contacted:{' '}
            {contact.last_contacted
              ? new Date(contact.last_contacted).toLocaleDateString()
              : 'Never'}
          </span>
        </div>

        <div className="pt-2" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-2 mb-2">
            <StickyNote size={16} className="flex-shrink-0" />
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
                className="w-full p-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[80px] resize-none break-all"
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
            <p className="text-gray-600 text-sm whitespace-pre-wrap break-all max-w-full overflow-hidden">
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
    </>
  );
}