import React from 'react';
import { ContactCardContent } from './ContactCardContent';
import type { Contact } from '../../types';

interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export function ContactCard({ contact, onEdit, onDelete, onUpdateNotes }: ContactCardProps) {
  return (
    <div 
      onClick={() => onEdit(contact)}
      className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
    >
      <ContactCardContent 
        contact={contact}
        onEdit={onEdit}
        onDelete={onDelete}
        onUpdateNotes={onUpdateNotes}
      />
    </div>
  );
}