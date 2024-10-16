import { Cairo } from "next/font/google";
import { Marhey } from "next/font/google";
import "./globals.css";
import ContentLayout from "./components/contentLayout";
const ca = Cairo({ subsets: ["arabic"] })
const Mar = Marhey({ subsets: ["arabic"], weight: ["400", "500", "700"] })
export const metadata = {
  title: "الموقع الرسمي لنادي الزمالك",
  description: "Zamalek SC offecially website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${ca.className} relative`}>
        <ContentLayout>
          {children}
        </ContentLayout>
      </body>
    </html>
  );
}
