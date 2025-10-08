import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Partner {
  id: number;
  name: string;
  logo: string; // chemin vers le logo
  link?: string;
}

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-14">
        {/* Titre */}
        <div className="mb-12">
          <h2 className="font-semibold text-orange-500 text-2xl">
            Nos Partenaires & Collaborations
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            L’ANSSI collabore avec des acteurs nationaux et internationaux pour renforcer la cybersécurité.
          </p>
        </div>

        {/* Carousel logos */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <a
                href={partner.link || "#"}
                className="flex items-center justify-center p-4 bg-white/10 hover:scale-105 transition-transform"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
