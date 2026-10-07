"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MATERIAL_FAMILIES, MaterialFamily } from "@/data/editorial";

type MaterialId = "marble" | "granite" | "stone";

interface GalleryContextType {
  activeMaterial: MaterialId;
  materialData: MaterialFamily;
  setActiveMaterial: (id: MaterialId) => void;
  cursorLabel: string | null;
  setCursorLabel: (label: string | null) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [activeMaterial, setActiveMaterialState] = useState<MaterialId>("granite");
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-material", activeMaterial);
  }, [activeMaterial]);

  const setActiveMaterial = (id: MaterialId) => {
    setActiveMaterialState(id);
  };

  return (
    <GalleryContext.Provider
      value={{
        activeMaterial,
        materialData: MATERIAL_FAMILIES[activeMaterial],
        setActiveMaterial,
        cursorLabel,
        setCursorLabel,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}
