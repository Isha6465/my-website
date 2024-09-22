
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-slate-200">
      {/* Hero Section */}
      <div className="relative h-80">
        <Image
          src="/hero-section.png"
          alt="Hero Image"
          fill // Use fill for layout
          style={{ objectFit: "cover" }} 
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/feature-work-1.jpg"
              alt="Service 1"
              width={64}
              height={64}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">Service 1</h2>
              <p className="mt-2 text-gray-600">Description for service 1.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/feature-work-2.jpg"
              width={64}
              height={64}
              alt="Service 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">Service 2</h2>
              <p className="mt-2 text-gray-600">Description for service 2.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/feature-work-3.jpg"
              width={64}
              height={64}
              alt="Service 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">Service 3</h2>
              <p className="mt-2 text-gray-600">Description for service 3.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
