/*
  # Add Blog System

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `author` (text)
      - `read_time` (text)
      - `published` (boolean)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policy for public read access
    - Add policy for admin write access
*/

CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  read_time text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Allow admin full access to blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@example.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@example.com');

-- Insert initial blog posts
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  read_time,
  published,
  published_at
) VALUES
  (
    'How to Choose the Right MBA Program',
    'how-to-choose-mba-program',
    'Factors to consider when selecting an MBA program that aligns with your career goals and budget.',
    '<h1>How to Choose the Right MBA Program</h1>
    <p>Choosing the right MBA program is a crucial decision that can significantly impact your career trajectory and financial future. Here are key factors to consider:</p>
    
    <h2>1. Program Type</h2>
    <p>Consider whether a full-time, part-time, or executive MBA best suits your needs and circumstances.</p>
    
    <h2>2. Cost and ROI</h2>
    <p>Evaluate the total cost of attendance and potential return on investment based on post-MBA salary data.</p>
    
    <h2>3. Location</h2>
    <p>Think about where you want to work after graduation, as many students find opportunities in their school''s region.</p>
    
    <h2>4. School Reputation</h2>
    <p>Research the school''s rankings, but also look at specific strengths in your areas of interest.</p>',
    'MBA Expert',
    '5 min read',
    true,
    now()
  ),
  (
    'Understanding MBA ROI Across Different Countries',
    'mba-roi-analysis',
    'A comprehensive analysis of MBA return on investment in various global markets.',
    '<h1>Understanding MBA ROI Across Different Countries</h1>
    <p>The return on investment (ROI) for an MBA varies significantly across different countries and regions.</p>
    
    <h2>Key Findings</h2>
    <ul>
      <li>US MBA programs typically show highest absolute salary increases</li>
      <li>European programs often offer faster payback periods</li>
      <li>Asian markets show rapid growth in MBA value</li>
    </ul>
    
    <h2>Factors Affecting ROI</h2>
    <p>Several factors influence the ROI calculation:</p>
    <ul>
      <li>Program cost</li>
      <li>Opportunity cost</li>
      <li>Post-MBA salary</li>
      <li>Career progression</li>
    </ul>',
    'Finance Analyst',
    '7 min read',
    true,
    now()
  ),
  (
    'Top MBA Trends in 2025',
    'mba-trends-2025',
    'Latest trends shaping the MBA education landscape and what it means for prospective students.',
    '<h1>Top MBA Trends in 2025</h1>
    <p>The MBA landscape continues to evolve with new technologies and changing business needs.</p>
    
    <h2>1. Hybrid Learning Models</h2>
    <p>Programs are combining the best of online and in-person education.</p>
    
    <h2>2. Focus on Sustainability</h2>
    <p>Environmental and social governance (ESG) is becoming central to MBA curricula.</p>
    
    <h2>3. Tech Integration</h2>
    <p>AI and data analytics are now core components of most programs.</p>
    
    <h2>4. Specialized Tracks</h2>
    <p>Programs are offering more specialized paths within the MBA framework.</p>',
    'Education Researcher',
    '6 min read',
    true,
    now()
  );