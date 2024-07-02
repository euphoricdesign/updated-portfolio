module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Breakpoints predefinidos
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        // Breakpoints personalizados
        tablet: "900px", // Dispositivos con un ancho de 900px o superior
        desktop: "1200px", // Dispositivos con un ancho de 1200px o superior
        // Breakpoints para dispositivos móviles modernos
        mobile: "360px", // Dispositivos móviles pequeños
        phablet: "480px", // Dispositivos móviles medianos
        phone: "580px", // Dispositivos móviles grandes
      },
    },
  },
  plugins: [],
}
