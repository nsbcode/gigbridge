import React from "react";
import herodesktop from "../../assets/605shots_so.png";
import heromobile from "../../assets/256shots_so.png";
import herotablet from "../../assets/695shots_so.png";
import { Button } from "../../components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center  items-center text-center">
      <div className="container px-4 flex gap-6 flex-col items-center text-center py-16 justify-center">
        <h1 className="md:text-6xl text-5xl  font-bold tracking-tighter">
          Find Work, <br />
          Post Jobs, Get Things Done!
        </h1>
        <p className="max-w-xl">
          GigBridge connects freelancers and employers in one seamless platform.{" "}
          Whether you're looking for work or talent, we've got you covered.
        </p>

        <div className="flex gap-4">
          <Button>Get started</Button>
          <button className="py-2 px-6 border-2   border-black/15 rounded-3xl z-10 hover:bg-black hover:text-white cursor-pointer">Post a Gig</button>
        </div>

        <picture className="max-w-max">
          {/* Load the desktop image for large screens */}
          <source media="(min-width:1024px)" srcSet={herodesktop} />

          {/* Load the tablet image for medium screens */}
          <source media="(min-width:768px)" srcSet={herotablet} />

          {/* Load the mobile image for smaller screens */}
          <source media="(max-width:767px)" srcSet={heromobile} />

          {/* Fallback image for browsers that don't support <picture> */}
          <img className="lg:-mt-[8rem]" src={heromobile} alt="Flowers" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
