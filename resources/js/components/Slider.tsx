import { SlidePropos } from '@/types';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, EffectFade  } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Slider({ slides }: SlidePropos) {
    return (
        <div className="relative h-[65vh] w-full z-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Image */}
              {slide.img_path && (
                <img
                  src={`/storage/${slide.img_path}`}
                  alt={slide.title}
                  className="h-full w-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
                />
              )}

              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 via-sky-900/30 to-sky-900/70 dark:from-black/70 dark:to-black/90"></div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20">
                <div className="flex max-w-screen-2xl flex-col items-center mx-auto lg:max-w-3xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl text-white"
                  >
                    <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-7 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl dark:text-gray-300"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-7 flex items-center gap-7"
                  >
                    <a
                      className="border border-transparent text-sm bg-sky-600/80 px-6 py-3 font-medium text-white shadow-lg hover:bg-sky-600/90 hover:text-gray-300 transition-all duration-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:rounded"
                      href="#"
                    >
                      En savoir plus
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
}
