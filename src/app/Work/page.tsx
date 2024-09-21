// pages/work.tsx
import Image from "next/image";

const Work = () => {
  return (
    <div className="bg-slate-200">
      <div className="bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <div
          className="flex items-center justify-center h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/banner-bg-02.jpg')" }}
        >
          <div className=" p-8 rounded-lg text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to Our Work
            </h1>
            <h3 className="text-2xl text-gray-200 mb-6">
              Elit, sed do eiusmod tempor incididunt
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Vector illustration from{" "}
              <span className="underline">Freepik</span>. Explore our services
              and discover how we can help you grow.
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="text-center mb-12 p-8">
          <h1 className="text-4xl font-light mb-2">Our Work</h1>
          <h3 className="text-2xl font-light mb-4">
            Elit, sed do eiusmod tempor incididunt
          </h3>
          <p className="text-lg font-light mb-4">
            Vector illustration <span className="underline">Freepik</span>.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus.
          </p>

          {/* Work Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden group rounded-lg shadow-lg"
              >
                <Image
                  src={`/our-work-0${index + 1}.jpg`}
                  alt={`Our Work ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4">
                  <h1 className="text-xl font-semibold text-white">
                    Digital Marketing
                  </h1>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex, quisquam at. Maxime debitis ad iste!
                  </p>
                  <a href="#" className="text-blue-400 underline mt-2">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Work Section */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold">Featured Work</h3>
            <h1 className="text-4xl font-semibold mb-4">Transform with Us</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={`/feature-work-${index + 1}.jpg`}
                  alt={`Feature Work ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
