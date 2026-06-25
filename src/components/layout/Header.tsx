"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border-light)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          find<span className="text-[var(--accent-dark)]">a</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            Пошук
          </Link>
          <Link
            href="/catalog"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            Каталог
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
          >
            Увійти
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-[var(--accent)] text-[var(--text)] px-5 py-2 rounded-full hover:shadow-md hover:shadow-[var(--accent-glow)] transition-all"
          >
            Зареєструватись
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--text)] rounded transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--text)] rounded transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--text)] rounded transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-[var(--bg)]/98 backdrop-blur-md border-b border-[var(--border-light)] px-4 py-4 flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--text-secondary)]"
            onClick={() => setOpen(false)}
          >
            Пошук
          </Link>
          <Link
            href="/catalog"
            className="text-sm font-medium text-[var(--text-secondary)]"
            onClick={() => setOpen(false)}
          >
            Каталог
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--text-secondary)]"
            onClick={() => setOpen(false)}
          >
            Увійти
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-[var(--accent)] text-[var(--text)] px-5 py-2 rounded-full w-fit"
            onClick={() => setOpen(false)}
          >
            Зареєструватись
          </Link>
        </nav>
      )}
    </header>
  );
}
