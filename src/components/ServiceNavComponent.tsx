import React from "react";

export default function ServiceNavComponent() {
  // Service data array
  const services = [
    {
      title: "Registration",
      subtitle: "Streamlined Registration Process",
      description: "Efficiently register refugees with our user-friendly interface, capturing essential information and ensuring data accuracy.",
      image: "https://i.pinimg.com/736x/1b/7b/b8/1b7bb80a9a4505335d758c693bba4ffc.jpg"
    },
    {
      title: "Aid Distribution",
      subtitle: "Effective Aid Distribution",
      description: "Manage and distribute aid resources effectively, ensuring timely assistance reaches those in need.",
      image: "https://i.pinimg.com/736x/6b/6b/d9/6b6bd9c50d0a4b67889f35c1d5a84249.jpg"
    },
    {
      title: "Case Management",
      subtitle: "Comprehensive Case Management",
      description: "Track and manage individual refugee cases with detailed records, progress updates, and support history.",
      image: "https://i.pinimg.com/736x/a3/63/97/a36397635f905f041e5108bd47bb4371.jpg"
    },
    {
      title: "Reporting",
      subtitle: "Insightful Reporting and Analytics",
      description: "Generate comprehensive reports on refugee demographics, aid distribution, and case outcomes for informed decision-making.",
      image: "https://i.pinimg.com/736x/6b/6b/d9/6b6bd9c50d0a4b67889f35c1d5a84249.jpg"
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="w-[1200px] mx-auto mt-20">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover lg:w-96 lg:h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{service.title}</h2>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.subtitle}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}