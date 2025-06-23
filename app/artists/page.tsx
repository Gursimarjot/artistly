"use client";
import { useState } from "react";
import data from "../../data/artists.json";
import { motion } from "framer-motion";

export default function Artists() {
  const [filter, setFilter] = useState("");

  const filteredArtists = data.filter((artist) =>
    artist.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>

      {/* Filter Dropdown */}
      <label className="block mb-2">Filter by Category:</label>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 p-2 border rounded dark:bg-gray-800 dark:text-white"
      >
        <option value="">All</option>
        <option value="Singer">Singers</option>
        <option value="Dancer">Dancers</option>
        <option value="DJ">DJs</option>
      </select>

      {/* Artist Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredArtists.map((artist, index) => (
            <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg"
            >
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p>Category: {artist.category}</p>
                <p>Location: {artist.location}</p>
                <p>Price: {artist.price}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Ask for Quote
                </button>
            </motion.div>
        ))}
</div>

    </main>
  );
}
