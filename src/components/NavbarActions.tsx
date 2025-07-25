import { ToggleTheme } from "./ToogleTheme.tsx";
import { LanguageSelector } from "./LanguageSelector.tsx";
import { FaRegUserCircle } from "react-icons/fa";
import { useModalStore } from "../store/useModalStore.ts";
import { useUserStore } from "../store/useUserStore.ts";

const NavbarActions = () => {
  const openLogin = useModalStore((state) => state.openLogin);
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <ToggleTheme />

      <LanguageSelector />
      {user ? (
        <button aria-label="User menu">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      ) : (
        <button
          onClick={openLogin}
          className="flex items-center gap-1"
          aria-label="Sign in"
        >
          <FaRegUserCircle />

          <span className="text-sm">Sign In</span>
        </button>
      )}
    </div>
  );
};

export default NavbarActions;
