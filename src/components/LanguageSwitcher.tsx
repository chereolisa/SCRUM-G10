import React, { useEffect } from 'react';

function LanguageSwitcher() {
  useEffect(() => {
    // Load the Google Translate script dynamically
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
}

export default LanguageSwitcher;
