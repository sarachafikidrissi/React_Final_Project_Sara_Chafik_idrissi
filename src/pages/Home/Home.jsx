import React from "react";
import Carousel1 from "./Components/Carousel1";
import Gallery from "./Components/Gallery";
import BlogSection from "./Components/Blog";
import Random from "./Components/Random";
import FollowUs from "./FollowUs";
import Carousel2 from "./Components/Carousel2";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-[8vh]">
      <Carousel1 />

      <Gallery />
      <Carousel2 />
      <Random />

      <BlogSection />

      <FollowUs />
    </div>
  );
};

export default Home;
