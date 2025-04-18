import { useEffect } from 'react';

export default function SecurityHeaders() {
  useEffect(() => {
    // Remove unnecessary meta tags and headers that could expose server information
    const metaTags = document.getElementsByTagName('meta');
    for (let i = metaTags.length - 1; i >= 0; i--) {
      const tag = metaTags[i];
      if (tag.getAttribute('name')?.toLowerCase().includes('generator') ||
          tag.getAttribute('name')?.toLowerCase().includes('version')) {
        tag.remove();
      }
    }

    // Remove server information from headers
    if (document.querySelector('meta[name="server"]')) {
      document.querySelector('meta[name="server"]')?.remove();
    }

    // Add security headers
    const securityHeaders = [
      { name: 'x-content-type-options', content: 'nosniff' },
      { name: 'x-frame-options', content: 'DENY' },
      { name: 'x-xss-protection', content: '1; mode=block' },
      { name: 'referrer-policy', content: 'strict-origin-when-cross-origin' }
    ];

    securityHeaders.forEach(header => {
      if (!document.querySelector(`meta[name="${header.name}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('name', header.name);
        meta.setAttribute('content', header.content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  return null;
}