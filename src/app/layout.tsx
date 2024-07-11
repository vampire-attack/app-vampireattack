import "./styles/globals.css";
import "./styles/index.scss";
import "@rainbow-me/rainbowkit/styles.css";
import "@mantine/core/styles.css";
import WagmiProviderComp from "@/lib/wagmiProvider";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { Montserrat } from "next/font/google";
import { theme } from "./theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DirectionProvider>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <WagmiProviderComp>
              <main className={montserrat.className}>
                {/* <NavBar /> */}
                <div className="w-full text-white">{children}</div>
                {/* <Footer /> */}
              </main>
            </WagmiProviderComp>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
