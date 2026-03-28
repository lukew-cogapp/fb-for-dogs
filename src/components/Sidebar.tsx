import data from "../data/fixtures.json";
import strings from "../i18n/en.json";

export const Sidebar = () => {
  return (
    <div className="sticky top-20 space-y-4">
      <div className="fur-card relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-fur">
        <h3 className="mb-3 font-bold text-fur-chocolate [text-shadow:var(--text-shadow-fuzzy)]">
          🔥 {strings.sidebar.trending}
        </h3>
        <ul className="space-y-2">
          {strings.sidebar.trendingTopics.map((topic) => (
            <li key={topic}>
              <button
                type="button"
                className="text-sm text-fur-dark transition-colors hover:text-paw-pink"
              >
                {topic}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fur-card relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-fur">
        <h3 className="mb-3 font-bold text-fur-chocolate [text-shadow:var(--text-shadow-fuzzy)]">
          🐾 {strings.sidebar.suggestedFriends}
        </h3>
        <ul className="space-y-3">
          {data.suggestedDogs.map((dog) => (
            <li key={dog.name} className="flex items-center gap-3">
              <span
                className="fur-avatar-ring flex h-8 w-8 items-center justify-center rounded-full bg-fur-cream text-2xl"
                aria-hidden="true"
              >
                {dog.emoji}
              </span>
              <div className="flex-1">
                <div className="text-sm font-bold text-fur-chocolate">
                  {dog.name}
                </div>
                <div className="text-xs text-fur-dark">{dog.breed}</div>
              </div>
              <button
                type="button"
                className="fur-btn rounded-full bg-paw-pink/20 px-3 py-1 text-xs font-bold text-paw-dark transition-all duration-200 hover:scale-105 hover:bg-paw-pink hover:text-white active:scale-97"
              >
                {strings.actions.addFriend}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fur-card relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-fur">
        <h3 className="mb-3 font-bold text-fur-chocolate [text-shadow:var(--text-shadow-fuzzy)]">
          🟢 {strings.sidebar.onlineFriends}
        </h3>
        <div className="space-y-2">
          {data.onlineFriends.map((name) => (
            <div key={name} className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-grass-green" />
              <span className="text-fur-dark">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
