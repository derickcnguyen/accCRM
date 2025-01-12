import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContactCard } from './components/ContactCard';
import { ContactForm } from './components/ContactForm';
import { AuthContainer } from './components/auth/AuthContainer';
import { LoadingSpinner } from './components/layout/LoadingSpinner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/layout/Modal';
import { LandingPage } from './components/LandingPage';
import { useContactStore } from './store/contactStore';
import { useAuth } from './hooks/useAuth';
import type { Contact } from './types';

function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const { contacts, loading, error, fetchContacts, addContact, updateContact, deleteContact } = useContactStore();
  const [showForm, setShowForm] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState<Contact | null>(null);

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user, fetchContacts]);

  if (authLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-100 flex items-center justify-center">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (data: Omit<Contact, 'id' | 'created_at' | 'user_id'>) => {
    if (editingContact) {
      await updateContact(editingContact.id, data);
    } else {
      await addContact(data);
    }
    setShowForm(false);
    setEditingContact(null);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    await updateContact(id, { notes });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Header onAddContact={() => setShowForm(true)} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onEdit={handleEdit}
                onDelete={deleteContact}
                onUpdateNotes={handleUpdateNotes}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={showForm}
        onClose={handleCloseForm}
        title={editingContact ? 'Edit Contact' : 'Add New Contact'}
      >
        <ContactForm onSubmit={handleSubmit} initialData={editingContact} />
      </Modal>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}