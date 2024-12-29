import { useEffect, useRef } from 'react';

const MagicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.style.left = `${e.pageX - 5}px`;
      cursorRef.current.style.top = `${e.pageY - 5}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorRef]);

  return (
    <div
      ref={cursorRef}
      className="cursor absolute w-10 h-10 bg-primary rounded-full pointer-events-none transition-all duration-200 transform"
      style={{ position: 'absolute', zIndex: 10000 }}
    ></div>
  );
};

export default MagicCursor;

