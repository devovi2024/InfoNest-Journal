import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const newsItems = [
  {
    img: "https://via.placeholder.com/150?text=Image+1",
    title: "The home decorations document: photograph of an",
    desc: "People have been infected",
  },
  {
    img: "https://via.placeholder.com/150?text=Image+2",
    title: "U.S. Response subash says he will label regions by risk of...",
    desc: "People have been infected",
  },
  {
    img: "https://via.placeholder.com/150?text=Image+3",
    title: "Stimul package will transform the government fundamentally.",
    desc: "People have been infected",
  },
  {
    img: "https://via.placeholder.com/150?text=Image+1",
    title: "The home decorations document: photograph of an",
    desc: "People have been infected",
  },
  {
    img: "https://via.placeholder.com/150?text=Image+2",
    title: "U.S. Response subash says he will label regions by risk of...",
    desc: "People have been infected",
  },
  {
    img: "https://via.placeholder.com/150?text=Image+3",
    title: "Stimul package will transform the government fundamentally.",
    desc: "People have been infected",
  },
];

const NewsCarousel = () => {
  return (
    <div className="w-full px-4 py-6 bg-base-100">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
              <figure>
                <img src={item.img} alt="News" className="h-40 w-full object-cover" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
