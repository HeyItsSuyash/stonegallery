"use client";

import React, { useState } from "react";
import { BUSINESS_INFO } from "@/data/business";
import { MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";

export function QuickContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [material, setMaterial] = useState("Granite (Kitchen / Chowkhats)");
  const [area, setArea] = useState("");
  const [locality, setLocality] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Stone Gallery,\nMy Name: ${name || "Customer"}\nPhone: ${phone}\nMaterial Needed: ${material}\nApprox Quantity/Area: ${area || "To be discussed"}\nSite Location in Lucknow: ${locality || "Lucknow"}\n\nI would like to inquire about pricing, slab availability, and showroom visit.`;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 bg-stone-900 text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold block mb-2">
            FAST QUOTE & CONTACT
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl uppercase tracking-tight">
            GET A DIRECT PRICE ESTIMATE.
          </h2>
          <p className="mt-3 text-sm text-stone-300 font-light max-w-xl mx-auto">
            Fill in your project details below to start an instant WhatsApp conversation with our Lucknow showroom team, or call our desk directly.
          </p>
        </div>

        <div className="p-8 sm:p-10 border border-white/10 bg-stone-950 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-900 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-900 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">
                  Material Required *
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-900 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="Granite (Kitchen Countertops)">Granite (Kitchen Countertops)</option>
                  <option value="Granite Door Frames (Chowkhats)">Granite Door Frames (Chowkhats)</option>
                  <option value="Indian or Italian Marble Slabs">Indian or Italian Marble Slabs</option>
                  <option value="Kota Stone Flooring / Paving">Kota Stone Flooring / Paving</option>
                  <option value="Vitrified Floor & Elevation Tiles">Vitrified Floor & Elevation Tiles</option>
                  <option value="Multiple Materials (Full House)">Multiple Materials (Full House)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">
                  Site Locality in Lucknow
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gomti Nagar, Indira Nagar, Chinhat..."
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-900 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">
                Approx Quantity or Specific Requirements
              </label>
              <textarea
                rows={3}
                placeholder="e.g. 450 sq ft Rajasthan Black for kitchen and 8 door chowkhats. Need pricing and delivery schedule."
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 bg-stone-900 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono tracking-widest uppercase font-bold transition-colors flex items-center justify-center space-x-2.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SEND INQUIRY VIA WHATSAPP →</span>
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-stone-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct response from Lucknow showroom team</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
