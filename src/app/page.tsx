"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import ServicesGrid from "@/components/search/ServicesGrid";
import SpecialistCarousel from "@/components/master/SpecialistCarousel";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Greeting */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-lg">✨</span>
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Доброго ранку!
          </p>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight mb-1.5">
            Знайдіть свого{" "}
            <span className="text-[var(--text)]">б&rsquo;юті-спеціаліста</span>
          </h1>
          <p className="text-[var(--accent-dark)] text-[22px] md:text-[30px] font-bold leading-tight mb-6">
            з яким говорите однією мовою
          </p>

          {/* Search */}
          <Link href="/catalog">
            <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3.5 transition-shadow hover:shadow-sm cursor-pointer">
              <span className="text-lg opacity-50">🔍</span>
              <span className="text-sm text-[var(--text-tertiary)] flex-1">
                Що ви шукаєте?
              </span>
              <span className="text-xs font-semibold bg-[var(--accent)] text-[var(--text)] px-4 py-1.5 rounded-lg">
                Знайти
              </span>
            </div>
          </Link>
        </div>

        {/* Popular Services */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Популярні послуги
            </h2>
            <Link
              href="/catalog"
              className="text-xs font-semibold text-[var(--accent-dark)]"
            >
              Всі
            </Link>
          </div>
          <ServicesGrid />
        </section>

        {/* Recommended */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Рекомендовано для вас
            </h2>
            <Link
              href="/catalog"
              className="text-xs font-semibold text-[var(--accent-dark)]"
            >
              Всі
            </Link>
          </div>
          <SpecialistCarousel />
        </section>

        {/* Language filter prompt */}
        <section className="mb-8 bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)]/40 rounded-2xl p-5">
          <h3 className="text-base font-bold mb-1.5">
            🗣️ Оберіть мову майстра
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mb-4">
            Знаходьте спеціалістів, які говорять вашою мовою
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Українська",
              "Англійська",
              "Узбецька",
              "Вірменська",
              "Польська",
            ].map((lang) => (
              <span
                key={lang}
                className="text-xs font-medium bg-white py-1.5 px-3 rounded-full border border-[var(--border)] cursor-pointer hover:border-[var(--accent)] transition-colors"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Категорії
            </h2>
            <Link
              href="/catalog"
              className="text-xs font-semibold text-[var(--accent-dark)]"
            >
              Всі
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "💅", label: "Манікюр та педикюр", count: 24 },
              { emoji: "💇", label: "Зачіски та стрижки", count: 18 },
              { emoji: "💄", label: "Макіяж", count: 12 },
              { emoji: "💆", label: "Масаж та SPA", count: 15 },
              { emoji: "🧴", label: "Косметологія", count: 9 },
              { emoji: "👁️", label: "Брови та вії", count: 21 },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={`/catalog?service=${encodeURIComponent(cat.label)}`}
                className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-light)] rounded-xl p-3.5 hover:border-[var(--accent)] transition-colors"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <p className="text-sm font-medium">{cat.label}</p>
                  <p className="text-[11px] text-[var(--text-tertiary)]">
                    {cat.count} майстрів
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
