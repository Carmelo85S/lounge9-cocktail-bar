import SectionHeader from './SectionHeader';
import InfoBlock from './InfoBlock';
import ContactInfo from './ContactInfo';
import ImageGrid from './ImageGrid';

import image1 from '../../assets/cocktails.webp';
import image2 from '../../assets/drinks-on-table.webp';
import image3 from '../../assets/drinks-top.webp';
import image4 from '../../assets/pouring.webp';

const About = () => {
  return (
    <section id="about" className="bg-cream text-night py-24">
      <SectionHeader 
        title="Welcome to Lounge9" 
        subtitle="Where every moment is crafted to perfection"
      />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <InfoBlock title="About Us">
            <p>
              Nestled within the elegant Grand Plaza Hotel, Lounge
              <span className="text-amber">9</span> Hour offers a sophisticated yet relaxed atmosphere...
            </p>
            <p>
              Whether you're unwinding after a day of meetings with our signature cocktails...
            </p>
          </InfoBlock>

          <ContactInfo />
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <ImageGrid images={[image2, image3, image1, image4]} />
        </div>
      </div>
    </section>
  );
};

export default About;
