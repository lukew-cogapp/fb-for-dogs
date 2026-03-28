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
    <nav
      className="fur-navbar relative overflow-hidden sticky top-0 z-50 bg-fur-brown shadow-fur text-fur-cream"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            🐾
          </span>
          <h1 className="text-xl font-black tracking-tight [text-shadow:var(--text-shadow-fuzzy)]">
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
              <span className="mr-1" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="text-2xl md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={strings.nav.toggleMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 px-4 pb-4 md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-white/10"
            >
              <span className="mr-2" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
