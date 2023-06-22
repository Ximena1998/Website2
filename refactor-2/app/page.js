import Image from 'next/image';
import TickerTape from '../components/TickerTape';

import Seccions from '../components/seccions';

import { ArrowLgSvg, LineMain1Svg } from '../public/icons';
export default function Home() {
	const id = 'section1';

	return (
		<div>
			{/** index */}
			<div
				id="index"
				className=" w-full bottom-0  md:flex justify-around bg-[url('../public/bg-index2.png')] bg-no-repeat  bg-left md:py-10"
			>
				<div className="pt-36  md:pt-24 md:ps-36 ">
					<ul>
						<li className="text-white font-bold text-4xl justify-center flex md:text-5xl pb-6 text-start">
							More than just
						</li>
						<li className="text-green-500  font-bold justify-center text-4xl flex md:text-6xl pb-6">LOW FEES</li>
						<div className="justify-center flex">
							<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-8">
								Get Started
							</button>
						</div>
					</ul>
				</div>
				<div className="hidden md:block pt-5">
					<Image src="/index1.svg" width={400} height={50} />
				</div>
				<div className="flex justify-center block pt-8  md:hidden">
					<Image src="/index1.svg" width={200} height={50} alt="line-index" />
				</div>
			</div>
			{/** flecha*/}
			<div className="flex justify-center pt-10">
				<ArrowLgSvg />
			</div>
			{/** widget ticker tape*/}
			<div className="bg-dark block py-5 md:hidden">
				<TickerTape></TickerTape>
			</div>
			{/** carrusel de secciones*/}
			<div id="seccions" className="md:px-20">
				<div className="md:bg-[url('../public/bg-index3.svg')] bg-no-repeat bg-right-top">
					<Seccions></Seccions>
				</div>
			</div>
			{/**seccion 1*/}
			<div id="main1" className=" pt-0 md:flex md:px-20 md:pt-14">
				<div className="hidden md:block">
					<Image src="/main4-1.svg" width={670} height={476} alt="main4-1" />
				</div>
				<div className="block pt-10 md:hidden ">
					<LineMain1Svg></LineMain1Svg>
				</div>
				<div className="block md:hidden">
					<Image src="/index1-sm.svg" width={850} height={100} alt="main4-1" />
				</div>
				<div className="lg:ps-32 lg:w-3/5">
					<div className=" px-5 md:bg-[url('../public/line-p-1.png')] bg-no-repeat bg-right-top md:py-20">
						<h1 className="font-bold text-white text-xl pt-5 w-52 md:text-2xl md:w-full">
							Invest in the most popular assets
						</h1>
						<p className="font-normal text-gray-400 text-sm  md:text-base py-9">
							Powerful and easy to use platform. Everything we do, we do for you. With our innovative platform,
							investing becomes more efficient, accessible and intuitive.
						</p>
						<p className="font-normal text-gray-400 text-sm pb-5 md:text-base">
							Online trading is buying and selling stocks online. No human interaction. This is the most convenient and
							cost-effective way to trade.
						</p>
						<button className="bg-green-500 rounded-sm text-white text-center h-10 w-48  mt-5 md:w-52  md:mt-8">
							Get Started
						</button>
					</div>
				</div>
			</div>
			{/**seccion 2*/}
			<div id="main2" className=" md:px-20 ">
				<div className=" block pt-16 h-auto  md:hidden">
					<Image src="/main3-sm.svg" width={1250} height={676} alt="main3" />
				</div>
				<div className="flex bg-small  md:bg-[url('../public/line-p-2.png')] md:bg-no-repeat md:bg-left-top ">
					<div className=" px-5  ">
						<h1 className="font-bold text-white text-xl pt-12 md:pt-48 md:text-2xl   ">Statistics of your actions</h1>
						<p className="font-normal text-gray-400 text-sm pt-8 w-72 md:text-base md:pt-14 md:pb-4 md:w-96">
							Here you can see statistics for your demo account or live account. For example, how much money is on the
							account, equity, how much is withdrawn, profit and more.
						</p>
						<p className="font-normal text-gray-400 text-sm py-5 w-72 md:text-base md:pb-4 md:w-96">
							There is also a graph that shows statistics for different periods of time, such as 15 days, 1 month, 6
							months, and for the entire lifetime of the account.
						</p>
						<p className="font-normal text-gray-400 text-sm  w-72 md:text-base md:pb-4 md:w-96">
							In the "Withdrawal" tab, you can see in more detail when and how much funds were withdrawn, filtering out
							a week, a month, etc.
						</p>
					</div>

					<div className=" hidden md:pt-40 md:ps-24 md:block">
						<Image src="/main4-2.svg" width={721} height={676} alt="main4-1" />
					</div>
				</div>
				<div className="block pt-10 md:hidden ">
					<LineMain1Svg></LineMain1Svg>
				</div>
			</div>
			{/**seccion 3*/}
			<div id="main3" className=" pt-0 md:flex md:px-20  md:py-14 md:w-full">
				<div className="hidden md:block">
					<Image src="/index6.svg" width={670} height={642} alt="Imac monitor with trading platform" />
				</div>
				<div className="  md:hidden block ">
					<Image src="/index3-sm.svg" width={402} height={200} alt="Imac monitor with trading platform" />
				</div>

				<div className="lg:ps-32 lg:w-3/5">
					<div className=" px-5 md:bg-[url('../public/line-p-1.png')] bg-no-repeat bg-right-top md:py-20">
						<h1 className="font-bold text-white text-xl pt-5 w-52 md:text-2xl md:w-full">Orders</h1>
						<p className="font-normal text-gray-400 text-sm  md:text-base py-9">
							We have created a convenient tool for working with orders on the platform. In addition to active ones,
							there are also pending orders. If you have an assumption that the buy / sell price will change at a
							certain time, so as not to sit in front of the monitor, you can create a pending order by specifying
							either the closing time, or closing when the set profit is reached, or closing the deal when the set loss
							of funds is reached.
						</p>
						<p className="font-normal text-gray-400 text-sm pb-5 md:text-base">
							Here you can see all the information about your pending orders, sort them by different parameters and even
							complete the deal in advance if you are satisfied with the result
						</p>
						<button className="bg-green-500 rounded-sm text-white text-center h-10 w-48  mt-5 md:w-52  md:mt-8">
							Get Started
						</button>
					</div>
				</div>
			</div>
			{/**seccion 4*/}
			<div className=" bg-none py-20 px-9 md:flex md:px-20 md:py-24 bg-lg">
				<h1 className="font-bold text-2xl text-center text-white md:ps-16 underline underline-offset-8 decoration-2 decoration-green-500 md:no-underline ">
					How to start
				</h1>
				<div className="pt-8 ">
					<ol class="ms-12 md:ms-16 sm:flex  md:border-none relative border-l-2 border-gray-400">
						<li class="relative md:block mb-6 sm:mb-0">
							<div className=" md:hidden absolute w-4 h-4 mt-4 -left-2 rounded-full bg-green-500 "></div>
							<div class=" hidden  md:flex md:items-center md:justify-center">
								<div class=" hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
								<div className="hidden md:block w-4 h-4 rounded-full bg-green-500 "></div>
								<div class=" hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
							</div>
							<div class="pt-3 ps-5 text-white md:pt-0 md:mt-3 md:ps-2 md:text-center md:pr-2">
								<h3 className=" text-xl font-bold md:text-2xl ">Register</h3>
								<p className=" w-full text-sm md:w-44 md:mx-auto md:text-base">
									Register on the platform <mark className="mark">(free)</mark>, choose a demo or real account.
								</p>
							</div>
						</li>
						<li class="relative md:block  mb-6 sm:mb-0">
							<div className=" md:hidden absolute w-4 h-4 mt-4 -left-2 rounded-full bg-green-500 "></div>
							<div class="flex items-center justify-center">
								<div class="hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
								<div className="hidden md:block w-4 h-4 rounded-full bg-green-500"></div>
								<div class="hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
							</div>
							<div class="pt-3 ps-5 text-white md:pt-0 md:mt-3 md:ps-2 md:text-center md:pr-2">
								<h3 className="text-xl font-bold md:text-2xl">Explore the platform</h3>
								<p className="w-full text-sm md:w-44 md:mx-auto md:text-base">
									There are <mark className="mark">free</mark> video tutorials on our platform.
								</p>
							</div>
						</li>
						<li class="relative md:block  mb-6 sm:mb-0">
							<div className=" md:hidden absolute w-4 h-4 mt-4 -left-2 rounded-full bg-green-500 "></div>
							<div class="flex items-center justify-center">
								<div class="hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
								<div className="hidden md:block w-4 h-4 rounded-full bg-green-500"></div>
								<div class="hidden sm:flex w-1/2 bg-gray-400 h-0.5"></div>
							</div>
							<div class="pt-3 ps-5 text-white md:pt-0 md:mt-3 md:ps-2 md:text-center md:pr-2">
								<h3 className="text-xl font-bold md:text-2xl">Start trading</h3>
								<p className="w-full text-sm md:w-44 md:mx-auto md:text-base">
									Get <mark className="mark">free</mark> access to a world where money works for you.
								</p>
							</div>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
