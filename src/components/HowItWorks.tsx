'use client'

import { PhoneIcon, CalendarIcon, WrenchScrewdriverIcon, StarIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Book a Service',
    description: 'Schedule your service through our website or mobile app',
    icon: PhoneIcon,
  },
  {
    title: 'Choose Time',
    description: 'Select a convenient time slot for your service',
    icon: CalendarIcon,
  },
  {
    title: 'Get Service',
    description: 'Our certified mechanic arrives at your location',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Rate & Review',
    description: 'Share your experience and help others',
    icon: StarIcon,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple and convenient process to get your vehicle serviced
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="h-0.5 w-16 bg-blue-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 