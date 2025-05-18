import { Clock, MapPin } from 'lucide-react'
import image1 from '../../assets/cocktails.webp'
import image2 from '../../assets/drinks-on-table.webp'
import image3 from '../../assets/drinks-top.webp'
import image4 from '../../assets/pouring.webp'

const About = () => {
  return (
    <section className="bg-cream text-night py-24">
      {/* Hero */}
      <div className="container text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Welcome to Lounge<span className="text-amber">9</span>
        </h2>
        <p className="text-xl font-sans">
          Where every moment is crafted to perfection
        </p>
      </div>

      {/* Main Content: Text Left, Images Right */}
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column - Text */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 font-sans text-base leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-amber-dark">About Us</h3>
          <p>
            Nestled within the elegant Grand Plaza Hotel, Lounge<span className="text-amber">9</span> Hour offers a sophisticated 
            yet relaxed atmosphere for both hotel guests and locals alike. Our bar combines 
            classic charm with contemporary style, creating the perfect setting for any occasion.
          </p>
          <p>
            Whether you're unwinding after a day of meetings with our signature cocktails, enjoying artisanal 
            pizzas with friends, or experiencing one of our vibrant DJ nights, 
            Lounge<span className="text-amber">9</span> Hour promises an unforgettable experience.
          </p>
                {/* Opening Hours & Location */}
            <div className="container mt-24 pt-16 border-t border-amber-light">
                <h3 className="text-3xl font-serif font-bold text-amber-dark mb-10 text-center">
                Opening Hours & Location
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-14 text-lg font-sans">
                {/* Hours */}
                    <div className="flex items-start gap-5">
                        <Clock className="w-6 h-6 text-amber-dark mt-1" />
                        <div className="flex flex-col w-full">
                            <p className="font-semibold">Opening Hours</p>
                            <p>Mon - Sun</p>
                            <p>16:00 - 1:00</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-12 w-px bg-amber-light" />

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-amber-dark mt-1" />
                        <div>
                        <p className="font-semibold">Location</p>
                        <p>Ground Floor, Grand Plaza Hotel</p>
                        <p>42 Park Avenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right column - Images */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-6">
          <img 
            src={image2} 
            alt="Drinks on table" 
            className="w-full rounded-xl shadow-md object-cover h-[300px]" 
          />
          <img 
            src={image3} 
            alt="Top view of drinks" 
            className="w-full rounded-xl shadow-md object-cover h-[300px]" 
          />
          <img 
            src={image1} 
            alt="Colorful cocktails" 
            className="w-full rounded-xl shadow-md object-cover h-[300px]" 
          />
          <img 
            src={image4} 
            alt="Pouring a drink" 
            className="w-full rounded-xl shadow-md object-cover h-[300px]" 
          />
        </div>
      </div>
    </section>
  )
}

export default About
