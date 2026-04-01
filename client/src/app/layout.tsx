import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning={true}>
          {children}
      </body>
    </html>
  );
}