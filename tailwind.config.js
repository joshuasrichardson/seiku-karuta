/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".checkbox": {
          appearance: "none",
          backgroundColor: "transparent",
          border: "1px solid currentColor",
          borderRadius: "0.25rem",
          display: "inline-block",
          height: "1.2em",
          width: "1.2em",
          verticalAlign: "middle",
          cursor: "pointer",
        },
        ".checkbox:checked": {
          backgroundColor: "currentColor",
          borderColor: "currentColor",
        },
        ".centered-select": {
          "text-align-last": "center",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
