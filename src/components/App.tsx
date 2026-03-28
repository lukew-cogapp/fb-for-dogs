import strings from "../i18n/en.json";
import { Feed } from "./Feed";
import { Navbar } from "./Navbar";
import { ProfileCard } from "./ProfileCard";
import { Sidebar } from "./Sidebar";

export const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr_1fr]">
          <aside className="hidden lg:block">
            <ProfileCard />
          </aside>
          <Feed />
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </main>
      <footer className="mt-6 py-6 text-center text-sm text-fur-dark">
        <hr className="hair-divider mb-6" />
        <p>{strings.footer.copyright}</p>
        <nav className="mt-2 flex justify-center gap-4" aria-label="Footer">
          <a
            href="#privacy"
            className="text-fur-dark transition-colors hover:text-fur-chocolate"
          >
            {strings.footer.privacy}
          </a>
          <a
            href="#terms"
            className="text-fur-dark transition-colors hover:text-fur-chocolate"
          >
            {strings.footer.terms}
          </a>
        </nav>
      </footer>
    </div>
  );
};
