import { Cookie } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Nav"

const cook = Cookie({ subsets: ["latin"],weight: ['400'] });

export const metadata = {
  title: "Fundamentals of React",
  description: 'Creating a react application',
  keywords: 'React, Next, JavaScript, Tailwind, CSS, HTML'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cook.className} text-2xl`}>
      <Navbar/>
        
        {children}
      
      </body>
      
    </html>
  );
}
