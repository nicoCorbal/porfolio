import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import '../styles/global.css';

const Card = ({ project, onSwipe, isTopCard, isMobile, texts, index, totalCards }) => {
  const x = useMotionValue(0);

  // Hooks must be called unconditionally.
  const rotate = useTransform(x, [-300, 300], [-25, 25], { clamp: false });
  const imageParallax = useTransform(x, [-300, 300], [-30, 30]);
  const scale = useTransform(x, [-300, 300], [1, 0.95]);
  const y = useTransform(x, [-300, 300], [0, -20]);

  const cardVariants = {
    initial: { scale: 0.8, y: 0, rotate: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1 - (i * 0.04),
      y: i * 15,
      rotate: i > 0 && !isMobile ? (i % 2 === 0 ? 5 : -5) : 0,
      opacity: 1,
      zIndex: totalCards - i,
      transition: { type: 'spring', stiffness: 150, damping: 25, mass: 0.5 }
    }),
    exit: {
      x: x.get() > 0 ? 350 : -350,
      opacity: 0,
      scale: isMobile ? 1 : 0.7, // Simpler exit on mobile
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  // On mobile, background cards are static during drag for performance.
  // The style prop now conditionally applies transforms.
  const style = isTopCard 
    ? { x, rotate: !isMobile ? rotate : undefined } 
    : (isMobile ? {} : { scale, y });

  return (
    <motion.div
      key={project.title}
      style={style}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
      drag={isTopCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={isMobile ? 0.5 : 0.55}
      onDragEnd={(event, info) => {
        if (isTopCard) {
          if (info.offset.x > 150) {
            setTimeout(() => window.open(project.url, '_blank', 'noopener,noreferrer'), 300);
            onSwipe();
          } else if (info.offset.x < -150) {
            onSwipe();
          }
        }
      }}
      className="absolute w-[80vw] md:w-[40vw] lg:w-[35vw] h-[75vh] max-w-[480px] max-h-[650px] cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl pointer-events-none">
        <motion.div className="absolute inset-0" style={!isMobile ? { x: imageParallax } : {}}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover"
              loading={isTopCard ? "eager" : "lazy"}
            />
        </motion.div>
        {project.video && (
          <video
            src={project.video}
            autoPlay={false}
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.image}
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-5">
          <span className="inline-block mb-2 text-xs font-medium text-white/90 bg-black/40 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm">
            {texts.client}: {project.client}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = ({ projects: initialProjects, texts }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setProjects(initialProjects), [initialProjects]);
  const handleSwipe = () => projects.length > 0 && setProjects(prev => prev.slice(1));
  const handleReset = () => setProjects(initialProjects);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hintVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };
  
  const arrowAnimation = {
    y: ["-2px", "2px", "-2px"],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-x-hidden">
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: texts.title }} />
      
      <div className="relative w-full h-[80vh] max-h-[700px] flex items-center justify-center mt-8">
        <AnimatePresence>
          {projects.length > 0 && (
            <>
              {/* Desktop-only hints */}
              <motion.div
                variants={hintVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex flex-col items-center gap-2 text-gray-400 font-semibold text-sm pointer-events-none"
              >
                <motion.div animate={arrowAnimation}>
                  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </motion.div>
                <span className="text-center">Swipe left<br/>to Skip</span>
              </motion.div>
              
              <motion.div
                variants={hintVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex flex-col items-center gap-2 text-gray-400 font-semibold text-sm pointer-events-none"
              >
                <motion.div animate={arrowAnimation}>
                  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ transform: 'scaleX(-1)'}}><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </motion.div>
                <span className="text-center">Swipe right<br/>to Open</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <Card 
                    key={project.title}
                    project={project}
                    onSwipe={handleSwipe}
                    isTopCard={index === 0}
                    isMobile={isMobile}
                    texts={texts}
                    index={index}
                    totalCards={projects.length}
                  />
                ))
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <button
                     onClick={handleReset}
                     className="bg-black text-white hover:bg-gray-800 transition-colors font-medium shadow-md px-6 py-3 rounded-md text-lg"
                   >
                     Ver de nuevo
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Mobile-only Swipe Instructions */}
        <AnimatePresence>
          {isMobile && projects.length > 0 && (
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center pointer-events-none z-50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                exit={{ opacity: 0, y: 20 }}
                className="w-auto px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center gap-6 text-sm text-white/80"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  <span className="font-medium">Skip</span>
                </div>
                <div className="font-bold text-white">SWIPE</div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Open</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsGrid;