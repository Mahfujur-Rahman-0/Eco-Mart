import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "./components/Header";
import Footer from "./components/footer";
import AppProvider from "./context/AppContext";
import AOSProvider from "./components/AOSProvider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "EcomArts - Multipurpose eCommerce Tailwindcss Template",
	description: "A custom favicon demo",
	icons: {
		icon: "/assets/images/logo/icon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppProvider>
					<AOSProvider>
						<Header />
						{children}
						<Footer />
					</AOSProvider>
				</AppProvider>
			</body>
		</html>
	);
}
