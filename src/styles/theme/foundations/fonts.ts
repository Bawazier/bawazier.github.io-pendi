import { Inter, Space_Grotesk, Playfair_Display } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const fonts = {
  title: `${space.style.fontFamily}, sans-serif`,
  subtitle: `${inter.style.fontFamily}, sans-serif`,
  italic: `${playfair.style.fontFamily}, serif`,
};

export default fonts;
