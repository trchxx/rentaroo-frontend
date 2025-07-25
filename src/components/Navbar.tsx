import logoPath from "../assets/Logo.svg";
import NavbarActions from "./NavbarActions.tsx";

export const Navbar = () => {
  return (
    <section className="px-6 py-4 w-full">
      {/* DESKTOP layout */}
      <div className="hidden sm:flex justify-between items-center w-full">
        <a href="/">
          <img className="w-30 h-10" src={logoPath} alt="Logo" />
        </a>
        <input
          className="border border-[bg-primary] rounded-3xl py-1 px-4 text-sm w-[300px]"
          type="text"
          placeholder="Search"
        />
        <NavbarActions />
      </div>

      {/* MOBILE layout */}
      <div className="flex sm:hidden flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <a href="/">
            <img className="w-30 h-10" src={logoPath} alt="Logo" />
          </a>
          <NavbarActions />
        </div>
        <div className="px-4">
          <input
            className="border border-[bg-primary] rounded-3xl py-1 px-4 text-sm w-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </section>
  );
};
