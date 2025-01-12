import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { AuthLayout } from './AuthLayout';

export function SignUpForm({ onToggle }: { onToggle: () => void }) {
  const supabase = useSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <UserPlus /> Sign Up
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border-2 border-red-400 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-yellow-300 border-4 border-black font-bold hover:bg-yellow-400 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>

          <button
            type="button"
            onClick={onToggle}
            className="w-full p-3 bg-white border-4 border-black font-bold hover:bg-gray-50 hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-all"
          >
            Already have an account? Sign In
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}