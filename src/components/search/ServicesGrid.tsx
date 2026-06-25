"use client";

import { POPULAR_SERVICES } from "@/types";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {POPULAR_SERVICES.map((svc) => (
        <button
          key={svc.id}
          className="flex flex-col items-center gap-1 py-3 px-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] hover:border-[var(--accent)] transition-colors cursor-pointer"
        >
          <span className="text-2xl">{svc.icon}</span>
          <span className="text-[10px] font-medium text-[var(--text-secondary)] leading-tight text-center">
            {svc.label}
          </span>
        </button>
      ))}
    </div>
  );
}
