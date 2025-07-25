import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-[bg-primary] py-6 px-4 text-sm mt-auto">
      <div className="mx-auto mt-1 flex flex-wrap justify-between gap-6 text-center">
        <div className="flex-1 min-w-[200px]">
          <h4 className="mb-3 font-semibold">Contact</h4>
          <p>
            Email:
            <a href="mailto:info@rentaroo.com" className="underline">
              info@rentaroo.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+34666777888" className="underline">
              +34 666 777 888
            </a>
          </p>
        </div>

        <nav className="flex-1 min-w-[150px]">
          <h4 className="mb-3 font-semibold">Links</h4>
          <ul className="list-none p-0 space-y-1">
            <li>
              <a href="/about" className="no-underline hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="no-underline hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="no-underline hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex-1 min-w-[150px]">
          <h4 className="mb-3 font-semibold">Follow Us</h4>
          <div className="flex gap-4 text-xl justify-center">
            <a
              href="https://www.github.com"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-5 text-xs">
        &copy; 2025 Rentaroo. All rights reserved.
      </div>
    </footer>
  );
};
