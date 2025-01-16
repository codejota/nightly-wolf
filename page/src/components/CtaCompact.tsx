"use client";

import Link from "next/link";

import React from "react";

import { ArrowRight, CircleDollarSign } from "lucide-react";

import Pill from "@/components/pill/Pill";

const CTACompact = () => {
  return (
    <div className="py- flex justify-center">
      <Link href="/signup">
        <Pill className="px-4 py-2 w-fit via-gray-800/10 to-card backdrop-blur-sm backdrop-brightness-0">
          <CircleDollarSign className="h-4 text-violet-400" />
          <b className="text-white font-poppins"> Get Started </b>
          <ArrowRight className="ml-2 h-5 w-5 text-white animate-[pointing_1.5s_ease-in-out_infinite]" />
        </Pill>
      </Link>

      <style jsx global>{`
        @keyframes pointing {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
      `}</style>
    </div>
  );
};

export default CTACompact;
