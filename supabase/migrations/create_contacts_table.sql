/*
  # Create contacts table for CRM

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with time zone)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `company` (text)
      - `status` (enum: lead, customer, archived)
      - `last_contacted` (timestamp with time zone, nullable)

  2. Security
    - Enable RLS on contacts table
    - Add policies for authenticated users to perform CRUD operations on their contacts
*/

-- Create enum type for contact status
CREATE TYPE contact_status AS ENUM ('lead', 'customer', 'archived');

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  status contact_status DEFAULT 'lead',
  last_contacted timestamptz,
  user_id uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create contacts"
  ON contacts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);