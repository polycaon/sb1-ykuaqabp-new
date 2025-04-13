/*
  # Initial Schema Setup for MBA Fees Explorer

  1. New Tables
    - `program_types`
      - `id` (text, primary key)
      - `name` (text)
      - `description` (text)
      - `average_duration` (text)
      - `average_fee` (text)
      - `icon` (text)
    
    - `schools`
      - `id` (uuid, primary key)
      - `name` (text)
      - `city` (text)
      - `state` (text)
      - `country` (text)
      - `duration` (integer)
      - `tuition_fee` (numeric)
      - `program_type` (text, references program_types)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read data
    - Add policies for admin users to manage data
*/

-- Create program_types table
CREATE TABLE program_types (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  average_duration text NOT NULL,
  average_fee text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create schools table
CREATE TABLE schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  country text NOT NULL,
  duration integer NOT NULL,
  tuition_fee numeric NOT NULL,
  program_type text REFERENCES program_types(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE program_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;

-- Create policies for program_types
CREATE POLICY "Allow public read access to program_types"
  ON program_types
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin update on program_types"
  ON program_types
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@example.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@example.com');

-- Create policies for schools
CREATE POLICY "Allow public read access to schools"
  ON schools
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin update on schools"
  ON schools
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@example.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@example.com');

-- Insert initial program types
INSERT INTO program_types (id, name, description, average_duration, average_fee, icon) VALUES
  ('full-time-mba', 'Full-Time MBA', 'Traditional two-year program with comprehensive business education and internship opportunities. Ideal for career switchers and accelerated growth.', '18-24 months', '$150,000+', 'GraduationCap'),
  ('part-time-mba', 'Part-Time MBA', 'Flexible program designed for working professionals, allowing you to earn your degree while maintaining your career.', '24-36 months', '$100,000+', 'Clock'),
  ('online-mba', 'Online MBA', 'Remote learning with the same curriculum as on-campus programs. Perfect for global professionals seeking flexibility.', '18-24 months', '$80,000+', 'Globe'),
  ('mim', 'Master in Management', 'Designed for recent graduates with limited work experience. Focus on foundational business concepts and leadership skills.', '12-15 months', '$50,000+', 'BookOpen'),
  ('msc-management', 'MSc Management', 'Specialized management education with research focus. Ideal for those seeking deep expertise in specific business areas.', '12 months', '$45,000+', 'ScrollText'),
  ('phd', 'PhD in Management', 'Advanced research degree for academic and research careers. Develop cutting-edge knowledge in management theory and practice.', '4-5 years', 'Varies', 'Brain');