import "../globals.css";
export const metadata = {
    title: "Concertpal.io - Never miss your favorite artist's concerts again.",
    description: "Never miss your favorite artist's concerts again.",
    openGraph: { images: [{ url: "https://pbs.twimg.com/profile_banners/1809055783319203840/1724206113/1500x500" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
