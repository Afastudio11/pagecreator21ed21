import { ImageOff } from "lucide-react";
import photo1 from "@assets/IMG_7781_1766158513942.PNG";
import photo2 from "@assets/IMG_6429_1766158513942.jpg";
import photo3 from "@assets/IMG_6437_1766158513943.jpg";
import photo4 from "@assets/IMG_7780_1766158513943.PNG";
import photo5 from "@assets/event_photo_5_1766333187446.jpg";
import photo6 from "@assets/event_photo_6_1766333187446.jpg";

const photos = [
  {
    id: 1,
    src: photo1,
    alt: "Event Photo 1 - School of Creative Industries",
    title: "Workshop Session"
  },
  {
    id: 2,
    src: photo2,
    alt: "Event Photo 2 - Speaker Presentation",
    title: "Presentation"
  },
  {
    id: 3,
    src: photo3,
    alt: "Event Photo 3 - Panel Discussion",
    title: "Panel Discussion"
  },
  {
    id: 4,
    src: photo4,
    alt: "Event Photo 4 - Audience",
    title: "Audience Engagement"
  },
  {
    id: 5,
    src: photo5,
    alt: "Event Photo 5 - Masterclass Session",
    title: "Masterclass"
  },
  {
    id: 6,
    src: photo6,
    alt: "Event Photo 6 - Speaker Presentation",
    title: "Expert Speaker"
  }
];

export function PhotoGallery() {
  return (
    <div className="bg-black py-16 md:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              {photo.src ? (
                <>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold">{photo.title}</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                  <ImageOff className="w-12 h-12 text-gray-600 mb-3" />
                  <p className="text-gray-400 text-sm font-medium text-center px-2">
                    {photo.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
