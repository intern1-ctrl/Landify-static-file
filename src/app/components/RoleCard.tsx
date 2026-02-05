import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  responsibilities: string[];
  imageUrl: string;
  gradient: string;
  reverse?: boolean;
}

export function RoleCard({
  icon: Icon,
  title,
  description,
  responsibilities,
  imageUrl,
  gradient,
  reverse = false,
}: RoleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        reverse ? 'md:grid-flow-dense' : ''
      }`}
    >
      {/* Content */}
      <div className={reverse ? 'md:col-start-2' : ''}>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} mb-6`}>
          <Icon className="size-5 text-white" />
          <span className="text-white font-semibold">{title}</span>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {description}
        </h3>

        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-green-600" />
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={reverse ? 'md:col-start-1 md:row-start-1' : ''}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20`} />
        </div>
      </div>
    </motion.div>
  );
}
