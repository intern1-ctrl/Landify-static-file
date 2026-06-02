import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, Leaf, Sprout, ChevronLeft, ChevronRight, MapPin, User, X, Tag, Droplet, Scissors, IndianRupee } from 'lucide-react';


const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/1 .png', '/2 .png', '/3 .png', '/4 .png', '/5 .png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full aspect-[16/10] overflow-hidden rounded-[2rem] relative bg-[#0a2e1f] group/carousel">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Landify Cultivation ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>

      {/* Gradient overlay for text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f]/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:pointer-events-none text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all active:scale-95 flex items-center justify-center cursor-pointer hover:scale-105"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button 
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 disabled:opacity-30 disabled:pointer-events-none text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all active:scale-95 flex items-center justify-center cursor-pointer hover:scale-105"
        aria-label="Next image"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button 
            key={idx} 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex ? 'bg-green-500 w-8' : 'bg-white/60 w-2'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export function Blog() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const extendedParagraphs = [
    {
      step: 'SAPLING SUPPORT',
      title: 'Sapling Support',
      image: '/1 .png',
      icon: Sprout,
      text: 'My name is Ravikumar, and I am a farmer from Siddivaram. This year, I gave my 5 acres of land to the Landify company on an annual contract for green grass cultivation. The company supported us by giving saplings based on land size. For every acre, they provided 10,000 saplings, so for my 5 acres, I received enough saplings for cultivation. This made our work easier because we did not need to search for saplings outside.',
      date: 'May 26, 2025',
      time: '09:00 AM'
    },
    {
      step: 'FERTILIZER SUPPORT',
      title: 'Fertilizer Support',
      image: '/2 .png',
      icon: Tag,
      text: 'One good thing about working with Landify company is they provide fertilizers at a low price for farmers. Normally, fertilizers are expensive in the market, but the company gives fertilizer for only ₹10 per kg. Because of this support, our cultivation cost became less, and it helped us manage farming expenses in a better way.',
      date: 'June 10, 2025',
      time: '10:30 AM'
    },
    {
      step: 'CULTIVATION EXPERIENCE',
      title: 'Cultivation Experience',
      image: '/3 .png',
      icon: Droplet,
      text: 'After planting the saplings, we regularly watered and maintained the land carefully. Green grass cultivation needs proper care, and we worked every day in the field to grow healthy grass. Seeing the land slowly turn green gave us happiness and confidence that our hard work would bring good results after harvesting.',
      date: 'July 15, 2025',
      time: '08:00 AM'
    },
    {
      step: 'HARVESTING SUPPORT',
      title: 'Harvesting by Landify Company',
      image: '/4 .png',
      icon: Scissors,
      text: 'When the crop became ready, the Landify company itself came and harvested the cultivated land. This helped us a lot because we did not have to struggle to find workers or machines for harvesting. The company managed the harvesting process smoothly, and it reduced our burden as farmers.',
      date: 'August 30, 2025',
      time: '04:15 PM'
    },
    {
      step: 'PAYMENT RECEIVED',
      title: 'Money Received After Harvesting',
      image: '/5 .png',
      icon: IndianRupee,
      text: 'After the fifth cycle of cultivation and harvesting, we received money based on the total tons produced. The company pays ₹500 for every ton of green grass harvested. Receiving payment after harvest gave us satisfaction because our hard work on the land finally turned into income for our family. Working with Landify company felt supportive and helpful in my farming journey as a farmer from Siddivaram.',
      date: 'September 05, 2025',
      time: '11:45 AM'
    }
  ];

  return (
    <div className="bg-[#f0f4f1] min-h-screen">
      {/* Blog Page Header */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden" style={{ backgroundColor: '#8CA38C' }}>
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-[#0a2e1f] mb-6 leading-tight">
                Blog Insights
              </h1>
              <p className="text-xl text-[#0a2e1f] max-w-xl leading-relaxed font-semibold">
                Explore our latest updates on green grass cultivation, sustainable farming practices, and the Landify ecosystem.
              </p>
            </motion.div>

            {/* Glowing Interaction Cards */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Sprout, label: 'Agri-Tech', delay: 0.2 },
                  { icon: Leaf, label: 'Eco Farming', delay: 0.4 },
                  { icon: Calendar, label: 'Weekly Updates', delay: 0.6 },
                  { icon: ArrowRight, label: 'Case Studies', delay: 0.8 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl hover:bg-white transition-all cursor-pointer group relative overflow-hidden text-center"
                  >
                    <div className="absolute -right-4 -top-4 size-24 bg-green-500/10 blur-3xl group-hover:bg-green-500/20 transition-all" />
                    <item.icon className="size-8 text-[#0a2e1f] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="block text-[#0a2e1f] font-bold text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-full px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-6 items-stretch bg-white rounded-[2rem] p-4 shadow-xl border border-green-50 group w-full"
        >
          {/* Left: Auto-sliding Image Carousel & Quote */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <ImageCarousel />
            <p className="text-green-700 font-semibold text-base border-l-4 border-green-500 pl-3 italic text-center">
              Explore the complete lifecycle of high-quality green fodder and how streamlined logistics ensure freshness and consistency.
            </p>
          </div>

          {/* Right: Landify Blog Content */}
          <div className="w-full lg:w-1/2 p-5 lg:p-8 flex flex-col items-start text-left justify-start">
            <div className="flex items-center justify-start gap-4 text-base text-green-700 mb-5 font-bold uppercase tracking-widest">
              <img 
                src="/profile.jpg" 
                alt="Default" 
                className="w-36 h-36 rounded-3xl object-cover border-2 border-green-500 shadow-md transition-all duration-500 hover:scale-105"
              />
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <span>May 26, 2025</span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-[#0a2e1f] mb-4 leading-tight group-hover:text-green-700 transition-colors text-left">
              The Journey of Green Fodder: From Siddavaram to Delivery
            </h2>

            <p className="text-gray-600 text-base leading-relaxed font-medium mb-6 text-left">
              At Landify company, the journey of green fodder starts from the farmer’s land. Farmers and the company work together to cultivate healthy green grass in a simple and supportive way. The company makes an annual contract with farmers who are interested in growing green fodder on their land. Based on the number of acres, farmers receive saplings for cultivation. For every acre, the company provides 10,000 saplings, helping farmers start cultivation without difficulty.

              Landify company also supports farmers by providing fertilizers at a low price, which helps reduce farming expenses. During cultivation, farmers take care of the land by watering and maintaining the crop regularly to grow healthy green grass. The company supports farmers throughout the process, making cultivation easier and more manageable.

              Once the green grass becomes ready, Landify company itself handles the harvesting process, reducing the burden on farmers. Farmers do not need to search for workers or harvesting machines because the company manages everything. After harvesting, farmers receive payment based on the total tons of green grass produced. In this way, farmers and Landify company work together to produce quality green fodder and improve farming income through a well-supported cultivation process.
            </p>

            <div className="w-full flex justify-start">
              <button 
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 bg-[#0a2e1f] text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 transition-all duration-300"
              >
                Read More <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Village & Farmer Info */}
            <div className="mt-6 w-full flex flex-row items-center justify-end gap-3">
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 shadow-sm">
                <MapPin className="size-3.5 text-green-600 flex-shrink-0" />
                <div className="text-left">
                  <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Village</span>
                  <span className="block text-xs font-bold text-[#0a2e1f]">Siddivaram</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 shadow-sm">
                <User className="size-3.5 text-green-600 flex-shrink-0" />
                <div className="text-left">
                  <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Farmer</span>
                  <span className="block text-xs font-bold text-[#0a2e1f]">Ravi Kumar</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      {/* Modal Popup Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 md:p-12 border border-gray-100 z-10 flex flex-col custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="size-6" />
              </button>

              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-2">
                  Farmer Ravikumar's Story
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-[#0a2e1f] mb-4">
                  The Journey of Green Fodder
                </h3>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
              </div>

              {/* Timeline Container */}
              <div className="relative flex flex-col gap-16 w-full py-8">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[4px] bg-gray-400 rounded-full hidden md:block" />

                {extendedParagraphs.map((item, index) => {
                  const isEven = index % 2 === 1;
                  return (
                    <div 
                      key={index} 
                      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0 w-full"
                    >
                      {/* Left Side */}
                      <div className={`flex flex-col justify-center w-full ${
                        isEven 
                          ? 'order-2 md:order-1 md:pr-16 flex items-center md:items-end justify-center' 
                          : 'order-1 md:order-1 md:pr-16 text-center md:text-right'
                      }`}>
                        {isEven ? (
                          <div className="w-full max-w-[400px]">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg border border-gray-100 transition-transform duration-500 hover:scale-[1.02]"
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col md:items-end w-full">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                              {item.step}
                            </span>
                            <h4 className="text-2xl md:text-3xl font-serif font-black text-[#0a2e1f] mb-3 leading-tight">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 bg-green-50/80 border border-green-100 rounded-full px-3 py-1 text-green-700 text-xs font-bold mb-3 shadow-sm w-fit md:ml-auto">
                              <Calendar className="size-3.5 text-green-600" />
                              <span>{item.date}</span>
                              <span className="text-green-300">|</span>
                              <Clock className="size-3.5 text-green-600" />
                              <span>{item.time}</span>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl md:ml-auto">
                              {item.text}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center column (Line marker dot with icon) */}
                      <div className="hidden md:flex items-center justify-center relative w-12 h-full z-10 order-2">
                        <div className="size-10 rounded-full bg-[#0a2e1f] text-white flex items-center justify-center border-4 border-white shadow-md z-10">
                          <item.icon className="size-4" />
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className={`flex flex-col justify-center w-full ${
                        isEven 
                          ? 'order-1 md:order-3 md:pl-16 text-center md:text-left' 
                          : 'order-2 md:order-3 md:pl-16 flex items-center md:items-start justify-center'
                      }`}>
                        {isEven ? (
                          <div className="flex flex-col md:items-start w-full">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                              {item.step}
                            </span>
                            <h4 className="text-2xl md:text-3xl font-serif font-black text-[#0a2e1f] mb-3 leading-tight">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 bg-green-50/80 border border-green-100 rounded-full px-3 py-1 text-green-700 text-xs font-bold mb-3 shadow-sm w-fit md:mr-auto">
                              <Calendar className="size-3.5 text-green-600" />
                              <span>{item.date}</span>
                              <span className="text-green-300">|</span>
                              <Clock className="size-3.5 text-green-600" />
                              <span>{item.time}</span>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl md:mr-auto">
                              {item.text}
                            </p>
                          </div>
                        ) : (
                          <div className="w-full max-w-[400px]">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg border border-gray-100 transition-transform duration-500 hover:scale-[1.02]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
