import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
      <Loader2 className="animate-spin" size={48} />
    </div>
  );
}