"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AppLayout>
      <div className="max-w-sm mx-auto px-4 py-12">
        <h1 className="text-2xl font-extrabold mb-1">Вхід</h1>
        <p className="text-xs text-[var(--text-secondary)] mb-8">
          Увійдіть, щоб записуватись до майстрів
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-tertiary)]"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-tertiary)]"
          />
          <button className="w-full bg-[var(--accent)] text-[var(--text)] font-semibold text-sm py-3 rounded-xl hover:shadow-lg transition-all">
            Увійти
          </button>
        </div>

        <p className="text-xs text-center text-[var(--text-tertiary)] mt-6">
          Ще немає акаунту?{" "}
          <Link href="/register" className="text-[var(--accent-dark)] font-semibold">
            Зареєструватись
          </Link>
        </p>
      </div>
    </AppLayout>
  );
}
