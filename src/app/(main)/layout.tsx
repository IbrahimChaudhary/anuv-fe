import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Header />
      <Footer />
    </>
  );
}
