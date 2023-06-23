import Image from 'next/image';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import StartCards from '../../components/StartCard';
import TickerTape from '../../components/TickerTape';
export default function Trading() {
	return (
		<div className=" bg-start-small bg-start ">
			{/** seccion 1*/}
			<div className="py-64 px-5 md:pt-24 md:px-0 md:pb-0">
				<h1 className="font-bold text-white text-4xl -rotate-45 origin-top-left mx-10 md:text-6xl  md:mx-96  ">Make</h1>
				<h1 className="uppercase font-bold text-4xl text-green-500 md:text-6xl text-center">money work</h1>
				<div className="md:justify-center md:flex md:pt-5 ">
					<h1 className=" font-bold text-white justify-end mx-auto flex md:w-1/3 text-4xl md:mx-0 md:text-5xl  md:justify-start  md:ps-32">
						for you
					</h1>
					<button className="bg-green-500 rounded-sm text-white text-center w-48 ms-36 h-10 mt-5 md:w-52 md:ms-0  md:mt-3 ">
					<Link href="https://webtrader.pentview.com/login" target='_blank'> Get Started</Link>
					</button>
				</div>
			</div>
			{/** seccion 2*/}
			<div className="md:flex md:px-20 md:py-14 hidden">
				<div className="md:w-1/3 md:pt-20">
					<h1 className="font-bold text-white md:text-2xl md:text-center ">How to do?</h1>
					<p className="text-white text-base py-6">
						You do not need to make any first payments to start trading on our platform. You just need to register and
						we will provide you with a demo account with a $ 5000. You will always have a choice, you can first study
						and then open a live account, or open two accounts at once and not waste time, studying and trading on a
						real account.
					</p>
					<p className="text-white text-base">
						While trading on a live account, you can create new strategies and test them on a demo account without
						losing real money. There are 200+ different assets on the Platform such as cryptocurrencies, metals,
						currency bets and etc. Also a lot of tools to work with.
					</p>
				</div>
				<div className="flex justify-center mx-auto ps-10 ">
					<Image src="/start-1.png" width={700} height={460} />
				</div>
			</div>
			{/** widget ticker tape*/}
			<div className="bg-dark  md:py-5  ">
				<TickerTape></TickerTape>
			</div>
			{/** seccion 2*/}
			<div className="flex py-16 bg-[url('../public/start-1-small.png')] bg-no-repeat bg-right-top md:hidden">
				<div className="px-5">
					<h1 className="font-bold text-xl text-white pt-5">How to do?</h1>
					<p className="text-white text-sm pt-10">
						You do not need to make any first payments to start trading on our platform. You just need to register and
						we will provide you with a demo account with a $ 5000. You will always have a choice, you can first study
						and then open a live account, or open two accounts at once and not waste time, studying and trading on a
						real account.
					</p>
					<p className="text-white text-sm pt-4">
						While trading on a live account, you can create new strategies and test them on a demo account without
						losing real money. There are 200+ different assets on the Platform such as cryptocurrencies, metals,
						currency bets and etc. Also a lot of tools to work with.
					</p>
				</div>
			</div>
			{/** seccion 3*/}
			<div className=" mx-5 pb-14 md:py-14 md:w-1/2 md:justify-center md:mx-auto md:pe-32">
				<h1 className=" font-bold text-white text-xl md:text-2xl">Pluses of stock trading today:</h1>
				<h2 className="text-white text-sm md:text-base">It is always profitable to trade, even if the markets fall.</h2>
				<ol className="text-white text-sm md:text-base pt-6  ">
					<li className="flex">
						{' '}
						<FaCircle className="text-green-500 text-xs mt-1.5 pt-1 me-2" />
						easy and convenient trading;
					</li>
					<li className="flex">
						<FaCircle className="text-green-500 text-xs mt-1.5 pt-1 me-2" />
						unlimited potential for return on investment (in theory);
					</li>
					<li className="flex">
						<FaCircle className="text-green-500 text-xs mt-1.5 pt-1 me-2" />
						there are options for trading on the stock exchange with any starting capital;
					</li>
					<li className="flex">
						<FaCircle className="text-green-500 text-xs mt-1.5 pt-1 me-2" />
						high market liquidity.
					</li>
				</ol>
				<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10  mt-6 "><Link href="https://webtrader.pentview.com/login" target='_blank'> Get Started</Link></button>
			</div>
			{/** seccion 4*/}
			<div className=" mx-5 md:py-14 md:w-1/2 md:justify-center md:mx-auto md:text-center ">
				<h1 className=" font-bold text-white text-xl md:text-2xl md:py-8">How much can you raise?</h1>
				<h2 className="text-white  text-sm md:text-base">
					There is no ceiling. Not really. Here are examples of trading results on the exchange:
				</h2>
			</div>
			{/** seccion 5*/}
			<div className=" hidden md:pt-14 md:pb-32 mx-auto md:w-full md:space-x-10 md:flex md:justify-center md:text-center text-white md:bg-[url('../public/bg-start4.svg')] bg-no-repeat bg-right-bottom">
				<div>
					<div className="flex justify-center">
						<Image src="/photo1.svg" width={150} height={150} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold  md:text-2xl md:py-8">$ 51.7 billion</h1>
					<h3 className="font-semibold">Michael Bloomberg</h3>
					<p className=" text-base w-64">
						Made a career in politics, but then he retired, scraped the bottom of the barrel, collected money and began
						trading on the stock exchange;
					</p>
				</div>
				<div>
					<div className="flex justify-center">
						<Image src="/photo2.svg" width={150} height={150} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold  md:text-2xl md:py-8">$ 85 billion</h1>
					<h3 className="font-semibold">Warren Buffett</h3>
					<p className=" text-base w-64">
						Has raised about $ 85 billion in investment, and his fortune continues to grow;
					</p>
				</div>
				<div>
					<div className="flex justify-center">
						<Image src="/photo3.svg" width={150} height={150} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold  md:text-2xl md:py-8">$ 24 billion</h1>
					<h3 className="font-semibold">Karl Icahn</h3>
					<p className="text-base w-64">
						Slowly traded on the stock exchange since the 80s and to date has earned about $ 24 billion. His favorite
						assets are shares of Apple and eBay;
					</p>
				</div>
			</div>
			{/** slider seccion 5*/}
			<div className="block md:hidden">
				<StartCards></StartCards>
			</div>
		</div>
	);
}
