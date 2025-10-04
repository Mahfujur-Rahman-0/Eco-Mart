"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
	const pathname = usePathname();

	useEffect(() => {
		AOS.init({
			offset: 200, // adjust as needed
			duration: 800, // optional, smooth animation
			once: false, // set true if you want it to trigger only once
			easing: "ease-in-out",
		});
	}, []);

	// 👇 Re-trigger AOS on route changes
	useEffect(() => {
		AOS.refresh();
	}, [pathname]);

	return <>{children}</>;
}
