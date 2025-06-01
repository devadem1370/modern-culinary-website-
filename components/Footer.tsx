import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-[150px]  bg-white/10 px-[100px] py-20">
      <div className="flex justify-between">
        {/* Column 1 - Logo and Description */}
        <div className="max-w-[280px]">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/icons/logo.svg" alt="Savory logo" width={42} height={42} />
            <span className="text-2xl font-bold">Savory</span>
          </div>
          <p className="p-base">
            Your ultimate destination for culinary excellence. Discover, create, and share amazing recipes.
          </p>
        </div>

        {/* Column 2 - Get in Touch */}
        <div className="max-w-[320px]">
          <h3 className="text-white text-xl font-semibold mb-8">Get in Touch</h3>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60"
            />
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/icons/facebook-black.svg" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/icons/twitter-black.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/icons/instagram-black.svg" alt="Instagram" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-8">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="p-base hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="p-base hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/recipes" className="p-base hover:text-white transition-colors">Recipes</Link></li>
            <li><Link href="/blog" className="p-base hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Column 4 - Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-8">Services</h3>
          <ul className="space-y-4">
            <li><Link href="/meal-planning" className="p-base hover:text-white transition-colors">Meal Planning</Link></li>
            <li><Link href="/recipe-builder" className="p-base hover:text-white transition-colors">Recipe Builder</Link></li>
            <li><Link href="/photography" className="p-base hover:text-white transition-colors">Food Photography</Link></li>
            <li><Link href="/nutrition" className="p-base hover:text-white transition-colors">Nutrition Guide</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/20">
        <p className="p-base text-center">© 2024 Savory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;