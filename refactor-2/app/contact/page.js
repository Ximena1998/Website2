import Image from 'next/image';
import Link from 'next/link';
import TickerTape from '../../components/TickerTape';
export default function Contact() {
	return (
		<div className="bg-[url('../public/bg-contact-small.svg')] bg-right-top mt-28 pb-20 md:mt-0 md:py-20 md:bg-[url('../public/bg-contact.svg')] bg-no-repeat md:bg-left-top">
			<div className=" px-5 md:px-20 ">
				<div>
					<h1 className="font-bold text-green-500 uppercase text-4xl text-center pt-16 md:text-6xl md:pt-0  ">
						Contact Us
					</h1>
					<p className="text-white text-base py-6 md:w-1/2 md:mx-auto md:px-5 text-center">
						We have our offices in different countries, you can visit them or contact us through email or direct message
						on social media. It will be a pleasure to solve your doubts.
					</p>
					<Image src="/map-contact.svg" width={1060} height={540} className="md:mx-auto md:pt-10" />
				</div>
			</div>
			<div className="bg-dark  py-10  ">
				<TickerTape></TickerTape>
			</div>
			<div className=" mx-5 text-center md:w-1/4 md:mx-auto  md:pt-10">
				<p className="text-white text-base py-6 ">
					Powerful and easy to use platform Everything we do, we do for you. With our innovative platform, investing
					becomes more efficient, accessible and intuitive.
				</p>
				<button className="bg-green-500 rounded-sm text-white text-center w-48 mx-auto justify-center flex h-10 mt-5  pt-2 md:w-52 md:mt-3 ">
					<Link href="https://webtrader.pentview.com/login" target='_blank'> Get Started</Link>
				</button>
			</div>
		</div>
	);
}
