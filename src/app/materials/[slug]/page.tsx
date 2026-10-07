import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MATERIALS } from "@/data/materials";
import { MaterialDetailView } from "@/components/MaterialDetailView";

export function generateStaticParams() {
  return MATERIALS.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = MATERIALS.find((m) => m.slug === slug);
  if (!material) return { title: "Material Not Found" };

  return {
    title: `${material.name} Slabs & Surfaces | Stone Gallery Lucknow`,
    description: material.narrative,
    openGraph: {
      title: `${material.name} Architectural Slabs | Stone Gallery Lucknow`,
      description: material.atmosphereQuote,
      images: [{ url: material.heroImage }],
    },
  };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = MATERIALS.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  return <MaterialDetailView material={material} />;
}
