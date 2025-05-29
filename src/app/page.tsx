import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                AutoServices
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
              <Link href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</Link>
              <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Mobile Mechanic Services
              </h1>
              <p className="text-xl mb-8">
                Quality repairs at your doorstep. Fast, reliable, and affordable mobile mechanic services.
              </p>
              <div className="space-x-4">
                <Link href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                  Book Now
                </Link>
                <Link href="#services" className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/hero-image.jpg"
                  alt="Mobile mechanic service"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
