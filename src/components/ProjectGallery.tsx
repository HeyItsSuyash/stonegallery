"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowUpRight, X, MapPin, Calendar, Layers, CheckCircle2 } from "lucide-react";

export function ProjectGallery() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-28 md:py-44 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <span>02 / EDITORIAL PORTFOLIO</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase">
              STONE IN <br />
              <span className="italic font-normal">CONTEXT.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
            REAL RESIDENCES AND ARCHITECTURAL COMMISSIONS ACROSS LUCKNOW AND UTTAR PRADESH.
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {PROJECTS.map((project, idx) => {
            // Asymmetric layout logic for architecture magazine feel
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setCursor("view", "CASE STUDY")}
                onMouseLeave={resetCursor}
                className={`${colSpan} group cursor-pointer border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 shadow-[var(--slab-shadow)] transition-all duration-500 hover:-translate-y-1.5`}
              >
                {/* Project Image */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isLarge ? "aspect-[16/10]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Corner tag */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-white text-[9px] font-mono tracking-widest uppercase">
                    {project.clientType}
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="mt-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-2">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 inline" />
                      <span>{project.location}</span>
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl md:text-3xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-3 text-xs text-[var(--text-secondary)] font-mono tracking-wider uppercase">
                    <span className="text-[var(--text-muted)] block text-[9px]">MATERIAL INSTALLED:</span>
                    <span>{project.material}</span>
                  </div>

                  <p className="mt-4 text-xs text-[var(--text-secondary)] font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)]">
                    <span>EXPLORE SPECIFICATION</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="pr-12">
              <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
                <span>{selectedProject.location}</span>
                <span>·</span>
                <span>{selectedProject.year}</span>
              </div>
              <h2 className="font-serif-luxury text-3xl md:text-5xl text-[var(--text-primary)] uppercase">
                {selectedProject.title}
              </h2>
            </div>

            {/* Main Showcase Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden my-8 border border-[var(--border-subtle)]">
              <Image
                src={selectedProject.heroImage}
                alt={selectedProject.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Story & Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
              <div className="md:col-span-7">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] mb-2">
                  ARCHITECTURAL NARRATIVE
                </h4>
                <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-6 p-4 bg-[var(--bg-secondary)] border-l-2 border-[var(--accent)] text-xs text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] block mb-1">
                    STONE GALLERY CURATOR NOTE:
                  </span>
                  {selectedProject.curatorNotes}
                </div>
              </div>

              <div className="md:col-span-5 space-y-4 text-xs font-mono">
                <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="text-[9px] uppercase text-[var(--text-muted)] block">
                    MATERIAL SPECIFIED
                  </span>
                  <span className="text-[var(--text-primary)] font-semibold mt-1 block">
                    {selectedProject.material}
                  </span>
                </div>

                <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="text-[9px] uppercase text-[var(--text-muted)] block">
                    SLAB SELECTION USED
                  </span>
                  <span className="text-[var(--text-primary)] font-semibold mt-1 block">
                    {selectedProject.slabUsed}
                  </span>
                </div>

                <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="text-[9px] uppercase text-[var(--text-muted)] block">
                    SPATIAL APPLICATION
                  </span>
                  <span className="text-[var(--text-primary)] font-semibold mt-1 block">
                    {selectedProject.application}
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Details Carousel/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-color)]">
              {selectedProject.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--border-subtle)]">
                  <Image
                    src={img}
                    alt={`${selectedProject.title} detail ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Inquire CTA */}
            <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
                PLANNING A SIMILAR RESIDENTIAL COMMISSION?
              </span>
              <a
                href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20interested%20in%20the%20stone%20treatment%20used%20in%20${encodeURIComponent(
                  selectedProject.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                REQUEST PROJECT STONE SPECIFICATIONS →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
