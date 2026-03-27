import strings from "../i18n/en.json";

export const Sidebar = () => {
  const suggestedDogs = [
    { name: "Waffles", breed: "Corgi", emoji: "🐕" },
    { name: "Thunder", breed: "Husky", emoji: "🐺" },
    { name: "Princess Biscuit", breed: "Shih Tzu", emoji: "🐩" },
  ];

  return (
    <div className="sticky top-20 space-y-4">
      <div className="fur-card fur-shadow rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
        <h3 className="fuzzy-text mb-3 font-bold text-fur-chocolate">
          🔥 {strings.sidebar.trending}
        </h3>
        <ul className="space-y-2">
          {strings.sidebar.trendingTopics.map((topic) => (
            <li
              key={topic}
              className="cursor-pointer text-sm text-fur-dark transition-colors hover:text-paw-pink"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="fur-card fur-shadow rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
        <h3 className="fuzzy-text mb-3 font-bold text-fur-chocolate">
          🐾 {strings.sidebar.suggestedFriends}
        </h3>
        <ul className="space-y-3">
          {suggestedDogs.map((dog) => (
            <li key={dog.name} className="flex items-center gap-3">
              <span className="text-2xl">{dog.emoji}</span>
              <div className="flex-1">
                <div className="text-sm font-bold text-fur-chocolate">
                  {dog.name}
                </div>
                <div className="text-xs text-fur-dark">{dog.breed}</div>
              </div>
              <button
                type="button"
                className="paw-button rounded-full bg-paw-pink/20 px-3 py-1 text-xs font-bold text-paw-dark transition-colors hover:bg-paw-pink hover:text-white"
              >
                {strings.actions.addFriend}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fur-card fur-shadow rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
        <h3 className="fuzzy-text mb-3 font-bold text-fur-chocolate">
          🟢 {strings.sidebar.onlineFriends}
        </h3>
        <div className="space-y-2">
          {["Luna the Lab", "Duke the Dane", "Mochi the Maltese"].map(
            (name) => (
              <div key={name} className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-grass-green" />
                <span className="text-fur-dark">{name}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
