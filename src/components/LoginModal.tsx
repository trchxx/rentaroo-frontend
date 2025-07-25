// Modal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../store/useModalStore.ts";
import logoPath from "../assets/Logo.svg";

export const LoginModal = () => {
  const isLoginOpen = useModalStore((state) => state.isLoginOpen);
  const closeLogin = useModalStore((state) => state.closeLogin);

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLogin}
        >
          <motion.div
            className="bg-primary backdrop-blur border border-white/20 rounded-lg px-8 py-8 shadow-lg max-w-xs sm:max-w-sm flex flex-col items-center justify-center text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img className="w-30 h-10 mb-4" src={logoPath} alt="Logo" />
            <h2 className="text-xl font-semibold mb-4">¡Bienvenido!</h2>
            <p className="">
              Inicia sesión en Rentaroo para poder empezar a alquilar
            </p>
            <form className="flex flex-col gap-4 my-6 w-[90%]">
              <input
                type="text"
                placeholder="Usuario"
                className="p-2 rounded border border-secondary"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="p-2 rounded border border-secondary"
              />
              <button type="submit" className="px-4 py-2 rounded bg-accent">
                Entrar
              </button>
            </form>
            <p className="">
              ¿No tienes cuenta aún?{" "}
              <button className="text-accent">Regístrate aquí</button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
