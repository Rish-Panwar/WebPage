"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../data/confetti.json";
import MagicButton from "./magic-button";
import { Copy } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={cn("grid w-full mx-auto max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(180px,auto)] lg:auto-rows-[14rem] gap-4 sm:gap-6 px-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("panwarrishabh00@gmail.com");
    setCopied(true);
  };

  const lottieOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between rounded-3xl border border-white/10 transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      {/* Background Image */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt="grid-item-bg"
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        {/* Spare Overlay Image */}
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt="overlay"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {/* Background Gradient for ID 6 */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold pointer-events-none" />
          </BackgroundGradientAnimation>
        )}
        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "relative z-10 group-hover/bento:translate-x-2 transition duration-200 flex flex-col md:h-full min-h-40 px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-inter text-sm md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3]">
            {description}
          </div>

          <div className="font-inter font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>

          {/* Tech Stack Card */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* Left List */}
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] opacity-50 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg bg-[#10132e]" />
              </div>
              {/* Right List */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg bg-[#10132e]" />
                {["Tailwind", "Motion", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] opacity-60 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copy Email Button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={lottieOptions} height={200} width={200} />
              </div>

              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                icon={<Copy />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
