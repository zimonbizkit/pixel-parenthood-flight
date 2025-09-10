import { useState, useEffect } from "react";

interface TimeBasedBackgroundProps {
  children: React.ReactNode;
}

type TimeOfDay = 'dawn' | 'morning' | 'midday' | 'afternoon' | 'evening';

export const TimeBasedBackground = ({ children }: TimeBasedBackgroundProps) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('midday');

  useEffect(() => {
    // Check for URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    
    if (themeParam) {
      // Override with URL parameter if provided
      setTimeOfDay(themeParam as TimeOfDay);
      return;
    }

    const getTimeOfDay = (): TimeOfDay => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 8) return 'dawn';
      if (hour >= 8 && hour < 12) return 'morning';
      if (hour >= 12 && hour < 17) return 'midday';
      if (hour >= 17 && hour < 20) return 'afternoon';
      return 'evening';
    };

    setTimeOfDay(getTimeOfDay());

    // Update every minute to catch time changes (only if no URL parameter)
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundClass = (time: TimeOfDay): string => {
    switch (time) {
      case 'dawn':
        return 'bg-gradient-dawn';
      case 'morning':
        return 'bg-gradient-morning';
      case 'midday':
        return 'bg-gradient-midday';
      case 'afternoon':
        return 'bg-gradient-afternoon';
      case 'evening':
        return 'bg-gradient-evening';
      default:
        return 'bg-gradient-midday';
    }
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-[2000ms] ease-in-out ${getBackgroundClass(timeOfDay)}`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      data-theme={timeOfDay}
    >
      {children}
    </div>
  );
};