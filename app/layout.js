import Providers from "@/store/provider";
import NavBar from "./component/NavBar/NavBar";

export const metadata = {
  title: "Reac and Morty",
  description: "my frist app with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <Providers>
        <body>
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
