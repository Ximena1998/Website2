import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const links = [
	{
		label: 'Start trading',
		route: '/trading'
	},
	{
		label: 'Contact Us',
		route: '/contact'
	}
];
export function Footer() {
	return (
		<div>
			<div className=" w-full bg-secondary h-70 bottom-0 flex md:flex justify-around items-start bg-[url('../public/bg-footer.svg')] ">
				<div className="pt-5">
					<ul>
						<li className="text-green-500 font-bold text-lg pb-6">Logo</li>
						<li className="text-white font-normal text-base pb-6 w-80 md:w-96">
							Is a private virtual network that has unique features and has high security.
						</li>
						<div className="flex gap-6 pb-5 text-green-500">
							<FaFacebook className="text-2xl " />
							<FaLinkedin className="text-2xl " />
							<FaInstagram className="text-2xl " />
							<FaTwitter className="text-2xl " />
							<FaWhatsapp className="text-2xl block md:hidden" />
						</div>
						<div className='hidden md:block'>
							<li className="text-white font-normal text-xs w-80">Terms and Conditions | Privacy Policy</li>
							<li className="text-white font-normal text-xs pb-6 w-80">© All rights reserved 2021.</li>
						</div>
                        <div className='block md:hidden pb-7'>
							<li className="text-gray-500 font-normal text-base">©2020Company</li>
						</div>
					</ul>
				</div>
				<div className="p-5 hidden md:block">
					<ul>
						<li className="text-white font-normal text-lg py-2 md:px-6 text-start">Contact Us</li>
						<li className="text-white font-normal text-base py-2 md:px-6 text-start">example@mail.com</li>
						{links.map(({ label, route }) => (
							<li key={route} className=" text-base text-white py-2 md:px-6 text-start">
								<Link href={route}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
