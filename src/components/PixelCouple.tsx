import coupleImage from "@/assets/couple-with-ultrasound-pixel.png";

export const PixelCouple = () => {
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <div className="relative group">
        <img
          src={coupleImage}
          alt="Pixel art couple with ultrasound"
          className="w-32 h-32 object-contain pixelated animate-retro-fade-in shadow-retro"
          style={{
            imageRendering: 'pixelated',
          }}
        />
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-card text-card-foreground text-xs font-mono rounded border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-pixel">
          Future Parents 💕
        </div>
      </div>
    </div>
  );
};