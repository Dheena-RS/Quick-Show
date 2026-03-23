import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircle } from "lucide-react"; 

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
    const [hasClicked, setHasClicked] = useState(false);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
            <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">Trailers</p>
            
            <div className="relative mt-6 mb-12">
                <BlurCircle top="-100px" right="-100px" />
                <div className="max-w-[960px] mx-auto aspect-video">
                    <iframe
                        className="w-full h-full rounded-2xl"
                        src={`https://www.youtube.com/embed/${(currentTrailer.videoUrl.split('v=')[1] || currentTrailer.videoUrl.split('/').pop()).split('?')[0].split('&')[0]}?autoplay=${hasClicked ? 1 : 0}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

           
            <div className="group grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
                {dummyTrailers.map((trailer) => (
                    <div 
                        key={trailer.image} 
                        className={`relative cursor-pointer transition duration-300 hover:-translate-y-1 ${currentTrailer.videoUrl === trailer.videoUrl ? 'ring-2 ring-primary ring-offset-2 ring-offset-black opacity-100 scale-105' : 'group-hover:opacity-50 hover:!opacity-100'}`} 
                        onClick={() => {
                            setCurrentTrailer(trailer);
                            setHasClicked(true);
                        }}
                    >
                        <img 
                            src={trailer.image} 
                            alt="trailer" 
                            className={`rounded-lg w-full h-40 object-cover ${currentTrailer.videoUrl === trailer.videoUrl ? 'brightness-100 shadow-xl shadow-primary/20' : 'brightness-75'}`}
                        />
                      
                        {currentTrailer.videoUrl !== trailer.videoUrl && (
                            <PlayCircle 
                                strokeWidth={1.6} 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-10 h-10" 
                            />
                        )}
                        {currentTrailer.videoUrl === trailer.videoUrl && (
                            <div className="absolute top-2 right-2 flex items-center gap-1 bg-primary/90 px-2 py-1 rounded text-xs text-white font-medium">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                Playing
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrailersSection;