"use client";
import React, { useState } from "react";
import Popup from "../Popup";
import Image from "next/image";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section
        onClick={() => {
          setIsFormOpen(true);
        }}
        className="w-full "
      >
        <Image
          height={2000}
          width={2000}
          src="/inquiry/desktop.webp"
          alt="RO Banner"
          className="w-full hidden md:block h-full md:h-[80vh] object-cover"
        />
        <Image
          src="/inquiry/mobb.webp"
          alt="RO Banner"
          height={2000}
          width={2000}
          className="w-full md:hidden  h-[37vh] object-cover"
        />
      </section>

      {isFormOpen && (
        <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}
