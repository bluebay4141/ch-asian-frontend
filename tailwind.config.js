const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        nav: '#1E2145',
        "lang-border": "#1E2145",
        "hero-1": "#FC5E48",
        "hero-2": "#1E2046",
        "hero-3": "#464646",
        "hero-btn": "#FB5F49",
        "service-text": "#42425A",
        "faq": "#a6a6a6",
        "question": "#CFCFCF",
        "answer": "#464646D9",
        "rank": "#2A2A2A",
        "box": "#D9DDF0",
        "location": "#E8E8EA",
        "review": "#FB5F49",
        "forbes": "#B5CCB8",
        "nav-link-bg": "#000000DE",
        packages: "#F8F8F8",
        trip: "#4E5466",
        sponsors: "#D9D9D9",
        more: "#333333",
        vision: "#FFFFFFE5",
        contact: "#1F1F1F",
        number: "#CACACA",
        "trip-border": "#CFCFCF",
        "highlights": "#212121",
        journey: "#E8E8E8",
        schedule: "#00000080",
        person: "#6B6B6B",
        "visit-sl": "#FFB800"
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans],
        Helvetica: ['var(--font-roboto)'],
        Calistoga: ["Calistoga-Regular"]
      },
      fontSize: {
        lang: "10px",
        navigation: "13px",
        services: "15px",
        "nav-link": "17px",
        "hero-text-1": "18px",
        collaborators: "22px",
        testimonials: "28px",
        "visit-mobile": "32px",
        "mobile-subscription": "36px",
        "mobile-vision": "38px",
        "services-big": "40px",
        subscription: "42px",
        visit: "50px",
        "hero-big": "58px"
      },
      border: {
        low: "0.5px"
      },
      borderRadius: {
        lang: "10px",
        packages: "20px",
        en: "40px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      },
      lineHeight: {
        12: "48px"
      },
      spacing: {
        "text-hero": "345px",
        4.5: "17px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        9.5: "38px",
        11.25: "45px",
        12.5: "50px",
        13: "52px",
        13.75: "55px",
        14.5: "58px",
        15: "60px",
        17: "68px",
        17.5: "70px",
        18: "72px",
        19: "76px",
        21: "84px",
        22.5: "90px",
        23.75: "95px",
        25: "100px",
        27.5: "110px",
        28.75: "115px",
        30: "120px",
        33.25: "133px",
        35: "140px",
        36: "144px",
        38: "152px",
        42.5: "170px",
        45: "180px",
        50: "200px",
        54: "216px",
        57: "228px",
        60: "240px",
        62.5: "250px",
        72.5: "290px",
        75: "300px",
        82.5: "330px",
        84.5: "348px",
        88: "352px",
        90: "360px",
        92.5: "370px",
        97: "388px",
        100: "400px",
        110: "440px",
        113: "452px",
        120: "480px",
        135: "540px",
        172.5: "690px",
        178: "712px",
        180: "720px",
        200: "800px",
        210: "840px",
        220: "880px",
        maxScreen: "1280px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
