"use client";

import { useState, useEffect } from "react";
import { Plant } from "@/data/plants";
import { plants } from "@/data/plants";

export default function Search() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Plant[]>(plants);
  const [selected, setSelected] = useState<Plant | null>(null);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      plants.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.family.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <div className="w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search medicinal plants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md border p-2 mb-4"
      />
      <ul className="space-y-2">
        {filtered.map((p) => (
          <li
            key={p.id}
            className="cursor-pointer p-2 rounded-md hover:bg-muted"
            onClick={() => setSelected(p)}
          >
            <strong>{p.name}</strong> ({p.scientificName})
          </li>
        ))}
      </ul>
      {selected && (
        <div className="mt-6 p-4 border rounded-md">
          <h2 className="text-xl font-semibold">{selected.name}</h2>
          <p>
            <strong>Scientific name:</strong> {selected.scientificName}
          </p>
          <p>
            <strong>Family:</strong> {selected.family}
          </p>
        </div>
      )}
    </div>
  );
}
