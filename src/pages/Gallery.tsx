import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import careService1 from "@/assets/care-service-1.jpg";
import careService2 from "@/assets/care-service-2.jpg";
import careService3 from "@/assets/care-service-3.jpg";
import careService4 from "@/assets/care-service-4.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-elderly-care.jpg";

const galleryImages = [
  { src: gallery1, alt: "Diwali celebration at the home", category: "Celebrations" },
  { src: gallery2, alt: "Morning yoga session", category: "Activities" },
  { src: gallery3, alt: "Birthday celebration", category: "Celebrations" },
  { src: gallery4, alt: "Art and craft activities", category: "Activities" },
  { src: careService1, alt: "Personal care assistance", category: "Daily Care" },
  { src: careService2, alt: "Nutritious meals", category: "Daily Care" },
  { src: careService3, alt: "Medical check-up", category: "Healthcare" },
  { src: careService4, alt: "Social activities", category: "Activities" },
  { src: aboutTeam, alt: "Our residents and staff", category: "Community" },
  { src: heroImage, alt: "Garden gathering", category: "Community" },
];

const categories = ["All", "Celebrations", "Activities", "Daily Care", "Healthcare", "Community"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <div className="container-narrow mx-auto text-center">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            Our Gallery
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Moments of Joy & Care
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into daily life at Manav Seva Chatra – celebrations, activities, 
            and moments of happiness with our beloved residents.
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Note: These are placeholder images. Real photos will be added soon.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-narrow mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={`${image.alt} - Placeholder image`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{image.alt}</p>
                <span className="text-xs text-primary">{image.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
            alt="Gallery image"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
