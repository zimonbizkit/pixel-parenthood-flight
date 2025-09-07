import { useState } from "react";
import planeImage from "@/assets/plane-with-cats-pixel.png";

interface PixelArtPlaneProps {
  message?: string;
  onPlaneClick?: () => void;
}

export const PixelArtPlane = ({
  message = "Our Little Adventure Begins!",
  onPlaneClick
}: PixelArtPlaneProps) => {
  const [showCatAttitude, setShowCatAttitude] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlaneClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowCatAttitude(true);
    onPlaneClick?.();
    
    // Reset after animation
    setTimeout(() => {
      setShowCatAttitude(false);
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="fixed top-20 left-0 w-full h-32 pointer-events-none z-10">
      <div 
        className={`relative animate-plane-glide cursor-pointer pointer-events-auto ${
          showCatAttitude ? 'animate-pixel-glitch' : ''
        }`}
        onClick={handlePlaneClick}
        style={{
          width: '200px',
          height: '100px',
        }}
      >
        {/* Airplane */}
        <img
          src={planeImage}
          alt="Pixel art plane with cats"
          className="w-full h-full object-contain pixelated"
          style={{
            imageRendering: 'pixelated',
          }}
        />
        
        {/* Banner Message */}
        <div className="absolute top-1/2 left-full ml-4 transform -translate-y-1/2">
          <div className="bg-foreground text-background px-4 py-2 font-mono text-sm whitespace-nowrap shadow-pixel border-2 border-primary">
            {message}
          </div>
          {/* Banner connecting line */}
          <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-primary transform -translate-x-full -translate-y-1/2"></div>
        </div>

        {/* Cat Attitude Popup */}
        {showCatAttitude && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className={`animate-cat-popup ${showCatAttitude ? 'animate-retro-blink' : ''}`}>
              <div className="text-4xl">🖕</div>
              <div className="bg-primary text-primary-foreground px-2 py-1 text-xs font-mono mt-1 rounded border border-accent">
                😼 MEOW!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};