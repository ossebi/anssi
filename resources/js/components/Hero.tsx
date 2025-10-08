import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}: BannerProps) {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-900 "
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
