"use client";

import { useState } from "react";
import { ImageUpload } from "@/components/ImageUpload";

type UploadedImage = {
  id: string;
  url: string;
  name: string;
  createdAt: Date;
};

export default function AdminClient({ initialImages }: { initialImages: UploadedImage[] }) {
  const [images, setImages] = useState<UploadedImage[]>(initialImages);

  const handleUploadSuccess = (url: string) => {
    // We optimistically add a temporary image object to the state
    setImages((prev) => [
      { id: Date.now().toString(), url, name: "Just uploaded", createdAt: new Date() },
      ...prev,
    ]);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("Copied URL to clipboard!");
  };

  return (
    <main className="bg-background min-h-screen text-on-background font-body-md py-12 px-gutter max-w-max-container mx-auto">
      <div className="max-w-5xl mx-auto space-y-12">
        <header>
          <h1 className="font-display-md text-display-md text-primary mb-2">Admin Control</h1>
          <p className="text-secondary text-body-lg">Upload and manage images for your website.</p>
        </header>

        <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/30">
          <h2 className="font-headline-sm text-headline-sm mb-6">Upload New Image</h2>
          <ImageUpload onUploadSuccess={handleUploadSuccess} />
        </section>

        <section>
          <h2 className="font-headline-sm text-headline-sm mb-6">Uploaded Images</h2>
          {images.length === 0 ? (
            <p className="text-secondary">No images uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img) => (
                <div key={img.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col">
                  <div className="relative aspect-video bg-surface-container w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={img.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <p className="text-xs truncate text-secondary font-mono bg-surface-container p-2 rounded" title={img.url}>
                      {img.url}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(img.url)}
                      className="text-sm font-label-md bg-primary-container text-on-primary py-2 rounded-lg hover:bg-primary transition-colors text-center"
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
