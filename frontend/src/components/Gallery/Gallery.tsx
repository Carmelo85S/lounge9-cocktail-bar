// src/components/Gallery.jsx
export default function Gallery() {
  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 1' },
    { id: 2, src: 'https://images.pexels.com/photos/4485372/pexels-photo-4485372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 2' },
    { id: 3, src: 'https://images.pexels.com/photos/9002890/pexels-photo-9002890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 3' },
    { id: 4, src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 4' },
    { id: 5, src: 'https://images.pexels.com/photos/3771824/pexels-photo-3771824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 5' },
    { id: 6, src: 'https://images.pexels.com/photos/7494029/pexels-photo-7494029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Gallery image 6' },
  ];

  return (
    <section id="gallery"className="bg-cream py-12">
      <div className="container">
        <h2 className="text-3xl font-serif text-night mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
