import { Feed } from "./Feed";
import { Footer } from "./Footer";
import { FurStrands } from "./FurStrands";
import { Navbar } from "./Navbar";
import { ProfileCard } from "./ProfileCard";
import { Sidebar } from "./Sidebar";

export const App = () => {
  return (
    <div className="min-h-screen">
      <FurStrands />
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
      <Footer />
    </div>
  );
};
