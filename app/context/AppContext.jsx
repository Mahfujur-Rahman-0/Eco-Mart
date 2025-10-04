"use client";

import { createContext, useState, useContext } from "react";
const AppContext = createContext();

// 2. Create provider
export default function AppProvider({ children }) {
	const [menu, setMenu] = useState(false);

	return (
		<AppContext.Provider value={{ menu, setMenu }}>
			{children}
		</AppContext.Provider>
	);
}

// 3. Custom hook for easier usage
export function useAppContext() {
	return useContext(AppContext);
}
