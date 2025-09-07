import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="animate-retro-fade-in">
          <h1 className="text-8xl font-retro font-black text-primary animate-retro-blink">404</h1>
          <h2 className="text-2xl font-retro text-accent">GAME OVER</h2>
        </div>
        <div className="bg-card/90 backdrop-blur-sm p-6 rounded border-2 border-primary shadow-retro max-w-md mx-auto">
          <p className="font-mono text-card-foreground mb-4">
            🎮 ERROR: Level not found!<br/>
            The adventurers seem to have taken a wrong turn...
          </p>
          <a 
            href="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 font-mono font-bold rounded border-2 border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-pixel hover:shadow-retro"
          >
            🏠 Return to Base
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
