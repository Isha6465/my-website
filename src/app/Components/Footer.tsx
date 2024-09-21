// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm mb-4">
              We are a leading digital agency focused on providing high-quality
              services to help businesses grow. Our team is dedicated to
              delivering innovative solutions that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Subscription */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:underline text-orange-300">
                Facebook
              </a>
              <a href="#" className="hover:underline text-orange-300">
                Instagram
              </a>
              <a href="#" className="hover:underline text-orange-300">
                Twitter
              </a>
              <a href="#" className="hover:underline text-orange-300">
                LinkedIn
              </a>
            </div>
            <h3 className="text-md font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-lg text-gray-800 mb-2 md:mb-0 md:mr-2"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center pt-20">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
