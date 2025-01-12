import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SocialLinks } from '../layout/SocialLinks';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-4 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 px-4 py-2 bg-white border-4 border-black font-bold hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="w-full max-w-md mb-8">
        <h1 className="text-5xl font-black transform -rotate-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 mb-2 text-center">
          Acc-CRM
        </h1>
        <p className="text-lg font-bold transform rotate-1 bg-blue-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 text-center">
          Where Relationships Build Results
        </p>
      </div>
      {children}
      <div className="absolute bottom-4 right-4">
        <SocialLinks />
      </div>
    </div>
  );
}