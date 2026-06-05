import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, Leaf, Sprout, ChevronLeft, ChevronRight, MapPin, User, X, Tag, Droplet, Scissors, IndianRupee, CheckCircle, PackageCheck, Tractor, BadgeCheck, ShieldCheck, ClipboardCheck, Search } from 'lucide-react';
import api from '../services/apiService';

interface ImageCarouselProps {
  images?: string[];
}

const ImageCarousel = ({ images = ['/1 .png', '/2 .png', '/3 .png', '/4 .png', '/5 .png'] }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
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
      {images.length > 0 ? (
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
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/50">
          No Images Available
        </div>
      )}

      {/* Gradient overlay for text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f]/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
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
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
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
      )}
    </div>
  );
};

export function Blog() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCardPreviewOpen, setIsCardPreviewOpen] = useState(false);
  const [farmers, setFarmers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFarmer, setActiveFarmer] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCycleIndex, setSelectedCycleIndex] = useState<number>(0);
  const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);
  const [expandedCardIndices, setExpandedCardIndices] = useState<Record<number, boolean>>({});

  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const remainingFarmers = farmers.slice(2).filter(farmer => 
    farmer.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    farmer.village_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    farmer.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const itemsCount = remainingFarmers.length;
    if (itemsCount <= visibleCount) {
      setSlideIndex(0);
      return;
    }
    const timer = setInterval(() => {
      setSlideIndex((prev) => {
        const maxSlide = itemsCount - visibleCount;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [remainingFarmers.length, visibleCount]);

  useEffect(() => {
    setSelectedCycleIndex(0);
    setIsDescExpanded(false);
  }, [activeFarmer]);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.get('/api/v1/farmers/');
        if (data && data.farmers && data.farmers.length > 0) {
          // Normalize description encoding issues if any exist
          const sanitizedFarmers = data.farmers.map((f: any) => ({
            ...f,
            village_name: f.village_name ? f.village_name.split(' - ')[0] : 'N/A'
          }));
          setFarmers(sanitizedFarmers);
          setActiveFarmer(sanitizedFarmers[0]);
        } else {
          setFarmers([]);
          setActiveFarmer(null);
          setError("No active farmer stories were found in the staging database.");
        }
      } catch (err: any) {
        console.error('Error fetching farmers from backend:', err);
        setFarmers([]);
        setActiveFarmer(null);
        setError(err.message || 'Failed to communicate with staging backend. Please verify your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  useEffect(() => {
    if (isExpanded || isCardPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded, isCardPreviewOpen]);

  useEffect(() => {
    setIsDescExpanded(false);
  }, [isCardPreviewOpen]);



  // Icon + label config for every known event type
  const EVENT_CONFIG: Record<string, { icon: any; label: string; stepLabel: string }> = {
    crop_started: { icon: Sprout, label: 'Crop Started', stepLabel: 'CYCLE STARTED' },
    sapling_added: { icon: Leaf, label: 'Saplings Added', stepLabel: 'SAPLING SUPPORT' },
    fertilizer_request: { icon: Tag, label: 'Fertilizer Requested', stepLabel: 'FERTILIZER REQUEST' },
    fertilizer_approved: { icon: BadgeCheck, label: 'Fertilizer Approved', stepLabel: 'FERTILIZER APPROVED' },
    fertilizer_delivered: { icon: PackageCheck, label: 'Fertilizer Delivered', stepLabel: 'FERTILIZER DELIVERED' },
    harvest_request: { icon: Tractor, label: 'Harvest Requested', stepLabel: 'HARVEST REQUEST' },
    harvest_accepted: { icon: CheckCircle, label: 'Harvest Accepted', stepLabel: 'HARVEST ACCEPTED' },
    receipt_uploaded: { icon: ClipboardCheck, label: 'Receipt Uploaded', stepLabel: 'RECEIPT UPLOADED' },
    fo_approved_receipt: { icon: ShieldCheck, label: 'FO Approved Receipt', stepLabel: 'FO APPROVAL' },
    admin_approved: { icon: IndianRupee, label: 'Admin Finalised Payment', stepLabel: 'PAYMENT FINALISED' },
  };

  // Mapper: one timeline entry per event in cycle_history
  const mapFarmerToTimeline = (farmer: any, cycleIndex: number = 0) => {
    if (!farmer) return [];

    const activeCycle = farmer.crop_cycles?.[cycleIndex] || {};
    const farmerName = farmer.name || 'Farmer';
    const landId = farmer.land_id || farmer.landId || activeCycle.landId || 'N/A';
    const agentName = activeCycle.agent_name || 'Agent';
    const yieldTons = activeCycle.no_tones || 0;
    const amount = activeCycle.amount || 0;
    const stemsCost = activeCycle.stems_cost || 0;
    const agentComm = activeCycle.agent_commission || 0;
    const netFarmer = activeCycle.net_farmer_amount || 0;
    const stemsCount = activeCycle.stems_count || 0;
    const fertCost = activeCycle.fertilizer_cost ?? 0;
    const durationDays = activeCycle.days_to_harvest || 75;

    // Images from backend where available
    const saplingImg = farmer.cycle_history?.cycles?.[cycleIndex]?.events?.find((e: any) => e.type === 'sapling_added')?.extra?.images
      || farmer.land_images?.[0] || '/1 .png';
    const harvestImg = activeCycle.receipt_image_url?.[0]
      || farmer.cycle_history?.cycles?.[cycleIndex]?.events?.find((e: any) => e.type === 'receipt_uploaded')?.extra?.receipt_image_url?.[0]
      || farmer.land_images?.[3] || '/4 .png';
    const fallbackImgs = ['/1 .png', '/2 .png', '/3 .png', '/4 .png', '/5 .png'];

    const formatTs = (ts?: string) => {
      if (!ts) return { date: 'Pending', time: 'N/A' };
      try {
        const d = new Date(ts.replace(' ', 'T'));
        return {
          date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          time: d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        };
      } catch {
        const p = ts.split(' ');
        return { date: p[0] || 'Pending', time: p[1] || 'N/A' };
      }
    };

    const buildText = (event: any): string => {
      const who = event.user_name || 'Agent';
      const role = event.user_role?.replace('_', ' ') || 'Agent';
      switch (event.type) {
        case 'crop_started':
          return `${role} ${who} officially started Cycle ${event.cycle_number} for farmer ${farmerName} on land ${landId}. The crop schedule runs for ${durationDays} days, from ${formatTs(event.timestamp).date}.`;
        case 'sapling_added':
          return `${who} (${role}) added ${(event.extra?.quantity || stemsCount).toLocaleString()} green fodder saplings to the field. Status: ${event.extra?.status || 'ACTIVE'}. These saplings form the foundation of this cultivation cycle.`;
        case 'fertilizer_request': {
          const fname = event.extra?.fertilizer_name || 'Fertilizer';
          const qty = event.extra?.quantity || 0;
          const unit = event.extra?.unit || 'KG';
          return `${who} (${role}) raised a fertilizer request for ${fname} — ${qty} ${unit}. Request ID: ${event.extra?.request_id || 'N/A'}. Status: ${event.extra?.status || 'PENDING'}. Organic nutrition support is essential for healthy crop growth.`;
        }
        case 'fertilizer_approved': {
          const fname = event.extra?.fertilizer_name || 'Fertilizer';
          const qty = event.extra?.quantity || 0;
          const unit = event.extra?.unit || 'KG';
          return `Field Officer ${who} reviewed and approved the fertilizer request for ${fname} (${qty} ${unit}). This verification ensures the right nutrients reach the field as per crop requirements. Request ID: ${event.extra?.request_id || 'N/A'}.`;
        }
        case 'fertilizer_delivered': {
          const fname = event.extra?.fertilizer_name || 'Fertilizer';
          const qty = event.extra?.quantity || 0;
          const unit = event.extra?.unit || 'KG';
          return `${who} (${role}) confirmed delivery of ${fname} — ${qty} ${unit} to the farm site. Delivered on ${event.extra?.delivered_at ? formatTs(event.extra.delivered_at).date : formatTs(event.timestamp).date}. Total fertilizer cost for this cycle: ₹${fertCost.toLocaleString()}.`;
        }
        case 'harvest_request':
          return `${who} (${role}) submitted a harvest request for land ${landId}. Harvest status at request time: ${event.extra?.harvest_status || activeCycle.harvest_status || 'REQUESTED'}. Landify coordinates the full logistics from here.`;
        case 'harvest_accepted':
          return `Field Officer ${who} reviewed the field and accepted the harvest request. This greenlight authorises the Landify harvesting team to proceed with cutting and collecting the mature green fodder crop.`;
        case 'receipt_uploaded': {
          const tons = event.extra?.no_tones || yieldTons;
          return `${who} (${role}) uploaded the verified harvest receipt confirming a yield of ${tons} tons of green fodder. This receipt triggers the payment calculation pipeline. Total crop value: ₹${amount.toLocaleString()}.`;
        }
        case 'fo_approved_receipt':
          return `Field Officer ${who} verified and approved the harvest receipt. This confirms the tonnage and quality of the collected crop, enabling Admin to finalise and disburse farmer payment.`;
        case 'admin_approved':
          return `Admin ${who} finalised the harvest and approved payment disbursement. Breakdown — Gross Amount: ₹${amount.toLocaleString()} | Stems Cost: ₹${stemsCost.toLocaleString()} | Agent Commission: ₹${agentComm.toLocaleString()} | Net Farmer Payout: ₹${netFarmer.toLocaleString()}. Payment status: ${activeCycle.farmer_payment_received ? 'COMPLETED ✓' : 'PENDING DISBURSEMENT'}.`;
        default:
          return event.description || 'Event recorded in the crop lifecycle.';
      }
    };

    const pickImage = (event: any, idx: number): string => {
      switch (event.type) {
        case 'sapling_added': return event.extra?.images || saplingImg;
        case 'fertilizer_delivered': return event.extra?.delivered_image_url || farmer.land_images?.[1] || fallbackImgs[1];
        case 'receipt_uploaded': return event.extra?.receipt_image_url?.[0] || harvestImg;
        default: return farmer.land_images?.[idx % (farmer.land_images?.length || 1)] || fallbackImgs[idx % 5];
      }
    };

    const events: any[] = farmer.cycle_history?.cycles?.[cycleIndex]?.events || [];

    // If no events at all, fall back to 5 generic stages from crop_cycles data
    if (events.length === 0) {
      return [
        { step: 'CYCLE STARTED', title: 'Crop Cycle Initiated', image: farmer.land_images?.[0] || '/1 .png', icon: Sprout, text: `${farmerName} partnered with Landify and started cultivation on land ${landId} with ${stemsCount.toLocaleString()} saplings.`, date: formatTs(activeCycle.crop_started_date || activeCycle.started_at).date, time: formatTs(activeCycle.crop_started_date || activeCycle.started_at).time },
        { step: 'FERTILIZER', title: 'Fertilizer & Nutrition', image: farmer.land_images?.[1] || '/2 .png', icon: Tag, text: `Subsidized organic fertilizers were provided. Total cost: ₹${fertCost.toLocaleString()}.`, date: formatTs(activeCycle.createdAt).date, time: formatTs(activeCycle.createdAt).time },
        { step: 'CULTIVATION', title: 'Active Field Growth', image: farmer.land_images?.[2] || '/3 .png', icon: Droplet, text: `Crop is ${activeCycle.is_active ? 'ACTIVE' : 'INACTIVE'} and monitored by ${agentName} for ${durationDays} days.`, date: formatTs(activeCycle.updatedAt).date, time: formatTs(activeCycle.updatedAt).time },
        { step: 'HARVESTING', title: 'Harvest & Yield', image: harvestImg, icon: Scissors, text: `Landify completed harvesting. Yield: ${yieldTons} tons. Status: ${activeCycle.harvest_status || 'N/A'}.`, date: formatTs(activeCycle.harvested_date).date, time: formatTs(activeCycle.harvested_date).time },
        { step: 'PAYMENT', title: 'Farmer Income Disbursed', image: farmer.land_images?.[4] || '/5 .png', icon: IndianRupee, text: `Net payout to farmer: ₹${netFarmer.toLocaleString()} after deductions. Payment: ${activeCycle.farmer_payment_received ? 'COMPLETED' : 'PENDING'}.`, date: formatTs(activeCycle.admin_approved_at).date, time: formatTs(activeCycle.admin_approved_at).time },
      ];
    }

    return events.map((event: any, idx: number) => {
      const cfg = EVENT_CONFIG[event.type] || { icon: CheckCircle, label: event.action || event.type, stepLabel: (event.type || 'EVENT').toUpperCase().replace(/_/g, ' ') };
      const ts = formatTs(event.timestamp);
      return {
        step: cfg.stepLabel,
        title: cfg.label,
        image: pickImage(event, idx),
        icon: cfg.icon,
        text: buildText(event),
        date: ts.date,
        time: ts.time,
      };
    });
  };

  const extendedParagraphs = mapFarmerToTimeline(activeFarmer, selectedCycleIndex);

  return (
    <div className="bg-[#f0f4f1] min-h-screen pt-28 md:pt-36 pb-16">

      {/* Dynamic Content Section */}
      {loading ? (
        <div className="py-24 text-center">
          <div className="inline-block size-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-green-800 font-semibold text-lg">Fetching dynamic farmers' stories...</p>
        </div>
      ) : error ? (
        <div className="py-20 text-center max-w-lg mx-auto px-4 my-12 bg-white rounded-3xl shadow-xl border border-red-50">
          <div className="size-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4 border border-red-100">
            <X className="size-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">Failed to Load Stories</h3>
          <p className="text-gray-500 font-semibold mb-6 text-sm leading-relaxed">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-[#0a2e1f] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-sm active:scale-95 duration-200"
          >
            Retry Connection
          </button>
        </div>
      ) : farmers.length === 0 ? (
        <div className="py-20 text-center max-w-lg mx-auto px-4 my-12 bg-white rounded-3xl shadow-xl border border-green-50">
          <div className="size-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-100">
            <Leaf className="size-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">No Stories Available</h3>
          <p className="text-gray-500 font-semibold mb-6 text-sm leading-relaxed">
            There are currently no active farmer cultivation cycles loaded in the backend database.
          </p>
        </div>
      ) : (
        <section className="py-16 w-full flex flex-col gap-16">
          {/* Top Right Search Bar */}
          {farmers.length > 0 && (
            <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-end -mb-4">
              <div className="relative w-full sm:w-80">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="size-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search farmer stories..."
                  className="w-full bg-white text-gray-800 placeholder-gray-400 pl-11 pr-10 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm text-sm font-semibold transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
            </div>
          )}
          {/* First 2 Full Width Cards */}
          {farmers.slice(0, 2).length > 0 && (
            <div className="w-full px-4 sm:px-8 lg:px-12">
              <div className="max-w-full mx-auto flex flex-col gap-12 w-full">
                {farmers.slice(0, 2).map((farmer, index) => {
                  const displayDate = farmer.crop_cycles?.[0]?.crop_started_date || farmer.crop_cycles?.[0]?.started_at
                    ? new Date(farmer.crop_cycles[0].crop_started_date || farmer.crop_cycles[0].started_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
                    : 'MAY 26, 2025';

                  return (
                    <motion.div
                      key={farmer.farmer_id || index}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-[2.5rem] shadow-lg border border-green-50 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row p-8 gap-8 items-stretch w-full group"
                    >
                      {/* Left side: Image Carousel & Caption */}
                      <div className="w-full lg:w-[48%] flex flex-col gap-4 justify-start">
                        <div className="w-full relative rounded-[2rem] overflow-hidden">
                          <ImageCarousel images={farmer.land_images && farmer.land_images.length > 0 ? farmer.land_images : undefined} />
                        </div>
                        <div className="flex items-start gap-3 pl-1">
                          <div className="w-1.5 h-6 bg-green-500 rounded-full shrink-0 mt-0.5" />
                          <p className="text-green-700 font-semibold text-sm italic text-left">
                            Explore the complete lifecycle of high-quality green fodder and how streamlined logistics ensure freshness and consistency.
                          </p>
                        </div>
                      </div>

                      {/* Right side: Farmer Details */}
                      <div className="w-full lg:w-[52%] flex flex-col justify-between py-2">
                        <div>
                          {/* Profile and Date Row */}
                          <div className="flex items-center gap-4 mb-6">
                            <img
                              src={farmer.profile_image || "/profile.jpg"}
                              alt={farmer.name || 'Farmer'}
                              onError={(e) => { (e.target as HTMLImageElement).src = "/profile.jpg"; }}
                              className="w-24 h-24 rounded-2xl object-cover border-[4px] border-green-500 shadow-md"
                            />
                            <div className="flex items-center gap-2 text-green-700 font-bold text-xs tracking-wider uppercase">
                              <Calendar className="size-4 text-green-600" />
                              <span>{displayDate}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-3xl font-black text-[#0a2e1f] mb-4 leading-tight text-left">
                            The Journey of Green Fodder From {farmer.name} Farm Land  to Landify
                          </h2>

                          {/* Description */}
                          <p className={`text-gray-600 text-sm leading-relaxed font-semibold text-left mb-6 ${expandedCardIndices[index] ? '' : 'line-clamp-6'}`}>
                            {farmer.description || `At Landify company, the journey of green fodder starts from the farmer's land. Farmers and the company work together to cultivate healthy green grass in a simple and supportive way. The company makes an annual contract with farmers who are interested in growing green fodder on their land. Based on the number of acres, farmers receive saplings for cultivation. For every acre, the company provides 10,000 saplings, helping farmers start cultivation without difficulty. Landify company also supports farmers by providing fertilizers at a low price, which helps reduce farming expenses.`}
                          </p>

                          {/* Read More & Harvest Details Buttons */}
                          <div className="flex flex-wrap items-center gap-4 justify-start">
                            {expandedCardIndices[index] ? (
                              <>
                                <button
                                  onClick={() => {
                                    setExpandedCardIndices(prev => ({
                                      ...prev,
                                      [index]: false
                                    }));
                                  }}
                                  className="inline-flex items-center gap-2.5 bg-[#0a2e1f] hover:bg-green-700 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                                >
                                  <span>READ LESS</span>
                                  <ArrowRight className="size-3.5 text-green-300 rotate-90" />
                                </button>
                                <button
                                  onClick={() => { setActiveFarmer(farmer); setIsExpanded(true); }}
                                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-[#0a2e1f] text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md group"
                                >
                                  <Tractor className="size-4 text-white flex-shrink-0 group-hover:rotate-12 transition-transform" />
                                  <span>Harvest Details</span>
                                  <ArrowRight className="size-4 text-green-200 group-hover:translate-x-1 transition-transform" />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => {
                                  setExpandedCardIndices(prev => ({
                                    ...prev,
                                    [index]: true
                                  }));
                                }}
                                className="inline-flex items-center gap-2.5 bg-[#0a2e1f] hover:bg-green-700 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                              >
                                <span>READ MORE</span>
                                <ArrowRight className="size-3.5 text-green-300" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Village & Farmer Badges at the bottom right */}
                        <div className="mt-8 flex flex-row flex-wrap items-center justify-end gap-3 w-full">
                          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 shadow-sm">
                            <MapPin className="size-3.5 text-green-600 flex-shrink-0" />
                            <div className="text-left">
                              <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Village</span>
                              <span className="block text-xs font-bold text-[#0a2e1f]">{farmer.village_name || 'N/A'}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 shadow-sm">
                            <User className="size-3.5 text-green-600 flex-shrink-0" />
                            <div className="text-left">
                              <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Farmer</span>
                              <span className="block text-xs font-bold text-[#0a2e1f]">{farmer.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Remaining Small Cards Horizontal Auto Slider */}
          {remainingFarmers.length > 0 && (
            <div className="w-full px-12 relative mt-4">
              <div className="max-w-7xl mx-auto overflow-hidden py-4">
                <div
                  className="flex transition-transform duration-500 ease-out gap-8 w-full"
                  style={{
                    transform: `translateX(calc(-${slideIndex * (100 / visibleCount)}% - ${slideIndex * 32 / visibleCount}px))`
                  }}
                >
                  {remainingFarmers.map((farmer, index) => (
                    <motion.div
                      key={farmer.farmer_id || index}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="bg-white rounded-[2rem] shadow-lg border border-green-50 overflow-hidden relative hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col p-8 gap-5 items-center text-center group"
                      style={{
                        width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 32 / visibleCount}px)`,
                        flexShrink: 0
                      }}
                    >
                      {/* Profile Image at top */}
                      <div className="relative">
                        <img
                          src={farmer.profile_image || "/profile.jpg"}
                          alt={farmer.name || 'Farmer'}
                          onError={(e) => { (e.target as HTMLImageElement).src = "/profile.jpg"; }}
                          className="w-24 h-24 rounded-full object-cover border-[4px] border-green-500 shadow-md group-hover:border-green-400 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1.5 shadow-md">
                          <Leaf className="size-4" />
                        </div>
                      </div>

                      {/* Name below profile */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-black text-[#0a2e1f] tracking-tight">{farmer.name}</h3>
                      </div>

                      {/* Description text */}
                      <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3 flex-grow">
                        {farmer.description || 'No description available for this farmer story. Click Read More to explore their green fodder journey.'}
                      </p>

                      {/* Read More button triggers the popup card modal */}
                      <button
                        onClick={() => { setActiveFarmer(farmer); setIsCardPreviewOpen(true); }}
                        className="mt-2 inline-flex items-center gap-2 bg-[#0a2e1f] hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                      >
                        <span>Read More</span>
                        <ArrowRight className="size-3.5 text-green-300" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Dot Indicators */}
                {remainingFarmers.length > visibleCount && (
                  <div className="flex justify-center gap-2.5 mt-8">
                    {Array.from({ length: remainingFarmers.length - visibleCount + 1 }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          slideIndex === idx ? 'bg-green-600 w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              {remainingFarmers.length > visibleCount && (
                <>
                  <button
                    onClick={() => {
                      const itemsCount = remainingFarmers.length;
                      const maxSlide = Math.max(0, itemsCount - visibleCount);
                      setSlideIndex((prev) => (prev <= 0 ? maxSlide : prev - 1));
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 text-green-700 p-2.5 rounded-full shadow-lg border border-green-100 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="size-6" />
                  </button>

                  <button
                    onClick={() => {
                      const itemsCount = remainingFarmers.length;
                      const maxSlide = Math.max(0, itemsCount - visibleCount);
                      setSlideIndex((prev) => (prev >= maxSlide ? 0 : prev + 1));
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 text-green-700 p-2.5 rounded-full shadow-lg border border-green-100 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              )}
            </div>
          )}

          {/* No results message */}
          {searchQuery !== '' && remainingFarmers.length === 0 && (
            <div className="w-full text-center py-16 text-green-800 font-bold text-lg max-w-lg mx-auto bg-white rounded-3xl shadow-md border border-green-100 my-4">
              No matching farmer stories found for "{searchQuery}".
            </div>
          )}
        </section>
      )}

      {/* Full Card Preview Page */}
      <AnimatePresence>
        {isCardPreviewOpen && activeFarmer && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 1 }}
            exit={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#f0f4f1] overflow-hidden flex flex-col"
          >
            {/* Sticky Page Header */}
            <div className="sticky top-0 bg-[#f0f4f1]/80 backdrop-blur-md z-30 border-b border-green-100 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setIsCardPreviewOpen(false)}
                className="flex items-center gap-2 text-[#0a2e1f] font-black text-sm uppercase tracking-widest hover:text-green-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="size-5" />
                <span>Back to Stories</span>
              </button>
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Farmer Story</span>
            </div>

            {/* Main Page Layout Wrapper */}
            <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-4 md:py-6 flex flex-col justify-center min-h-0">
              <div className="bg-white rounded-[2rem] shadow-xl border border-green-50 overflow-hidden w-full flex flex-col lg:flex-row max-h-[calc(100vh-120px)] min-h-0">
                <div className="flex flex-col lg:flex-row gap-0 items-stretch flex-grow min-h-0 w-full">
                  {/* Left: Carousel */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-start gap-4 overflow-y-auto custom-scrollbar">
                    <ImageCarousel images={activeFarmer.land_images && activeFarmer.land_images.length > 0 ? activeFarmer.land_images : undefined} />
                    <p className="text-green-700 font-semibold text-sm border-l-4 border-green-500 pl-3 italic">
                      Explore the complete lifecycle of high-quality green fodder and how streamlined logistics ensure freshness and consistency.
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col items-start justify-start overflow-y-auto custom-scrollbar">
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={activeFarmer.profile_image || "/profile.jpg"}
                        alt={activeFarmer.name || 'Farmer'}
                        onError={(e) => { (e.target as HTMLImageElement).src = "/profile.jpg"; }}
                        className="w-24 h-24 rounded-2xl object-cover border-2 border-green-500 shadow-md"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Farmer Story</span>
                        <span className="text-lg font-black text-[#0a2e1f] leading-tight">{activeFarmer.name}</span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs font-semibold">
                          <MapPin className="size-3 text-green-500" />
                          <span>{activeFarmer.village_name || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar className="size-3" />
                          <span>
                            {activeFarmer.crop_cycles?.[0]?.crop_started_date || activeFarmer.crop_cycles?.[0]?.started_at
                              ? new Date(activeFarmer.crop_cycles[0].crop_started_date || activeFarmer.crop_cycles[0].started_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                              : 'Ongoing'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-[#0a2e1f] mb-3 leading-tight">
                      {`Green Fodder From ${activeFarmer.name}'s Farm Land to Landify`}
                    </h2>

                    {(() => {
                      const descParagraphs: string[] = String(activeFarmer?.description || 'No description available.')
                        .split('\n')
                        .map((p: string) => p.trim())
                        .filter(Boolean);

                      return (
                        <>
                          <div className="flex flex-col gap-3 mb-6">
                            {descParagraphs.map((p: string, idx: number) => (
                              <p key={idx} className="text-gray-600 text-sm leading-relaxed font-medium">
                                {p}
                              </p>
                            ))}
                          </div>

                          <button
                            onClick={() => { setIsExpanded(true); }}
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-[#0a2e1f] text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md group"
                          >
                            <Tractor className="size-4 text-white flex-shrink-0 group-hover:rotate-12 transition-transform" />
                            <span>Harvest Details</span>
                            <ArrowRight className="size-4 text-green-200 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </>
                      );
                    })()}

                    {/* Village & Farmer badges */}
                    <div className="mt-6 w-full flex flex-row flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 shadow-sm">
                        <MapPin className="size-3.5 text-green-600 flex-shrink-0" />
                        <div className="text-left">
                          <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Village</span>
                          <span className="block text-xs font-bold text-[#0a2e1f]">{activeFarmer.village_name || 'N/A'}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 shadow-sm">
                        <User className="size-3.5 text-green-600 flex-shrink-0" />
                        <div className="text-left">
                          <span className="block text-[8px] font-black text-green-500 uppercase tracking-widest">Farmer</span>
                          <span className="block text-xs font-bold text-[#0a2e1f]">{activeFarmer.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Popup Overlay */}
      <AnimatePresence>
        {isExpanded && activeFarmer && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-6" />
              </button>

              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-2">
                  Farmer {activeFarmer.name}'s Story
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-[#0a2e1f] mb-4">
                  The Journey of Green Fodder
                </h3>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
              </div>

              {/* Cycle Tab Switcher */}
              {activeFarmer && Math.max(activeFarmer.cycle_history?.cycles?.length || 0, activeFarmer.crop_cycles?.length || 0) > 1 && (
                <div className="flex justify-center gap-2 mb-8 border-b border-gray-100 pb-4">
                  {Array.from({ length: Math.max(activeFarmer.cycle_history?.cycles?.length || 0, activeFarmer.crop_cycles?.length || 0) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCycleIndex(idx)}
                      className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm cursor-pointer ${selectedCycleIndex === idx
                          ? 'bg-[#0a2e1f] text-white shadow-md scale-105'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                      Cycle {idx + 1}
                    </button>
                  ))}
                </div>
              )}

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
                      <div className={`flex flex-col justify-center w-full ${isEven
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
                        <div className="size-10 rounded-full bg-green-600 text-white flex items-center justify-center border-4 border-white shadow-md z-10">
                          <item.icon className="size-4" />
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className={`flex flex-col justify-center w-full ${isEven
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

