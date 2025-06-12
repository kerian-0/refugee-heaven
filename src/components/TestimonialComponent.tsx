import React from "react";

export default function TestimonialComponent() {
  return (
    <div className="px-4 py-6 max-w-[1200px] mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-info">Testimonials</h3>
      <div className="relative carousel carousel-center rounded-box">
       
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {[
  {
    text: "RefugeeConnect helped me find a safe place to live and a job that changed my journey to rebuild my life.",
    author: "Ahmed Al-Farsi (Syrian refugee, resettled 2021)",
    image: "https://i.pinimg.com/736x/d5/94/e6/d594e6b67ccd225734ae57a7aaad3711.jpg"
  },
  {
    text: "The support I received from RefugeeConnect was invaluable in my journey.",
    author: "Fatima Nkosi (Congolese refugee, resettled 2020)",
    image: "https://i.pinimg.com/736x/13/0e/d3/130ed302ac39d67c2f937659dbc55867.jpg"
  },
  {
    text: "Thanks to RefugeeConnect, I now have access to healthcare and a supportive community.",
    author: "Mariana Petrica (Ukrainian refugee, resettled 2022)",
    image: "https://i.pinimg.com/736x/56/8f/1b/568f1b300dff7201725e5038dc016d38.jpg"
  },
  {
    text: "RefugeeConnect provided language classes and education resources that empowered me to start a new career path.",
    author: "Khadija Abdi (Somali refugee, resettled 2019)",
    image: "https://i.pinimg.com/736x/1b/7b/b8/1b7bb80a9a4505335d758c693bba4ffc.jpg"
  },
  {
    text: "With RefugeeConnect's guidance, I reunited with my family and secured permanent residency in my new home.",
    author: "Carlos Méndez (Venezuelan refugee, resettled 2018)",
    image: "https://i.pinimg.com/736x/6b/6b/d9/6b6bd9c50d0a4b67889f35c1d5a84249.jpg"
  },
  {
    text: "Their legal aid and counseling services gave me hope and stability when I felt lost.",
    author: "Rohullah Nazari (Afghan refugee, resettled 2021)",
    image: "https://i.pinimg.com/736x/a3/63/97/a36397635f905f041e5108bd47bb4371.jpg"
  },
  {
    text: "Through RefugeeConnect, I gained vocational training and built friendships that helped me heal and thrive.",
    author: "Aye Chan (Rohingya refugee, resettled 2017)",
    image: "https://i.pinimg.com/736x/35/dc/4d/35dc4dc092e9b560b7eb231bf50894ab.jpg"
  }
].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(100%/3-1rem)] card bg-base-100 shadow-md"
            >
              <figure className="px-6 pt-6">
                <img
                  src={src.image}
                  alt="Testimonial"
                  className="rounded-xl object-cover h-80 w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{src.author}</h2>
                <p>
{src.text}                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
