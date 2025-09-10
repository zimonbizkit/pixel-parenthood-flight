import { TimeBasedBackground } from "@/components/TimeBasedBackground";
import { WelcomeHint } from "@/components/WelcomeHint";
import mountainBg from "@/assets/full-resolution-pixelated-2.png";
import elieduImage from "@/assets/eliedu.png";
import jazzfreyaImage from "@/assets/jazzfreya.png";

export const AnnouncementPage = () => {

  return (
    <TimeBasedBackground>
      <div className="relative min-h-screen overflow-hidden">
        {/* Mountain Background with Parallax */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url(${mountainBg})`,
            backgroundSize: 'cover',
            backgroundPosition: '0% center',
            backgroundRepeat: 'no-repeat',
            animation: 'parallax-move-reverse 60s linear infinite',
          }}
        />

        {/* Fixed Overlay Images */}
        {/* Eliedu Image - Bottom Left */}
        <div 
          className="fixed bottom-0 left-0 pointer-events-none z-20"
          style={{
            maxHeight: '50vh',
          }}
        >
          <img
            src={elieduImage}
            alt="Eliedu"
            className="w-auto h-full object-contain mobile-portrait-image"
            style={{
              imageRendering: 'auto',
              maxHeight: '50vh',
            }}
          />
        </div>
        
        {/* Jazzfreya Image - Bottom Right */}
        <div 
          className="fixed bottom-0 right-0 pointer-events-none z-20"
          style={{
            maxHeight: '50vh',
          }}
        >
          <img
            src={jazzfreyaImage}
            alt="Jazzfreya"
            className="w-auto h-full object-contain mobile-portrait-image"
            style={{
              imageRendering: 'auto',
              maxHeight: '50vh',
            }}
          />
        </div>

        {/* Welcome Hint */}
        <WelcomeHint />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-Ttop min-h-screen px-4" style={{ paddingTop: '15vh' }}>
          <div className="text-center space-y-8 animate-retro-fade-in">
            {/* Main Announcement */}
            <div className="space-y-4">
              <h3 className="text-xxl md:text-2xl font-pixel font-black theme-title shadow-retro animate-retro-blink">
              AUGMENTEM FAMÍLIA!
              </h3>
              <h4 className="text-xxl md:text-xxl font-pixel font-bold theme-subtitle">
                Una preciosa nena està en camí
              </h4>
            </div>

            {/* Details */}
            <div className="max-w-l mx-auto space-y-6">
              <div className="theme-card backdrop-blur-sm p-6 rounded-lg border-2 shadow-retro">
                <p className="text-lg md:text-l font-pixel theme-text leading-relaxed">
                  
                  📅 <strong className="theme-accent-1">Arribada:</strong> Febrer 2026 <br/>
                  💕 <strong className="theme-accent-2">El seu nom és:</strong> ???? <br/>
                  💕 <strong className="theme-accent-3">NIVELL D'ILUSIÓ:</strong> A TOPE 🔥 <br/>
                </p>
              </div>
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