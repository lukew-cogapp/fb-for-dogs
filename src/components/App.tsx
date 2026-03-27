import strings from "../i18n/en.json";
import { Feed } from "./Feed";
import { Navbar } from "./Navbar";
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
      <footer className="border-t border-fur-medium/30 py-6 text-center text-sm text-fur-dark">
        <p>{strings.footer.copyright}</p>
        <div className="mt-2 flex justify-center gap-4">
          <span className="cursor-pointer hover:text-fur-chocolate">
            {strings.footer.privacy}
          </span>
          <span className="cursor-pointer hover:text-fur-chocolate">
            {strings.footer.terms}
          </span>
        </div>
      </footer>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="fur-shadow sticky top-20 rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
      <div className="mb-3 text-center text-5xl">🐕</div>
      <h3 className="text-center font-bold text-fur-chocolate">
        {strings.posts[0].author}
      </h3>
      <p className="text-center text-sm text-fur-dark">
        {strings.posts[0].breed}
      </p>
      <div className="mt-4 flex justify-around text-center text-sm">
        <div>
          <div className="font-bold text-fur-chocolate">128</div>
          <div className="text-fur-dark">{strings.profile.posts}</div>
        </div>
        <div>
          <div className="font-bold text-fur-chocolate">1.2k</div>
          <div className="text-fur-dark">{strings.profile.followers}</div>
        </div>
        <div>
          <div className="font-bold text-fur-chocolate">847</div>
          <div className="text-fur-dark">{strings.profile.following}</div>
        </div>
      </div>
      <button
        type="button"
        className="paw-button mt-4 w-full rounded-full bg-paw-pink py-2 font-bold text-white"
      >
        {strings.profile.editProfile}
      </button>
    </div>
  );
};
