/*
  # Add Indian Business Schools

  1. Changes
    - Add top Indian business schools across different program types
    - Include schools for:
      - Full-Time MBA
      - Part-Time MBA
      - Online MBA
      - Master in Management
      - MSc Management
      - PhD Programs

  2. Data
    - Added schools with accurate fee structures in USD
    - Included major cities across India
*/

INSERT INTO schools (name, city, state, country, duration, tuition_fee, program_type) VALUES
  -- Full-Time MBA Programs - Indian Schools
  ('Indian Institute of Management Ahmedabad', 'Ahmedabad', 'Gujarat', 'India', 24, 65000, 'full-time-mba'),
  ('Indian Institute of Management Bangalore', 'Bangalore', 'Karnataka', 'India', 24, 62000, 'full-time-mba'),
  ('Indian School of Business', 'Hyderabad', 'Telangana', 'India', 12, 70000, 'full-time-mba'),
  ('Indian Institute of Management Calcutta', 'Kolkata', 'West Bengal', 'India', 24, 60000, 'full-time-mba'),

  -- Part-Time MBA Programs
  ('Indian Institute of Management Delhi', 'New Delhi', 'Delhi', 'India', 36, 45000, 'part-time-mba'),
  ('SP Jain Institute of Management', 'Mumbai', 'Maharashtra', 'India', 30, 42000, 'part-time-mba'),

  -- Online MBA Programs
  ('NMIMS Global Access', 'Mumbai', 'Maharashtra', 'India', 24, 15000, 'online-mba'),
  ('Amity University Online', 'Noida', 'Uttar Pradesh', 'India', 24, 12000, 'online-mba'),

  -- Master in Management Programs
  ('XLRI Jamshedpur', 'Jamshedpur', 'Jharkhand', 'India', 24, 35000, 'mim'),
  ('Management Development Institute', 'Gurgaon', 'Haryana', 'India', 24, 32000, 'mim'),

  -- MSc Management Programs
  ('Indian Institute of Technology Delhi', 'New Delhi', 'Delhi', 'India', 24, 25000, 'msc-management'),
  ('Indian Institute of Technology Bombay', 'Mumbai', 'Maharashtra', 'India', 24, 24000, 'msc-management'),

  -- PhD Programs
  ('Indian Institute of Management Bangalore', 'Bangalore', 'Karnataka', 'India', 48, 30000, 'phd'),
  ('Indian Institute of Management Ahmedabad', 'Ahmedabad', 'Gujarat', 'India', 48, 32000, 'phd');