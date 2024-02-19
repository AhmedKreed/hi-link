"use client";
import { useState } from "react";
import CampSite from "../components/CampSite";

import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Camp = () => {
  const [slide, setSlide] = useState(true);
  const slideLeft = () => {
    var slider: HTMLElement | null = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 1000;
      setSlide((prev) => !prev);
    }
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 1000;
      setSlide((prev) => !prev);
    }
  };
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {slide ? (
        <IoMdArrowDroprightCircle
          className="fill-green-50 w-20 h-20 absolute mb-[32.5] top-[170px] lg:top-[200px] xl:top-[320px] right-0 cursor-pointer"
          onClick={slideRight}
        />
      ) : (
        <IoMdArrowDropleftCircle
          className="fill-green-50 w-20 h-20 absolute mb-[32.5] top-[170px] lg:top-[200px] xl:top-[320px] cursor-pointer"
          onClick={slideLeft}
        />
      )}
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] "
        id="slider"
      >
        <CampSite
          img={"bg-bg-img-1"}
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          img={"bg-bg-img-2"}
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
