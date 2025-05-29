'use client'

import { WrenchIcon, CogIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'General Repairs',
    description: 'Comprehensive repair services for all makes and models',
    icon: WrenchIcon,
  },
  {
    title: 'Engine Service',
    description: 'Expert engine diagnostics and repair services',
    icon: CogIcon,
  },
  {
    title: 'Electrical Systems',
    description: 'Complete electrical system diagnostics and repairs',
    icon: BoltIcon,
  },
  {
    title: 'Preventive Maintenance',
    description: 'Regular maintenance to keep your vehicle running smoothly',
    icon: ShieldCheckIcon,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional mobile mechanic services for all your automotive needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 