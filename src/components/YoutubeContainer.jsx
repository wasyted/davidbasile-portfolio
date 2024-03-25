'use client'

import { useState } from "react"

export default function YoutubeContainer() {
  const [selectedVideo, setSelectedVideo] = useState("https://www.youtube.com/embed/Oov8LWfc-iI?si=Z5u6TE5hlQTZNKpE");
  return (
    <>
      <div className="flex items-end text-center justify-between pt-8 pb-8">
        <button 
          onClick={()=>{setSelectedVideo("https://www.youtube.com/embed/Oov8LWfc-iI?si=Z5u6TE5hlQTZNKpE")}} 
          className={`flex-1 ${selectedVideo === "https://www.youtube.com/embed/Oov8LWfc-iI?si=Z5u6TE5hlQTZNKpE" ? "text-2xl md:text-6xl" : "text-md md:text-2xl opacity-75"} font-bold max-w-max`}>
          Nos tomaron la tarde
        </button>
        <button 
          onClick={()=>{setSelectedVideo("https://www.youtube.com/embed/q9I5XCdV_Bc?si=Kn4HSd2l8attBW73")}} 
          className={`flex-1 ${selectedVideo === "https://www.youtube.com/embed/q9I5XCdV_Bc?si=Kn4HSd2l8attBW73" ? "text-2xl md:text-6xl" : "text-md md:text-2xl opacity-75"} font-bold max-w-max`}>
          Paraíso Fiscal
        </button>
        <button 
          onClick={()=>{setSelectedVideo("https://www.youtube.com/embed/ht45htB5qDQ?si=1IkQhwI0ivQHwfvB")}} 
          className={`flex-1 ${selectedVideo === "https://www.youtube.com/embed/ht45htB5qDQ?si=1IkQhwI0ivQHwfvB" ? "text-2xl md:text-6xl" : "text-md md:text-2xl opacity-75"} font-bold max-w-max`}>
          Soñé que volaba
        </button>
      </div>
      <div className="relative aspect-video max-w-full">
        <div className="aspect-w-16 aspect-h-9"> {/* Maintain aspect ratio of 16:9 */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={selectedVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  )
}