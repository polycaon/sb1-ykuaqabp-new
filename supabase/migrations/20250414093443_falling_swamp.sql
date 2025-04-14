/*
  # Update Program Types: Replace PhD with Executive MBA

  1. Changes
    - Replace 'PhD in Management' program type with 'Executive MBA'
    - Update id, name, description, and other relevant fields
    - Maintain existing row level security policies
*/

DO $$ 
BEGIN 
  -- Update program type from PhD to Executive MBA
  UPDATE program_types
  SET 
    id = 'emba',
    name = 'Executive MBA',
    description = 'Designed for senior executives and leaders. Flexible format combining intensive in-person modules with distance learning.',
    average_duration = '18-24 months',
    average_fee = '$125,000+',
    icon = 'Briefcase'
  WHERE id = 'phd';

  -- Update related schools to reference new program type
  UPDATE schools
  SET program_type = 'emba'
  WHERE program_type = 'phd';
END $$;