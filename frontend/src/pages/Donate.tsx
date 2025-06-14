import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faArrowDown, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Herosection } from '../components/Herosection';    
import { Donate1, Donate2 } from '../assets/';
import { useNavContext } from '../context/NavContext';

// Currency selector component
const CurrencySelector = ({ currency, setCurrency }: { currency: string, setCurrency: React.Dispatch<React.SetStateAction<string>> }) => {
  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'NGN', symbol: '₦', name: 'Naira' },
    { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
    { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  ];

  return (
    <div className="relative flex-shrink-0">
      <select 
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="appearance-none h-full px-3 py-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
      >
        {currencies.map((curr) => (
          <option key={curr.code} value={curr.code}>
            {curr.symbol} {curr.code}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

const DonateHeroSlider: React.FC = () => {
  const { isNavOpen } = useNavContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const images = [Donate1, Donate2];

  useEffect(() => {
    // Pause animation when nav is open
    if (isNavOpen) {
      setShouldAnimate(false);
      return;
    }

    setShouldAnimate(true);
    let interval: NodeJS.Timeout | null = null;
    
    if (shouldAnimate) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [images.length, shouldAnimate, isNavOpen]);

  return (
    <div className={`relative w-full ${isNavOpen ? 'filter blur-sm opacity-75 transition-all duration-300' : ''}`}>
      {/* Mobile Version */}
      <div className="md:hidden relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-black">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src={img}
                alt="Donation slide"
                className="h-[400px] w-[400px] object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
            
            <div className="absolute inset-0 bg-black/60 z-60 flex flex-col items-center justify-center">
              <h1 className="text-white text-xl font-bold mb-4 roboto-condensed">
                ClaudyGod Music & Ministry / Donate
              </h1>
              <p className="text-white text-sm mb-6 text-center px-4">
                Experience the divine fusion of American gospel artist
              </p>
              <button className="bg-purple-900 hover:bg-transparent cursor-pointer hover:border-2 hover:border-purple-400 hover:text-purple-400 text-white roboto-condensed py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faWallet} className="h-5 w-5" />
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block relative h-[52vh] min-h-[200px] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Herosection
              title="ClaudyGod Music & Ministries / Donate"
              backgroundImage={img}
              className="absolute inset-0 z-0"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>
    </div>
  );
};

export const DonateData: React.FC = () => {
  const { isNavOpen } = useNavContext();
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, amount, currency });
    alert(`Thank you for your donation of ${currency} ${amount}!`);
    setAmount('');
    setName('');
  };

  return (
    <div className={`min-h-screen ${isNavOpen ? 'overflow-hidden max-h-screen' : ''}`}>
      <DonateHeroSlider />
      
      <div className={`max-w-7xl mx-auto px-4 py-8 md:py-12 ${isNavOpen ? 'filter blur-sm opacity-75 transition-all duration-300' : ''}`}>
        <h2 className="roboto-condensed mt-10 text-4xl text-center">
          Support Our Ministry
        </h2>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
          
            <p className="md:text-lg max-md:text-sm text-left text-gray-700 work-sans">
             We appreciate your support and donations towards the ministry. You partner with us to advance the gospel. 
“And my God will meet all your needs according to the riches of His glory in Christ Jesus.”(Phillipians 4:19)
            </p>
          </div>

          <div className="flex justify-center my-8">
            <FontAwesomeIcon 
              icon={faArrowDown} 
              className="text-purple-900 text-4xl animate-bounce" 
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 roboto-condensed">Donate</h2>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-16">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm roboto-condensed text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm roboto-condensed text-gray-700 mb-1">
                Enter Amount
              </label>
              <div className="flex">
                <CurrencySelector currency={currency} setCurrency={setCurrency} />
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="0.00"
                  min="1"
                  step="0.01"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-purple-900 roboto-condensed hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-md transition duration-150 ease-in-out mb-4 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faWallet} />
              Pay With PayPal
            </button>
            
            <button 
              type="submit"
              className="w-full bg-white border roboto-condensed border-purple-900 text-purple-900 hover:bg-purple-50 font-medium py-3 px-4 rounded-md transition duration-150 ease-in-out flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faCreditCard} />
              Pay With Debit/Master Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};