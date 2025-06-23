"use client";
import data from "../../data/artists.json";

export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Artist Submissions Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
            <tr>
                <th className="px-4 py-2 border font-semibold">Name</th>
                <th className="px-4 py-2 border font-semibold">Category</th>
                <th className="px-4 py-2 border font-semibold">Location</th>
                <th className="px-4 py-2 border font-semibold">Fee</th>
                <th className="px-4 py-2 border font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((artist) => (
              <tr key={artist.id} className="text-center">
                <td className="px-4 py-2 border">{artist.name}</td>
                <td className="px-4 py-2 border">{artist.category}</td>
                <td className="px-4 py-2 border">{artist.location}</td>
                <td className="px-4 py-2 border">{artist.price}</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
