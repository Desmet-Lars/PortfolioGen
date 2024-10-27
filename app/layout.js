import "./globals.css";

export const metadata = {   
    title: "Lars-Desmet's GitHub Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
