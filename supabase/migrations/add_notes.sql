/*
  # Add notes field to contacts table

  1. Changes
    - Add `notes` column to `contacts` table
      - Type: text
      - Nullable: true
      - Default: null
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contacts' AND column_name = 'notes'
  ) THEN
    ALTER TABLE contacts ADD COLUMN notes text;
  END IF;
END $$;