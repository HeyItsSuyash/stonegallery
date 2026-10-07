"use client";

import React, { useState } from "react";
import { REVIEWS, GOOGLE_MAPS_META } from "@/data/reviews";
import { Star, ShieldCheck, ExternalLink, MessageSquarePlus, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export function Testimonials() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="reviews"
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-[var(--accent)]" />
              <span>07 / VERIFIED CUSTOMER REVIEWS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              WHAT LUCKNOW <br />
              <span className="italic font-normal">SAYS ABOUT US.</span>
            </h2>
          </div>

          {/* Official Google Score Badge */}
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-sm flex items-center space-x-6 max-w-md">
            <div>
              <div className="flex items-center space-x-1.5 mb-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)]">
                  GOOGLE REVIEWS
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-serif-luxury font-bold text-[var(--text-primary)]">
                  {GOOGLE_MAPS_META.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? "fill-amber-400" : "fill-amber-400/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase block mt-0.5">
                BASED ON {GOOGLE_MAPS_META.totalReviews} LOCAL GOOGLE REVIEWS
              </span>
            </div>

            <div className="h-12 w-[1px] bg-[var(--border-subtle)]" />

            <div>
              <a
                href={GOOGLE_MAPS_META.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider text-[var(--accent)] hover:underline uppercase"
              >
                <span>VERIFY ON MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-7 shadow-sm flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div>
                {/* Material Tag */}
                <div className="py-2.5 px-3 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-primary)] mb-5">
                  <span className="text-[var(--accent)] font-semibold">SELECTED: </span>
                  <span>{rev.materialBought}</span>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-base text-[var(--text-primary)] font-medium">
                      {rev.author}
                    </h4>
                    <div className="flex items-center space-x-1 text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                      <MapPin className="w-3 h-3 text-[var(--accent)]" />
                      <span>{rev.locality}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center space-x-1 text-[9px] font-mono uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{rev.role}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Review Actions */}
        <div className="mt-12 p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif-luxury text-2xl text-[var(--text-primary)] uppercase">
              HAVE YOU VISITED OUR AYODHYA ROAD SHOWROOM?
            </h4>
            <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
              Share your direct experience with our stone yard selection, staff guidance, and delivery service.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={GOOGLE_MAPS_META.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center space-x-2 font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>VIEW ALL GOOGLE REVIEWS →</span>
            </a>

            <a
              href={`${GOOGLE_MAPS_META.mapsUrl}&action=write-review`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-mono tracking-widest uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors flex items-center space-x-2 font-medium"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>WRITE A REVIEW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
