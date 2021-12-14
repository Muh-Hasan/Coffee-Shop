module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        border: "#747474",
        hero: "#F06358",
        form: "#FFE5CB"
      },
      textColor: {
        para: "#685959"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
