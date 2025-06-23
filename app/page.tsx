"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Singers", href: "/artists?category=Singer" },
    { name: "Dancers", href: "/artists?category=Dancer" },
    { name: "DJs", href: "/artists?category=DJ" },
    { name: "Speakers", href: "/artists?category=Speaker" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-blue-500">Artistly.com</h1>
        <div className="space-x-4 text-sm">
          <Link href="/artists" className="hover:underline">
            Explore
          </Link>
          <Link href="/onboard" className="hover:underline">
            Onboard Artist
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 py-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Discover & Book Performing Artists
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Hire singers, DJs, dancers, speakers & more for your next event.
        </p>
        <Link
          href="/artists"
          className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Explore Artists <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.section>


      {/* Categories Grid */}
      {categories.map((cat, index) => (
      <motion.div
      key={cat.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <Link
        href={cat.href}
        className="block border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition text-center"
      >
        <p className="text-lg font-medium">{cat.name}</p>
      </Link>
      </motion.div>
  ))}
    </main>
  );
}
