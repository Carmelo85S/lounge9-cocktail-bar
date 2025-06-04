import { motion } from 'framer-motion';

interface ImageGridProps {
  images: string[];
}

const ImageGrid = ({ images }: ImageGridProps) => (
  <motion.div 
    className="grid grid-cols-2 gap-6"
    initial="hidden"
    whileInView="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    viewport={{ once: true }}
  >
    {images.map((img, i) => (
      <motion.img
        key={i}
        src={img}
        alt={`drink-img-${i}`}
        className="w-full rounded-xl shadow-md object-cover h-[300px]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: i * 0.9 }}
      />
    ))}
  </motion.div>
);

export default ImageGrid;
