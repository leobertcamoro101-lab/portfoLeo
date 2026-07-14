import {motion} from 'framer-motion'
import { popIn } from '../../../../utils/animations';
function CertCard({ cert, index }) {
  return (
    <motion.div
      key={cert.id}
      variants={popIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-[#232018] border border-[#D9D4C9] dark:border-[#2A2520] rounded-[14px] p-5 flex items-start gap-4"
    >
      {/* Icon */}
      <div className={`w-10 h-10 shrink-0 rounded-[10px] ${cert.color} flex items-center justify-center text-lg`}>
        {cert.icon}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-medium text-[#1A1814] dark:text-[#F7F5F0] leading-[1.4] mb-1">
          {cert.title}
        </h3>
        <p className="text-[12px] text-[#2D5BE3] font-medium mb-0.5">{cert.issuer}</p>
        <p className="text-[11px] text-[#7A7468] dark:text-[#A09890]">{cert.date}</p>
      </div>
    </motion.div>
  );
}

export default CertCard;