"use client";

import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { MOCK_MASTERS, LANGUAGES, COUNTRIES, POPULAR_SERVICES } from "@/types";
import Link from "next/link";

const GRADIENT_PAIRS = [
  "from-[#c5e84e] to-[#a8d634]",
  "from-[#d4f0a0] to-[#b8e44a]",
  "from-[#e8f5c8] to-[#c5e84e]",
  "from-[#b8e44a] to-[#8cc63f]",
  "from-[#c5e84e] to-[#9acd32]",
  "from-[#dff09e] to-[#c5e84e]",
];

export default function CatalogPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLang = (lang: string) => {
    setSelectedLang((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const filteredMasters = MOCK_MASTERS.filter((m) => {
    if (selectedService && m.service !== selectedService) return false;
    if (selectedLang.length > 0) {
      const hasLang = selectedLang.some((l) => m.languages.includes(l));
      if (!hasLang) return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.service.toLowerCase().includes(q) ||
        m.languages.some((l) => l.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Search bar */}
        <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3.5 mb-5">
          <span className="text-lg opacity-50">🔍</span>
          <input
            type="text"
            placeholder="Пошук майстра, послуги..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none border-none text-[var(--text)] placeholder:text-[var(--text-tertiary)]"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              showFilters
                ? "bg-[var(--accent)] text-[var(--text)]"
                : "bg-[var(--border-light)] text-[var(--text-secondary)]"
            }`}
          >
            ⚙️ Фільтри
          </button>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 mb-5 animate-fade-in">
            {/* Service */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2.5">
                Послуга
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() =>
                      setSelectedService(
                        selectedService === svc.label ? "" : svc.label
                      )
                    }
                    className={`text-xs font-medium py-1.5 px-3 rounded-full border transition-colors ${
                      selectedService === svc.label
                        ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--text)]"
                        : "bg-white border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {svc.icon} {svc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2.5">
                Мова майстра
              </p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => toggleLang(lang)}
                    className={`text-xs font-medium py-1.5 px-3 rounded-full border transition-colors ${
                      selectedLang.includes(lang)
                        ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--text)]"
                        : "bg-white border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Country */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2.5">
                Країна походження
              </p>
              <select className="w-full text-sm bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 outline-none text-[var(--text)]">
                <option value="">Всі країни</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Results count + reset */}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
              <span className="text-xs text-[var(--text-tertiary)]">
                Знайдено: {filteredMasters.length} майстрів
              </span>
              <button
                onClick={() => {
                  setSelectedLang([]);
                  setSelectedService("");
                }}
                className="text-xs font-semibold text-[var(--accent-dark)]"
              >
                Скинути фільтри
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMasters.map((master, idx) => {
            const initials = master.name
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <Link
                key={master.id}
                href={`/masters/${master.id}`}
                className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-xl p-4 hover:shadow-md hover:border-[var(--accent)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br ${
                      GRADIENT_PAIRS[idx % GRADIENT_PAIRS.length]
                    } relative`}
                  >
                    {initials}
                    {master.online && (
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold truncate">
                        {master.name}
                      </h3>
                      {master.verified && (
                        <span className="text-[10px]" title="Підтверджений">
                          ✅
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      {master.service}
                      {master.distance && ` · ${master.distance}`}
                      {master.city && ` · ${master.city}`}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      {master.languages.slice(0, 2).map((lang) => (
                        <span
                          key={lang}
                          className="text-[9px] bg-[var(--accent-light)] text-[var(--accent-dark)] font-medium px-2 py-0.5 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                      {master.languages.length > 2 && (
                        <span className="text-[9px] text-[var(--text-tertiary)]">
                          +{master.languages.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] font-semibold text-[var(--accent-dark)]">
                        ⭐ {master.rating}
                      </span>
                      <span className="text-xs font-bold">
                        від {master.minPrice}₴
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredMasters.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-sm text-[var(--text-secondary)]">
              Нічого не знайдено. Спробуйте інші фільтри.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
