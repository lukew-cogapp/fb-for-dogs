import strings from "../i18n/en.json";

export const Footer = () => {
  return (
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
  );
};
