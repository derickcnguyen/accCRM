/*
  # Add job role field to contacts table

  1. Changes
    - Add `job_role` column to `contacts` table
      - Type: text
      - Nullable: true
      - Default: null
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contacts' AND column_name = 'job_role'
  ) THEN
    ALTER TABLE contacts ADD COLUMN job_role text;
  END IF;
END $$;