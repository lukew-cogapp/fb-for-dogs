import data from "../data/fixtures.json";
import strings from "../i18n/en.json";

export const ProfileCard = () => {
  return (
    <div className="fur-card relative overflow-hidden sticky top-20 rounded-2xl bg-white/70 p-5 shadow-fur">
      <div
        className="fur-avatar-ring mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-fur-cream text-5xl"
        aria-hidden="true"
      >
        🐕
      </div>
      <h3 className="text-center font-bold text-fur-chocolate">
        {data.posts[0].author}
      </h3>
      <p className="text-center text-sm text-fur-dark">{data.posts[0].breed}</p>
      <div className="mt-4 flex justify-around text-center text-sm">
        <div>
          <div className="font-bold text-fur-chocolate">
            {data.profile.postsCount}
          </div>
          <div className="text-fur-dark">{strings.profile.posts}</div>
        </div>
        <div>
          <div className="font-bold text-fur-chocolate">
            {data.profile.followersCount}
          </div>
          <div className="text-fur-dark">{strings.profile.followers}</div>
        </div>
        <div>
          <div className="font-bold text-fur-chocolate">
            {data.profile.followingCount}
          </div>
          <div className="text-fur-dark">{strings.profile.following}</div>
        </div>
      </div>
      <button
        type="button"
        className="fur-btn mt-4 w-full rounded-full bg-paw-pink py-2 font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(232,160,191,0.4)] active:scale-97"
      >
        {strings.profile.editProfile}
      </button>
    </div>
  );
};
