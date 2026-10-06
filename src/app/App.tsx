import React from 'react';
import { MusicPlayerProvider, useMusicPlayer } from './components/MusicPlayerContext';
import { Gramophone } from './components/Gramophone';
import { PlayerControls } from './components/PlayerControls';
import { SettingsPanel } from './components/SettingsPanel';
import { MusicLibrary } from './components/MusicLibrary';

function AppContent() {
  const { dominantColor, accentColor, currentSong } = useMusicPlayer();

  return (
    <div className="min-h-screen bg-background transition-all duration-1000 relative overflow-hidden">
      {/* Dynamic background based on album art - Material U style */}
      <div
        className="fixed inset-0 opacity-5 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${dominantColor}20 0%, ${accentColor}10 50%, transparent 100%)`
        }}
      />

      {/* Blurred album art background for transparency effect */}
      {currentSong?.coverUrl && (
        <div
          className="fixed inset-0 opacity-8 blur-3xl scale-150 transition-all duration-1000"
          style={{
            backgroundImage: `url(${currentSong.coverUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      {/* Material U gradient overlay for depth */}
      <div
        className="fixed inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(135deg, ${dominantColor}05 0%, ${accentColor}03 100%)`
        }}
      />

      {/* Secondary background pattern for Material U texture */}
      <div
        className="fixed inset-0 opacity-3 transition-all duration-1000"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, ${dominantColor}15 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }}
      />

      {/* Top Navigation with minimal Material U styling */}
      <div className="relative z-10">
        <MusicLibrary />
        <SettingsPanel />
      </div>

      {/* Main Content Container */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
        {/* Gramophone Section with enhanced ambient lighting */}
        <div className="relative flex-shrink-0">
          {/* Enhanced ambient glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-15 blur-2xl transition-all duration-1000 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${dominantColor}40 0%, ${accentColor}20 70%, transparent 100%)`,
              width: '500px',
              height: '500px',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%'
            }}
          />
          <Gramophone />
        </div>

        {/* Player Controls Section with glass morphism effect */}
        <div className="w-full max-w-md relative">
          {/* Glass morphism background */}
          <div
            className="absolute inset-0 rounded-3xl backdrop-blur-sm transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${accentColor}10 0%, ${dominantColor}05 100%)`,
              border: `1px solid ${accentColor}20`
            }}
          />
          <div className="relative z-10 p-6">
            <PlayerControls />
          </div>
        </div>

        {/* Material U inspired footer */}
        <div className="text-center space-y-1 relative z-10">
          <p
            className="text-sm transition-colors duration-500"
            style={{ color: `${dominantColor}90` }}
          >
            Platter
          </p>
          <p
            className="text-xs transition-colors duration-500"
            style={{ color: `${dominantColor}60` }}
          >
            Your music, served on Platter
          </p>
        </div>
      </div>

      {/* Floating color accent elements for Material U feel */}
      <div
        className="fixed top-20 left-20 w-32 h-32 rounded-full opacity-5 blur-2xl pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${dominantColor} 0%, transparent 70%)`
        }}
      />
      <div
        className="fixed bottom-20 right-20 w-24 h-24 rounded-full opacity-5 blur-2xl pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Responsive design adjustments */}
      <style>{`
        @media (max-height: 700px) {
          .min-h-screen {
            padding: 1rem;
          }
          .space-y-8 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .w-96 {
            width: 16rem;
          }
          .h-96 {
            height: 16rem;
          }
          .space-y-8 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1rem;
          }
        }

        @media (max-width: 390px) {
          .w-96 {
            width: 14rem;
          }
          .h-96 {
            height: 14rem;
          }
        }

        /* Enhanced Material U animations */
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .floating-element {
          animation: floating 6s ease-in-out infinite;
        }

        /* Custom scrollbar for Material U consistency */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${dominantColor}30;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${dominantColor}50;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <MusicPlayerProvider>
      <AppContent />
    </MusicPlayerProvider>
  );
}