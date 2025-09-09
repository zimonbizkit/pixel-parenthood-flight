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

        {/* Overlay Images with Parallax */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none">
          {/* Eliedu Image - Starts in center and scrolls left */}
          <div 
            className="absolute"
            style={{
              left: '50%',
              bottom: '0%',
              transform: 'translateX(-50%)',
              animation: 'center-scroll-left 60s linear infinite',
            }}
          >
            <img
              src={elieduImage}
              alt="Eliedu"
              className="w-auto"
              style={{
                imageRendering: 'auto',
                height: '80vh',
                objectFit: 'contain',
                objectPosition: 'bottom',
              }}
            />
          </div>
          
          {/* Jazzfreya Image - Scrolling from right to left, delayed */}
          <div 
            className="absolute bottom-0 h-full"
            style={{
              left: '0%',
              animation: 'image-scroll-reverse 60s linear infinite 20s',
            }}
          >
            <img
              src={jazzfreyaImage}
              alt="Jazzfreya"
              className="h-full w-auto object-contain"
              style={{
                imageRendering: 'auto',
              }}
            />
          </div>
        </div>

        {/* Welcome Hint */}
        <WelcomeHint />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-top min-h-screen px-4" style={{ paddingTop: '15vh' }}>
          <div className="text-center space-y-8 animate-retro-fade-in">
            {/* Main Announcement */}
            <div className="space-y-4">
              <h3 className="text-xxl md:text-2xl font-pixel font-black text-pink-blue shadow-retro animate-retro-blink">
              AUGMENTEM FAMÍLIA!
              </h3>
              <h4 className="text-xxl md:text-xxl font-pixel font-bold text-cyan-200">
                Una preciosa nena està en camí
              </h4>
            </div>

            {/* Details */}
            <div className="max-w-l mx-auto space-y-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border-2 border-pink-200 shadow-retro">
                <p className="text-lg md:text-l font-pixel text-white leading-relaxed">
                  
                  📅 <strong className="text-cyan-100">Arribada:</strong> Febrer 2026 <br/>
                  💕 <strong className="text-pink-100">El seu nom és:</strong> ???? <br/>
                  💕 <strong className="text-orange-100">NIVELL D'ILUSIÓ:</strong> A TOPE 🔥 <br/>
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