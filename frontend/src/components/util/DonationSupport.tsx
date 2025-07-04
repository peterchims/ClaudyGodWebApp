import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faDonate } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type DonationCTAProps = {
  title: string;
  subtitle: string;
  description: string;
  goFundMeUrl: string;
  donateUrl: string;
  isExternalDonateUrl?: boolean;
};

export const DonationCallToAction: React.FC<DonationCTAProps> = ({
  title,
  subtitle,
  description,
  goFundMeUrl,
  donateUrl,
  isExternalDonateUrl = false
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl shadow-2xl my-10 md:my-16 mx-4 sm:mx-6 lg:mx-auto lg:max-w-6xl">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-purple-500 blur-xl md:blur-3xl"></div>
        <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-indigo-600 blur-xl md:blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-8 md:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-center">
          <div className="lg:max-w-xl">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-roboto-condensed tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            <motion.div 
              className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 my-4 sm:my-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-medium text-purple-100 mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {subtitle}
            </motion.h3>
            
            <motion.p 
              className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 text-purple-100 font-work-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5">
            {/* GoFundMe Button (always external) */}
            <motion.a
              href={goFundMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white text-purple-900 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <FontAwesomeIcon 
                icon={faHandHoldingHeart} 
                className="text-purple-700 group-hover:text-purple-900 transition-colors text-sm sm:text-base" 
              />
              <span>Support on GoFundMe</span>
            </motion.a>
            
            {/* Donate Button - handles both internal and external */}
            {isExternalDonateUrl ? (
              <motion.a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FontAwesomeIcon 
                  icon={faDonate} 
                  className="text-white group-hover:text-amber-100 transition-colors text-sm sm:text-base" 
                />
                <span>Donate Now</span>
              </motion.a>
            ) : (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to={donateUrl}
                  className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <FontAwesomeIcon 
                    icon={faDonate} 
                    className="text-white group-hover:text-amber-100 transition-colors text-sm sm:text-base" 
                  />
                  <span>Donate Now</span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};