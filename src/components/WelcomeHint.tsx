import { useState, useEffect } from "react";

export const WelcomeHint = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show hint after a short delay
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    // Hide hint after showing for a while
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 animate-retro-fade-in">
      <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded border-2 border-retro-cyan shadow-retro">
        <p className="font-mono text-sm text-card-foreground text-center">
          🎮 <span className="text-retro-cyan">TIP:</span> Click the plane to discover something special! ✈️
        </p>
      </div>
    </div>
  );
};