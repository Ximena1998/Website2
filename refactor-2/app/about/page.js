import TickerTape from '../../components/TickerTape';
export default function About() {
	return (
		<>
			<div className=" bg-about-small bg-about">
				{/** seccion 1*/}
				<div className="px-5 md:justify-end md:grid-cols-1 md:ms-auto md:pe-20 md:w-1/2 md:pt-32 md:pb-48">
					<h2 className="text-white font-bold pt-64 px-8 text-4xl md:px-0  md:text-5xl md:pt-0">How to</h2>
					<h1 className="font-bold text-green-500 px-8 text-5xl pb-52 md:pb-0 md:px-0  md:text-6xl">EARN?</h1>
					<div className="hidden md:block">
						<p className="text-white md:pe-20 md:pt-6">
							You can buy and sell stocks, currencies, gold, etc., for your own benefit, because asset prices change
							every second. You can make money in two directions: on the growth of their value and on the fall.
						</p>
						<p className="text-white md:pe-20 md:pt-6">
							The rules are the same for everyone: buy cheaper, sell more. Or vice versa, sell high and buy low. For
							example, to make money on the growth of stock prices, you buy them, say, at $ 10 per share, and after a
							while, when their price reaches $ 23 per piece - sell. The difference between the buy price and the sell
							price is your profit.
						</p>
					</div>
				</div>
				{/** widget ticker tape*/}
				<div className="bg-dark block">
					<TickerTape></TickerTape>
				</div>
				{/*seccion 1 para version movil*/}
				<div className="block px-5 pt-14 md:hidden">
					<p className="text-white ">
						You can buy and sell stocks, currencies, gold, etc., for your own benefit, because asset prices change every
						second. You can make money in two directions: on the growth of their value and on the fall.
					</p>
					<p className="text-white pt-6">
						The rules are the same for everyone: buy cheaper, sell more. Or vice versa, sell high and buy low. For
						example, to make money on the growth of stock prices, you buy them, say, at $ 10 per share, and after a
						while, when their price reaches $ 23 per piece - sell. The difference between the buy price and the sell
						price is your profit.
					</p>
				</div>
				{/** seccion 2*/}
				<div className="md:py-32 bg-about-small2 ">
					<div className="w-60 pe-5 md:w-1/3  md:px-20 grid-cols-1 justify-end ms-auto">
						<h2 className="text-white font-bold md:text-3xl">Powerful platform</h2>
						<p className="text-white text-base md:pe-5 md:pt-10">
							Powerful and easy to use platform Everything we do, we do for you. Our innovative platform makes investing
							more efficient, accessible and intuitive. You can make money on various metals, currency pairs,
							cryptocurrencies. All in your hands. Online trading is buying and selling stocks online. No human
							interaction. This is the most convenient and economical way to trade.
						</p>
					</div>
					<div className='block md:hidden'>
					<div className="w-72 mt-96 pt-24 mx-auto ps-20">
						<p className="text-white text-base ">
							Online trading is buying and selling stocks online. No human interaction. This is the most convenient and
							economical way to trade.
						</p>
					</div>
				</div>
				</div>
				{/** seccion 3*/}
				<div className=" py-14 md:px-20 justify-end ms-auto md:py-24">
					<h2 className="text-white font-bold text-center text-xl md:text-3xl">Make money work for you</h2>
					<div className="justify-center flex">
						<button className="bg-green-500 rounded-sm text-white text-center  w-48 md:w-52 h-10 mt-8">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
