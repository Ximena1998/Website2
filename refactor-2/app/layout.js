import '../styles/globals.css';
import TickerTape from '../components/TickerTape';
import { Navigation } from '../components/Navigation';
import { Footer} from '../components/Footer';
export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Navigation/>
				<main>{children}</main>
				<Footer/>
			</body>
		</html>
	);
}
