import Breadcrumb from "../../components/Breadcrumb";

export default function RootLayout({ children }) {
	return (
		<>
			<Breadcrumb />
			{children}
		</>
	);
}
