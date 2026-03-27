import { useState } from "react";
import strings from "../i18n/en.json";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: strings.nav.home, icon: "🏠" },
    { label: strings.nav.profile, icon: "🐕" },
    { label: strings.nav.friends, icon: "🐾" },
    { label: strings.nav.messages, icon: "💬" },
    { label: strings.nav.notifications, icon: "👃" },
  ];

  return (
    <nav className="fur-navbar fur-shadow sticky top-0 z-50 bg-fur-brown text-fur-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <h1 className="fuzzy-text text-xl font-black tracking-tight">
            {strings.site.title}
          </h1>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/10"
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="text-2xl md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-white/10"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
