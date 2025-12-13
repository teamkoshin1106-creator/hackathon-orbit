import { useEffect, useRef } from 'react';

const CrystallineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const crystals = containerRef.current.querySelectorAll('.crystal');
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth;
      const moveY = (clientY - innerHeight / 2) / innerHeight;

      crystals.forEach((crystal, index) => {
        const depth = (index % 3) + 1;
        const translateX = moveX * depth * 15;
        const translateY = moveY * depth * 15;
        (crystal as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="crystalline-bg">
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
      <div className="crystal" />
    </div>
  );
};

export default CrystallineBackground;
