import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
      <main>{children}</main>
    <Footer />
  </>
  );
}