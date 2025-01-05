import "@/app/ui/global.css";
import { inter, poppins } from "./ui/fonts/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div>Hello</div>
        {children}
      </body>
    </html>
  );
}
