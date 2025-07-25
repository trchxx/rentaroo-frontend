import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../store/useModalStore.ts";
import logoPath from "../assets/Logo.svg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const LoginModal = () => {
  const isLoginOpen = useModalStore((state) => state.isLoginOpen);
  const closeLogin = useModalStore((state) => state.closeLogin);

  const [isRegistering, setIsRegistering] = useState(false);

  const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};
  
  return (
    <AnimatePresence>
      {isLoginOpen && (
        <motion.div
          className="text-foreground fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
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
            <button onClick={closeLogin} className="text-accent absolute top-3 left-3">
              <IoMdClose className="w-6 h-6" />
            </button>

            <img className="w-30 h-10 mb-4" src={logoPath} alt="Logo" />
            <h2 className="text-xl font-semibold mb-4">¡Bienvenido!</h2>
            <p className="">
              Inicia sesión en Rentaroo para poder empezar a alquilar
            </p>
            {/* <form className="flex flex-col gap-4 my-6 w-[90%]">
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
            </form> */}

<AnimatePresence mode="wait">
  {isRegistering ? (
    <motion.form
      key="register"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col gap-4 my-6 w-[90%]"
    >
      <input
        type="text"
        placeholder="Nombre de usuario"
        className="p-2 rounded border border-secondary"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="p-2 rounded border border-secondary"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="p-2 rounded border border-secondary"
      />
      <input
        type="password"
        placeholder="Repetir contraseña"
        className="p-2 rounded border border-secondary"
      />
      <button type="submit" className="px-4 py-2 rounded bg-accent">
        Registrarse
      </button>
    </motion.form>
  ) : (
    <motion.form
      key="login"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col gap-4 my-6 w-[90%]"
    >
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
    </motion.form>
  )}
</AnimatePresence>




            <p className="">
  {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta aún?"}
  <button
    className="ml-1 text-accent"
    onClick={() => setIsRegistering((prev) => !prev)}
  >
    {isRegistering ? "Haz login" : "Regístrate aquí"}
  </button>
</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
