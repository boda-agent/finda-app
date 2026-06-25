"use client";

import { useState } from "react";
import { MOCK_MASTERS } from "@/types";
import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function MasterProfileClient({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<"services" | "reviews">(
    "services"
  );

  if (!id) {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <span className="text-4xl mb-4 block">⏳</span>
          <p className="text-sm text-[var(--text-secondary)]">Завантаження...</p>
        </div>
      </AppLayout>
    );
  }

  const master = MOCK_MASTERS.find((m) => m.id === id);

  if (!master) {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <span className="text-4xl mb-4 block">😕</span>
          <p className="text-sm text-[var(--text-secondary)]">Майстра не знайдено</p>
          <Link href="/catalog" className="inline-block mt-4 text-sm font-semibold bg-[var(--accent)] text-[var(--text)] px-5 py-2 rounded-full">
            Повернутись до каталогу
          </Link>
        </div>
      </AppLayout>
    );
  }

  const initials = master.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Link href="/catalog" className="inline-flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-4 hover:text-[var(--text)] transition-colors">
          ← Назад
        </Link>

        <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-5 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] relative">
              {initials}
              {master.online && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-[3px] border-white rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg font-bold truncate">{master.name}</h1>
                {master.verified && <span className="text-xs">✅</span>}
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                {master.service} · {master.city}, {master.country}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm font-bold text-[var(--accent-dark)]">⭐ {master.rating}</span>
                <span className="text-[11px] text-[var(--text-tertiary)]">({master.reviewCount} відгуків)</span>
                <span className="text-sm font-bold">від {master.minPrice}₴</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {master.languages.map((lang) => (
                  <span key={lang} className="text-[10px] bg-[var(--border-light)] text-[var(--text-secondary)] font-medium px-2.5 py-1 rounded-full">{lang}</span>
                ))}
              </div>
              {master.description && (
                <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">{master.description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border-light)]">
            <span className="text-[10px] font-medium text-[var(--text-tertiary)]">
              {master.workType === "salon" ? "🏢 Приймає в салоні" : master.workType === "home" ? "🏠 Приймає вдома" : "🚗 Виїзд до клієнта"}
            </span>
            {master.distance && (
              <span className="text-[10px] font-medium text-[var(--text-tertiary)]">📍 {master.distance} від вас</span>
            )}
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          <button onClick={() => setActiveTab("services")} className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${activeTab === "services" ? "bg-[var(--accent)] text-[var(--text)]" : "bg-[var(--border-light)] text-[var(--text-secondary)]"}`}>
            💅 Послуги та ціни
          </button>
          <button onClick={() => setActiveTab("reviews")} className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${activeTab === "reviews" ? "bg-[var(--accent)] text-[var(--text)]" : "bg-[var(--border-light)] text-[var(--text-secondary)]"}`}>
            ⭐ Відгуки
          </button>
        </div>

        {activeTab === "services" && (
          <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-xl divide-y divide-[var(--border-light)]">
            {(master.services ?? []).map((svc) => (
              <div key={svc.id} className="flex items-center justify-between px-4 py-3.5">
                <div>
                  <p className="text-sm font-medium">{svc.name}</p>
                  <p className="text-[11px] text-[var(--text-tertiary)]">⏱ {svc.duration} хв</p>
                </div>
                <span className="text-sm font-bold">{svc.price}₴</span>
              </div>
            ))}
            {(!master.services || master.services.length === 0) && (
              <p className="px-4 py-8 text-xs text-center text-[var(--text-tertiary)]">Послуги не додані</p>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">⭐ {master.rating}</span>
              <span className="text-xs text-[var(--text-tertiary)]">{master.reviewCount} відгуків</span>
            </div>
            <p className="text-xs text-[var(--text-tertiary)] text-center py-8">Відгуки з&rsquo;являться після перших записів</p>
          </div>
        )}

        <div className="mt-5">
          <button className="w-full bg-[var(--accent)] text-[var(--text)] font-semibold text-sm py-3.5 rounded-xl hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all">
            📅 Записатися до {master.name.split(" ")[0]}
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
