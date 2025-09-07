import { useState } from "react";
import { TimeBasedBackground } from "@/components/TimeBasedBackground";
import { PixelArtPlane } from "@/components/PixelArtPlane";
import { PixelCouple } from "@/components/PixelCouple";
import { WelcomeHint } from "@/components/WelcomeHint";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import mountainBg from "@/assets/mountain-landscape-final.png";

export const AnnouncementPage = () => {
  const [planeMessage, setPlaneMessage] = useState("Our Little Adventure Begins!");
  const [editMode, setEditMode] = useState(false);
  const [tempMessage, setTempMessage] = useState(planeMessage);
  const [secretClicks, setSecretClicks] = useState(0);

  const handlePlaneClick = () => {
    setSecretClicks(prev => prev + 1);
    
    if (secretClicks >= 2) {
      toast("🐱 The cats revealed our daughter's name: Luna! 🌙", {
        duration: 5000,
      });
      setSecretClicks(0);
    } else {
      toast("🐱 Click the plane again to discover our daughter's name!", {
        duration: 3000,
      });
    }
  };

  const handleSaveMessage = () => {
    setPlaneMessage(tempMessage);
    setEditMode(false);
    toast("✈️ Banner message updated!", {
      duration: 2000,
    });
  };

  const handleCancelEdit = () => {
    setTempMessage(planeMessage);
    setEditMode(false);
  };

  return (
    <TimeBasedBackground>
      <div className="relative min-h-screen overflow-hidden">
        {/* Mountain Background with Parallax */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url(${mountainBg})`,
            backgroundSize: '150% auto',
            backgroundPosition: '0% center',
            backgroundRepeat: 'no-repeat',
            animation: 'parallax-move 60s linear infinite',
          }}
        />

        {/* Welcome Hint */}
        <WelcomeHint />

        {/* Animated Plane */}
        <PixelArtPlane 
          message={planeMessage}
          onPlaneClick={handlePlaneClick}
        />

        {/* Pixel Couple */}
        <PixelCouple />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center space-y-8 animate-retro-fade-in">
            {/* Main Announcement */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-retro font-black text-primary shadow-retro animate-retro-blink">
                LEVEL UP!
              </h1>
              <h2 className="text-3xl md:text-5xl font-retro font-bold text-accent">
                NEW PLAYER JOINING
              </h2>
            </div>

            {/* Details */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border-2 border-primary shadow-retro">
                <p className="text-lg md:text-xl font-mono text-card-foreground leading-relaxed">
                  🎮 <strong className="text-retro-green">GAME UPDATE:</strong> Our party is expanding! <br/>
                  📅 <strong className="text-retro-cyan">ETA:</strong> Coming Soon™ <br/>
                  👶 <strong className="text-retro-amber">CLASS:</strong> Tiny Human <br/>
                  💕 <strong className="text-retro-magenta">POWER LEVEL:</strong> Over 9000! <br/>
                </p>
                <div className="mt-4 text-sm font-mono text-muted-foreground">
                  <em>* Click the plane above to unlock a secret! 🐱</em>
                </div>
              </div>
            </div>

            {/* Message Editor */}
            <div className="max-w-md mx-auto">
              {editMode ? (
                <div className="space-y-3">
                  <Input
                    value={tempMessage}
                    onChange={(e) => setTempMessage(e.target.value)}
                    className="font-mono text-center border-primary bg-card/90"
                    placeholder="Enter plane banner message"
                    maxLength={50}
                  />
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleSaveMessage}
                      variant="default"
                      className="flex-1 font-mono"
                    >
                      Save Banner
                    </Button>
                    <Button 
                      onClick={handleCancelEdit}
                      variant="secondary"
                      className="flex-1 font-mono"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    setEditMode(true);
                    setTempMessage(planeMessage);
                  }}
                  variant="outline"
                  className="font-mono border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  ✏️ Edit Plane Message
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Retro Scanlines Effect */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
          }} />
        </div>
      </div>
    </TimeBasedBackground>
  );
};