'use client';

import { motion, AnimatePresence } from 'framer-motion';

const InfoModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-[var(--color-bg-menu)] max-w-md md:max-w-2xl w-full text-[var(--color-white)] text-sm max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with padding */}
          <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
            <h2 className="text-sm text-[var(--color-white)]">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-[var(--color-white)] hover:text-[var(--color-gray-light)] transition-colors"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Scrollable Content Area with padding */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
            <div className="text-[var(--color-white)] leading-relaxed">
              {typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                content
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoModal;

