import '../styles/globals.css';
import { Navigation } from '../components/Navigation';
export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
