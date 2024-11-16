"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black text-white flex items-center justify-between px-6 py-4">
      <div className="text-xl flex flex-row">
        <Link href="/" className="text-xl font-bold">
          BackMovie
        </Link>
        <nav className="flex gap-6 mx-9 items-center">
        <div className="relative">
          {/* Dropdown Toggle */}
          <button
            onClick={toggleDropdown}
            className="hover:text-gray-300 focus:outline-none"
          >
            Films ▼
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute top-full left-0 bg-gray-800 text-white p-6 mt-2 shadow-lg flex gap-8 z-50 w-[900px]"
              onMouseLeave={() => setDropdownOpen(false)} 
            >
              {/* Colonne des images */}
              <div className="flex flex-col items-start gap-2 w-1/3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/picts/houseProductions/disneyLogo.png"
                    alt="Disney"
                    width={200}
                    height={20}
                    className="rounded-md w-96"
                    style={{ height: '60px' }} 
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/picts/houseProductions/dreamworksLogo.png"
                    alt="Dreamworks"
                    width={200}
                    height={20}
                    className="rounded-md w-96"
                    style={{ height: '60px' }} 
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/picts/houseProductions/warnerBrosAnimationLogo.png"
                    alt="Warner Bros Animation"
                    width={200}
                    height={20}
                    className="rounded-md w-96"
                    style={{ height: '60px' }} 
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/picts/houseProductions/netflixLogo.png"
                    alt="Netflix"
                    width={200}
                    height={20}
                    className="rounded-md w-96"
                    style={{ height: '60px' }}  
                  />
                </div>
              </div>

              {/* Séparateur vertical */}
              <div className="border-l border-gray-500"></div>

              {/* Colonne des catégories */}
              <div className="grid grid-cols-3 gap-2 py-9 w-2/3">
                <Link href="/films/action" className="text-md hover:text-gray-300">
                  Action
                </Link>
                <Link href="/films/scifi" className="text-md hover:text-gray-300">
                  Sci-Fi
                </Link>
                <Link href="/films/music" className="text-md hover:text-gray-300">
                  Musique
                </Link>
                <Link href="/films/adventure" className="text-md hover:text-gray-300">
                  Aventure
                </Link>
                <Link href="/films/supernatural" className="text-md hover:text-gray-300">
                  Surnaturel
                </Link>
                <Link href="/films/sports" className="text-md hover:text-gray-300">
                  Sport
                </Link>
                <Link href="/films/comedy" className="text-md hover:text-gray-300">
                  Comédie
                </Link>
                <Link href="/films/romance" className="text-md hover:text-gray-300">
                  Romance
                </Link>
                <Link href="/films/thriller" className="text-md hover:text-gray-300">
                  Thriller
                </Link>
                <Link href="/films/drama" className="text-md hover:text-gray-300">
                  Drame
                </Link>
                <Link href="/films/horror" className="text-md hover:text-gray-300">
                  Horreur
                </Link>
                <Link href="/films/life" className="text-md hover:text-gray-300">
                  Tranche de vie
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="/about" className="hover:text-gray-300">
          À Propos du site
        </Link>
        <Link href="/subscription" className="hover:text-gray-300">
          Abonnement
        </Link>
        </nav>
      </div>

      
      <div className="float-end">
        <i className={`px-6 text-xl cursor-pointer ${isHovered ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}`}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></i>
        {/* Bouton de connexion */}
        <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
          Se Connecter
        </button>
      </div>
    </header>
  );
};

export default Header;
