import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col items-center p-32 bg-slate-300">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8 text-center">
        Vector illustration credit goes to{" "}
        <u className="text-blue-600 font-bold">FreePik</u>. Purple Buzz is
        provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Replace with your team images */}
        <div className="flex justify-center">
          <Image
            src="/team-01.jpg"
            alt="Team Member 1"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/team-02.jpg"
            alt="Team Member 2"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/team-03.jpg"
            alt="Team Member 3"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/team-04.jpg"
            alt="Team Member 4"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
