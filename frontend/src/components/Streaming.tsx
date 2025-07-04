// src/components/Footer/Streaming.tsx
import React from 'react';

export const Streaming: React.FC = () => {
  const streamingPlatforms = [
    {
      name: "Deezer",
      url: "https://www.deezer.com/artist/53266602",
      icon: "https://img.icons8.com/color/48/000000/deezer.png",
      color: "bg-[#FEAA2D]"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ClaudyGODMinistries",
      icon: "https://img.icons8.com/color/48/000000/youtube-play.png",
      color: "bg-[#FF0000]"
    },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com/albums/B0DSM7QGLF",
      icon: "https://img.icons8.com/color/48/000000/amazon-music.png",
      color: "bg-[#00A8E1]"
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/album/2MY5xlrYfuvKXaYfdB5v2A",
      icon: "https://img.icons8.com/color/48/000000/spotify.png",
      color: "bg-[#1DB954]"
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/ng/artist/claudygod/1440081695",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/apple-music.png",
      color: "bg-gradient-to-r from-[#FA2C56] to-[#8A2BE2]"
    }
  ];

  return (
    <div className="flex flex-col items-center py-6">
      <div className="relative mb-8 w-full max-w-md">
        <h3 className="md:text-4xl font-roboto-condensed max-md:text-2xl text-center text-white tracking-wider z-10 relative">
          Stream ClaudyGod Music
        </h3>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-5 max-w-2xl mx-auto">
        {streamingPlatforms.map((platform, index) => (
          <a 
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative w-20 h-20 rounded-xl flex flex-col items-center justify-center
              transition-all duration-300 transform hover:-translate-y-1 shadow-xl
              ${platform.color} overflow-hidden
            `}
            aria-label={`Stream on ${platform.name}`}
          >
            {/* Platform icon */}
            <div className="w-10 h-10 flex items-center justify-center z-10">
              <img 
                src={platform.icon} 
                alt={platform.name} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            
            {/* Platform name */}
            <div className="absolute bottom-0 w-full py-1 bg-black bg-opacity-70 text-center">
              <span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {platform.name}
              </span>
            </div>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>
      
      <div className="mt-8 text-center max-w-xl">
        <p className="text-gray-300 text-sm italic">
          Available on all major streaming platforms. Follow us to stay updated with our latest releases.
        </p>
      </div>
    </div>
  );
};