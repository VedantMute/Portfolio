// Loader.tsx
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: loading ? 'block' : 'none' }}>
      {/* Your loader UI here */}
      Loading...
    </div>
  );
};

export default Loader;
