"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MATERIALS, MaterialCategory } from "@/data/materials";

interface MaterialThemeContextType {
  activeMaterial: MaterialCategory;
  hoveredMaterial: MaterialCategory | null;
  isTransitioning: boolean;
  transitionStage: number; // 0 to 1
  setActiveMaterialById: (id: string) => void;
  setHoveredMaterialById: (id: string | null) => void;
}

const MaterialThemeContext = createContext<MaterialThemeContextType | undefined>(
  undefined
);

export function MaterialThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMaterial, setActiveMaterial] = useState<MaterialCategory>(
    MATERIALS[0]
  );
  const [hoveredMaterial, setHoveredMaterial] =
    useState<MaterialCategory | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionStage, setTransitionStage] = useState<number>(0);

  // Apply data-material attribute to document root
  useEffect(() => {
    const effectiveTheme = hoveredMaterial ? hoveredMaterial.id : activeMaterial.id;
    document.documentElement.setAttribute("data-material", effectiveTheme);
  }, [activeMaterial, hoveredMaterial]);

  const setActiveMaterialById = (id: string) => {
    const found = MATERIALS.find((m) => m.id === id);
    if (!found || found.id === activeMaterial.id) return;

    setIsTransitioning(true);
    setTransitionStage(0.2);

    const timer1 = setTimeout(() => {
      setTransitionStage(0.6);
      setActiveMaterial(found);
    }, 400);

    const timer2 = setTimeout(() => {
      setTransitionStage(1);
    }, 800);

    const timer3 = setTimeout(() => {
      setIsTransitioning(false);
      setTransitionStage(0);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const setHoveredMaterialById = (id: string | null) => {
    if (!id) {
      setHoveredMaterial(null);
    } else {
      const found = MATERIALS.find((m) => m.id === id);
      setHoveredMaterial(found || null);
    }
  };

  return (
    <MaterialThemeContext.Provider
      value={{
        activeMaterial,
        hoveredMaterial,
        isTransitioning,
        transitionStage,
        setActiveMaterialById,
        setHoveredMaterialById,
      }}
    >
      {/* Subtle Material Atmosphere Transition Notification */}
      {isTransitioning && (
        <div
          className="fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor:
              transitionStage < 0.6
                ? "rgba(18, 19, 21, 0.4)"
                : "rgba(18, 19, 21, 0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="text-center transform transition-all duration-500">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-300 block mb-2 font-mono">
              ATMOSPHERE
            </span>
            <span className="font-serif-luxury text-4xl md:text-5xl text-white tracking-widest uppercase">
              {activeMaterial.name}
            </span>
            <div className="w-12 h-[1px] bg-white/40 mx-auto mt-3" />
          </div>
        </div>
      )}

      {children}
    </MaterialThemeContext.Provider>
  );
}

export function useMaterialTheme() {
  const context = useContext(MaterialThemeContext);
  if (!context) {
    throw new Error(
      "useMaterialTheme must be used within a MaterialThemeProvider"
    );
  }
  return context;
}
