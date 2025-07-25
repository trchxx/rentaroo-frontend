import { useState } from "react";

const languages = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "de", label: "DE", flag: "🇩🇪" },
];

export const LanguageSelector = () => {
  const [selected, setSelected] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setSelected(newLang);
  };

  return (
    <select
      id="LanguageSelector"
      value={selected}
      onChange={handleChange}
      className="text-foreground cursor-pointer"
    >
      {languages.map((lang) => {
        return (
          <option
            className="bg-primary text-foreground px-0"
            key={lang.code}
            value={lang.code}
          >
            {lang.code} {lang.label}
          </option>
        );
      })}
    </select>
  );
};
