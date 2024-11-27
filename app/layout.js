import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Lars-Desmet's GitHub Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
