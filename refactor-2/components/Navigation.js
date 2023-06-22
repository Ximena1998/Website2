'use client';
// LINK: componente de next que nos ayuda a navegar dentro de la pagina
import Link from 'next/link';
// import styles from './navigation.module.css'
// Image componente de nex para cargar imagenes
import Image from 'next/image';
//importar svg de icons
import { CloseSvg, HamburgerSvg } from '../public/icons';

import { useState } from 'react';

// links: arreglo de rutas para el nav
const links = [
	{
		label: 'About Us',
		route: '/about'
	},
	{
		label: 'Pricing',
		route: '/pricing'
	},
	{
		label: 'Start trading',
		route: '/trading'
	},
	{
		label: 'Contact Us',
		route: '/contact'
	}
];
export function Navigation() {
	const [navbar, setNavbar] = useState(false);

	function handleNav() {
		setNavbar(!navbar);
	}

	return (
		<div>
			<nav className="w-full bg-black top-0 left-0 right-0 h-auto fixed z-10 md:relative">
				<div className="justify-between px-4 xl:max-w-full lg:max-w-7xl md:items-center md:flex md:px-8 ">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							{/* Logo */}
							<Link href="/">
								<h2 className="text-4xl text-green-500 font-bold">LOGO</h2>
							</Link>
							{/* Menu de hamburguesa para movil */}
							<div className="md:hidden">
								<button onClick={handleNav} className="p-2 text-gray-700 rounded-md outline-none border:none">
									{navbar ? <CloseSvg /> : <HamburgerSvg />}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center items-center  md:block md:pb-0 md:mt-0 pt-0 ${
								navbar ? 'block' : 'hidden'
							}`}
						>
							<ul className="h-auto z-10 md:h-auto items-center justify-center md:flex ">
								{links.map(({ label, route }) => (
									<li key={route} className="pb-6 text-base text-white py-2 md:px-6 text-center md:border-b-0 md:pt-5 ">
										<Link href={route} onClick={handleNav}>
											{label}
										</Link>
									</li>
								))}
								<li>
									<button className="bg-green-500 rounded-sm text-white  text-center  hidden md:w-40 h-10  md:block md:ms-6">
										Get Started
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<Image src="/line-nav.svg" width={1441} height={12} alt="logo" className="hidden md:block" />
					<Image src="/line2-nav.svg" width={500} height={12} alt="logo" className="block md:hidden" />
				</div>
			</nav>
		</div>
	);
}
