"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./Header";
import moviesPresent from "../data/moviesPresent.json";
import Link from "next/link";
import Footer from "./Footer";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Header */}
      <Header />

      {/* Swiper Carrousel */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {moviesPresent.map((movie) => (
          <SwiperSlide key={movie.id} className="relative w-full" style={{ height: '862px' }} >
            {/* Image d'arrière-plan */}
            <div className="absolute inset-0">
              <Image
                src={movie.wallpaper}
                alt={movie.title}
                fill
                className="object-cover brightness-75"
              />
            </div>

            {/* Contenu superposé */}
            <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-8 md:px-16 text-white">
              <div className="max-w-lg text-center md:text-left">
                {/* Logo */}
                <Image
                  src={movie.logo}
                  alt={`${movie.title} logo`}
                  width={500}
                  height={200}
                  className="mb-6 mx-auto md:mx-0"
                  style={{ height: '260px' }}
                />

                {/* Description */}
                <p className="mb-6 text-gray-200" style={{ textShadow: "2px 2px 2px #000000" }}>{movie.pitch}</p>

                {/* Liste bouton */}
                <div className="flex flex-row gap-2">
                  <Link
                  href="#"
                  className="inline-block bg-red-600 px-4 py-3 text-lg font-semibold rounded-md hover:bg-red-700 transition-colors"
                >
                  Lecture <i className="fa-solid fa-play ml-2"></i>
                </Link>
                <button className="inline-block bg-red-600 px-0 py-3 text-lg font-semibold rounded-md hover:bg-red-700 transition-colors" >
                  <i className="fa-solid fa-bookmark px-6"></i>
                </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Footer />
    </div>
  );
};

export default Main;
