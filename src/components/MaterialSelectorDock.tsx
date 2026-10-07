"use client";

import React from "react";
import { useGallery } from "@/context/GalleryContext";

export function MaterialSelectorDock() {
  const { activeMaterial, setActiveMaterial, setCursorLabel } = useGallery();

  const options: Array<{ id: "marble" | "granite" | "stone"; label: string }> = [
    { id: "marble", label: "MARBLE" },
    { id: "granite", label: "GRANITE" },
    { id: "stone", label: "STONE" },
  ];

  return (
    <aside
      aria-label="Atmosphere selector"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--border-color)] px-4 py-2.5 shadow-2xl transition-all duration-700"
    >
      <div className="flex items-center space-x-4 md:space-x-6 text-[10px] font-mono tracking-[0.25em] uppercase">
        <span className="text-[var(--text-muted)] hidden sm:inline">ATMOSPHERE:</span>

        {options.map((opt) => {
          const isActive = activeMaterial === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveMaterial(opt.id)}
              onMouseEnter={() => setCursorLabel("SHIFT")}
              onMouseLeave={() => setCursorLabel(null)}
              className={`py-0.5 transition-all duration-500 relative ${
                isActive
                  ? "text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{opt.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-current" />
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
