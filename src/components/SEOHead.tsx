import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

export default function SEOHead({
  title = 'Cost of MBA - Compare Global MBA Programs and Tuition Fees',
  description = 'Compare MBA program fees worldwide. Find detailed information about tuition costs, duration, and locations for top business schools globally.',
  type = 'website',
  image = 'https://thecostofmba.com/og-image.jpg'
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://thecostofmba.com${location.pathname}`;

  useEffect(() => {
    // Update meta tags
    document.title = title;
    
    const metaTags = {
      description: description,
      'og:title': title,
      'og:description': description,
      'og:type': type,
      'og:url': canonicalUrl,
      'og:image': image,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, type, image, canonicalUrl]);

  return null;
}