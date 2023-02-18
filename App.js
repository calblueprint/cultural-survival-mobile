import React from "react";
import RootNavigation from "./src/navigation";
import { AuthProvider } from "./providers/AuthProvider";

export default function App() {
	return (
		<AuthProvider>
			<RootNavigation />
		</AuthProvider>
	);
}
