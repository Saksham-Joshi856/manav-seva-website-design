import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Images
import careService1 from "@/assets/care-service-1.jpg";
import careService2 from "@/assets/care-service-2.jpg";
import careService3 from "@/assets/care-service-3.jpg";
import careService4 from "@/assets/care-service-4.jpg";
import aboutTeam from "@/assets/about-team.jpg";

// Videos
import careServiceVideo from "@/assets/videos/care-service.mp4";
import enjoymentVideo from "@/assets/videos/enjoyment.mp4";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: careServiceVideo,
    description: "Daily care and assistance provided to our elderly residents",
  },
  {
    type: "video",
    src: enjoymentVideo,
    description: "Moments of joy, laughter, and togetherness at Manav Seva Chatra",
  },
  {
    type: "image",
    src: careService1,
    description: "Personal care and support for senior citizens",
  },
  {
    type: "image",
    src: careService2,
    description: "Nutritious meals prepared with love and care",
  },
  {
    type: "image",
    src: careService3,
    description: "Regular medical check-ups and health monitoring",
  },
  {
    type: "image",
    src: careService4,
    description: "Social interaction and recreational activities",
  },
  {
    type: "image",
    src: aboutTeam,
    description: "Our dedicated team working with compassion and commitment",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <ScrollReveal>
        <section className="section-padding section-green-light">
          <div className="container-narrow mx-auto text-center">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Our Gallery
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Care, Compassion & Happiness
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real moments from Manav Seva Chatra showcasing daily care,
              joyful activities, and the people who make it all possible.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery Grid */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() =>
                    item.type === "image" && setSelectedImage(item.src)
                  }
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-black">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.description}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card text-foreground hover:bg-muted"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
