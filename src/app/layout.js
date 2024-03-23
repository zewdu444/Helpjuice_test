import Layout from "./components/Layout";
import PrelineScript from "./components/PrelineScript";
import "./globals.css";
export const metadata = {
  title: "HelpJuice test",
  description: "HelpJuice test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
      <PrelineScript />
    </html>
  );
}
