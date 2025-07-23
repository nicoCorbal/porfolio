import { useEffect, useState } from 'react';
import { Rive } from '@rive-app/react-canvas';

interface LoadingScreenProps {
  duration?: number;
  onComplete?: () => void;
}

export default function LoadingScreen({ duration = 1000, onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRemove, setShouldRemove] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Start fade out after duration
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Remove component after fade animation
    const removeTimer = setTimeout(() => {
      setShouldRemove(true);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, duration + 500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, [duration, onComplete]);

  if (shouldRemove) return null;

  return (
    <div 
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
        <Rive
          src="/animations/logoosix.riv"
          stateMachines="State Machine 1"
          autoplay
        />
      </div>
    </div>
  );
}