/*
  # Add Schools Data

  1. Changes
    - Insert initial schools data for various MBA programs
    - Include schools from US, UK, France, and Spain
    - Add data for different program types:
      - Full-Time MBA
      - Part-Time MBA
      - Online MBA
      - Master in Management

  2. Data Coverage
    - Top business schools worldwide
    - Accurate tuition fees and durations
    - Geographic diversity across multiple countries
*/

-- Insert schools data
INSERT INTO schools (name, city, state, country, duration, tuition_fee, program_type) VALUES
  -- Full-Time MBA Programs - US Schools
  ('Harvard Business School', 'Boston', 'Massachusetts', 'US', 24, 152820, 'full-time-mba'),
  ('Stanford Graduate School of Business', 'Stanford', 'California', 'US', 24, 164910, 'full-time-mba'),
  ('Wharton School', 'Philadelphia', 'Pennsylvania', 'US', 20, 169660, 'full-time-mba'),
  ('Booth School of Business', 'Chicago', 'Illinois', 'US', 21, 168396, 'full-time-mba'),
  ('Columbia Business School', 'New York', 'New York', 'US', 20, 176600, 'full-time-mba'),
  ('Kellogg School of Management', 'Evanston', 'Illinois', 'US', 24, 167220, 'full-time-mba'),
  ('MIT Sloan School of Management', 'Cambridge', 'Massachusetts', 'US', 24, 168700, 'full-time-mba'),
  ('Yale School of Management', 'New Haven', 'Connecticut', 'US', 24, 169800, 'full-time-mba'),
  ('Goizueta Business School', 'Atlanta', 'Georgia', 'US', 24, 148000, 'full-time-mba'),

  -- Full-Time MBA Programs - UK Schools
  ('London Business School', 'London', 'London', 'UK', 21, 119950, 'full-time-mba'),
  ('Judge Business School', 'Cambridge', 'London', 'UK', 12, 74000, 'full-time-mba'),
  ('Said Business School', 'Oxford', 'London', 'UK', 12, 83770, 'full-time-mba'),

  -- Full-Time MBA Programs - European Schools
  ('INSEAD', 'Fontainebleau', 'Île-de-France', 'France', 12, 107600, 'full-time-mba'),
  ('IESE Business School', 'Barcelona', 'Catalonia', 'Spain', 15, 110000, 'full-time-mba'),
  ('HEC Paris Business School', 'Paris', 'Île-de-France', 'France', 16, 98000, 'full-time-mba'),

  -- Part-Time MBA Programs
  ('NYU Stern School of Business', 'New York', 'New York', 'US', 36, 147832, 'part-time-mba'),
  ('UC Berkeley Haas', 'Berkeley', 'California', 'US', 30, 143812, 'part-time-mba'),
  ('Chicago Booth Evening MBA', 'Chicago', 'Illinois', 'US', 33, 149396, 'part-time-mba'),

  -- Online MBA Programs
  ('Imperial College Business School', 'London', 'London', 'UK', 24, 41500, 'online-mba'),
  ('Warwick Business School', 'Coventry', 'London', 'UK', 24, 45500, 'online-mba'),
  ('Carnegie Mellon Tepper', 'Pittsburgh', 'PA', 'US', 32, 141000, 'online-mba'),

  -- Master in Management Programs
  ('HEC Paris', 'Paris', 'Île-de-France', 'France', 18, 48000, 'mim'),
  ('London Business School MiM', 'London', 'London', 'UK', 12, 41500, 'mim'),
  ('ESADE Business School', 'Barcelona', 'Catalonia', 'Spain', 18, 35900, 'mim');