import React from 'react'
import SectionTitle from './SectionTitle';
import services from '../data/services';
import ServiceItem from './ServiceItem';

function Services() {
  return (
    <div id='skills' className="py-12 mx-2 lg:mx-16">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(service => (
              <ServiceItem 
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description}
                ></ServiceItem>
            ))}
        </div>
    </div>
  )
}

export default Services