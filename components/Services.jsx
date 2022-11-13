import React from 'react';
import ServicesCard from './ServicesCard';
import services_data from '../data/services_data';

const Services = () => {
  return (
    <div className="mt-20">
      <div className="Container mx-auto">
        {/* Text */}
        <div className="mb-10">
          <h1 className="text-4xl border-b border-cyan-500 max-w-max pb-2 mb-5">
            Services I Offer
          </h1>
          <p className="tracking-wide mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam quia necessitatibus consectetur repellat reiciendis,
            laboriosam harum planecessitatibus consectetur repellat
            reiciendis, laboriosam harum pla
          </p>
          <p className="tracking-wide mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-5  items-center justify-between">
          {services_data.map((service) => {
            return (
              <ServicesCard
                key={service.id}
                {...service}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
