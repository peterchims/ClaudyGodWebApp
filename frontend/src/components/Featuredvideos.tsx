import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { About2, musicCover5, MusicBan4, MusicBan2, musicCover1, musicCover2, musicCover3, musicCover4, MusicBan3 } from '../assets';

interface VideoProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  youtubeUrl: string;
}

const videos: VideoProps[] = [
  {
    id: "1",
    title: "We Would Reign",
    thumbnailUrl: musicCover1,
    duration: "4:20",
    youtubeUrl: "https://youtu.be/s7XLwfhVSC0?si=Y9lcjVnUTvOpyzjl"
  },
  {
    id: "2",
    title: "You Are Our Everything",
    thumbnailUrl: musicCover2,
    duration: "5:45",
    youtubeUrl: "https://youtu.be/fK_tCBcnqGs?si=6JziWWzYpINEMuYt"
  },
  {
    id: "3",
    title: "Lord of my Heart",
    thumbnailUrl: musicCover3,
    duration: "3:55",
    youtubeUrl: "https://youtu.be/iOil3NAE9V4?si=jx0MNOVe5D9MLh3b"
  },
  {
    id: "4",
    title: "He Put a New Song",
    thumbnailUrl: musicCover4,
    duration: "6:10",
    youtubeUrl: "https://youtu.be/hto6hlHSpac?si=rGFe3niOqRcK-XVN"
  },
  {
    id: "5",
    title: "Lover of my Soul",
    thumbnailUrl: musicCover5,
    duration: "4:30",
    youtubeUrl: "https://youtu.be/ivj5gVeTCJQ?si=JV1kU2iW0yDuGpVH"
  },
  {
    id: "6",
    title: "You are our Everything",
    thumbnailUrl: MusicBan4,
    duration: "5:15",
    youtubeUrl: "https://youtu.be/mK26U9psCCI?si=pfzzYdmBVyRKN9ZS"
  },
  {
    id: "7",
    title: "Step Aside",
    thumbnailUrl: MusicBan2,
    duration: "5:15",
    youtubeUrl: "https://youtu.be/Q2Xz0g4Q-Ro?si=Ebx6hYvfBs2pbwvS"
  },
  {
    id: "8",
    title: "Alleluia Worship",
    thumbnailUrl: MusicBan3,
    duration: "5:15",
    youtubeUrl: "https://youtu.be/qdNP8A4fW-U?si=R15Gspr3i5eLeDm0"
  },
];

const VideoCard: React.FC<VideoProps> = ({ title, thumbnailUrl, duration, youtubeUrl }) => {
  return (
    <motion.div 
      className="group relative flex flex-col w-full h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a 
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-xl overflow-hidden aspect-video"
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-4">
          <span className="text-white raleway-medium bg-black/60 px-2 py-1 rounded-md text-sm">
            {duration}
          </span>
        </div>
      </a>
      <div className="mt-3">
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
    </motion.div>
  );
};

export const FeaturedVideos: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: number;
    if (autoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, activeIndex]);

  const totalSlides = Math.ceil(videos.length / itemsPerSlide);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex(prev => (prev + 1) % totalSlides);
  };

  const visibleVideos = videos.slice(
    activeIndex * itemsPerSlide,
    (activeIndex * itemsPerSlide) + itemsPerSlide
  );

  useEffect(() => {
    const checkSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section 
      className="relative py-8 md:py-16 min-h-[500px] md:min-h-[750px] flex items-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${About2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between md:items-center mb-8 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl md:text-4xl roboto-condensed text-white mb-2">
              Featured Videos
            </h2>
            <p className="text-gray-300 text-sm work-sans md:text-base px-4 md:px-0">
              Catch up with our latest live worship sessions and musical videos
            </p>
          </motion.div>
          
          <div className="flex flex-row justify-center gap-3 w-full md:w-auto mt-4 md:mt-0">
            <Link
              to="/music"
              className="inline-flex bg-purple-900 text-white font-medium hover:bg-transparent transition-all duration-300 items-center justify-center border-2 border-purple-900 work-sans rounded-full px-4 py-2 md:px-6 md:py-2 hover:text-white text-sm md:text-base"
            >
              <span className="whitespace-nowrap">Latest Release</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>

            <Link
              to="/videos"
              className="inline-flex text-white font-medium hover:bg-purple-900 transition-colors duration-300 items-center justify-center border-2 border-purple-900 rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base"
            >
              <span className="whitespace-nowrap">More Videos</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div 
          className="relative md:max-w-none md:h-auto mx-auto overflow-hidden p-4 sm:p-6 md:p-8 border-2 border-green-500 rounded-xl bg-black/30"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          style={isMobileOrTablet ? { 
            maxWidth: '350px', 
            height: '300px',
            margin: '0 auto'
          } : {}}
        >
          <button 
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 p-2 sm:p-3 rounded-full hover:bg-black/50 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 p-2 sm:p-3 rounded-full hover:bg-black/50 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'left' ? 100 : -100 }}
              transition={{ duration: 0.5 }}
              className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            >
              {visibleVideos.map((video) => (
                <motion.div 
                  key={video.id}
                  className="w-full h-full"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <VideoCard {...video} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 'right' : 'left');
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-purple-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};