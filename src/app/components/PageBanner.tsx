import { motion } from 'motion/react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export function PageBanner({ title, subtitle, imageUrl }: PageBannerProps) {
  return (
    <div className="relative h-[300px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/70" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-green-100 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
