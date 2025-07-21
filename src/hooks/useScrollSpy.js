import { useState, useEffect } from 'react';

export const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const sections = ids.map((id) => document.getElementById(id));
      const current = sections.find(
        (section) => section && section.getBoundingClientRect().top - offset < 0 &&
          section.getBoundingClientRect().bottom - offset > 0
      );
      if (current && current.id !== activeId) {
        setActiveId(current.id);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, activeId]);

  return activeId;
};
