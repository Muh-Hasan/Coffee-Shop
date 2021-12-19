module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        border: "#747474",
        hero: "#F06358",
        form: "#FFE5CB",
        secondary: "#77AFAC",
      },
      textColor: {
        para: "#685959",
      },
      screens: {
        isXs: { max: "480px" },
        isSm: { max: "640px" },
        isMd: { max: "778px" },
        isLg: { max: "900px" },
        isLgMax: {max: "990px"},
        isXl: { max: "1034px" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
