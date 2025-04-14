/*
  # Update Program Types: Replace PhD with Executive MBA

  1. Changes
    - Replace 'PhD in Management' program type with 'Executive MBA'
    - Update id, name, description, and other relevant fields
    - Handle foreign key constraints properly
    
  2. Implementation
    - Create new Executive MBA program type
    - Update schools to reference new program type
    - Remove old PhD program type
*/

-- First create the new program type
INSERT INTO program_types (
  id,
  name,
  description,
  average_duration,
  average_fee,
  icon
) VALUES (
  'emba',
  'Executive MBA',
  'Designed for senior executives and leaders. Flexible format combining intensive in-person modules with distance learning.',
  '18-24 months',
  '$125,000+',
  'Briefcase'
);

-- Update schools to reference the new program type
UPDATE schools
SET program_type = 'emba'
WHERE program_type = 'phd';

-- Now we can safely delete the old program type
DELETE FROM program_types
WHERE id = 'phd';