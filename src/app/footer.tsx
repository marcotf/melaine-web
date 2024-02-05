import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-center text-sm py-3 md:flex md:py-6 md:justify-center">
      <div>
        © {new Date().getFullYear()} <b>Mélaine Nieuwjaer</b>.
      </div>
      <div className="ml-0 md:ml-1">Tous droits réservés.</div>
      <div className="ml-0 md:ml-1">
        Site réalisé par{" "}
        <b>
          <Link
            href="https://www.linkedin.com/in/fmarcotteruffin/"
            target="_blank"
          >
            FMR
          </Link>
        </b>
        .
      </div>
    </footer>
  );
};
