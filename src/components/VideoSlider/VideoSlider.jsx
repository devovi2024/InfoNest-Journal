import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSlider = ({ videoUrls, imageUrl, title, category, date }) => {
  const urls = Array.isArray(videoUrls) ? videoUrls : videoUrls ? [videoUrls] : [];
  const [current, setCurrent] = useState(0);
  const [showContent, setShowContent] = useState(false); 
  const videoRef = useRef(null);

  if (urls.length === 0) {
    return <p className="text-red-500 text-sm">No videos available.</p>;
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % urls.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + urls.length) % urls.length);
  };

  const handleVideoEnd = () => {
    setShowContent(true); 
  };

  return (
    <div className="relative bg-[#f3f3f3] border border-gray-300 rounded-md p-4 max-w-3xl mx-auto shadow-sm">
      {showContent ? (
        <div className="text-center">
          <img
            src={imageUrl}
            alt="Content Image"
            className="w-full max-w-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      ) : (
        // Video Display
        <div className="relative w-full overflow-hidden rounded-md aspect-video bg-black">
          <video
            ref={videoRef}
            key={urls[current]}
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls
            onEnded={handleVideoEnd} // Trigger handleVideoEnd when the video ends
          >
            <source src={urls[current]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {urls.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white border border-gray-300 p-1 rounded-full hover:bg-gray-100 shadow-md"
                aria-label="Previous video"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white border border-gray-300 p-1 rounded-full hover:bg-gray-100 shadow-md"
                aria-label="Next video"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
      )}

      {!showContent && (
        <div className="mt-3 text-sm text-center text-[#565959]">
          Video {current + 1} of {urls.length}
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
