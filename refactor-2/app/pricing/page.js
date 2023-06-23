import Cards from '../../components/Cards';
import CardsSmall from '../../components/CardsSmall';
import TickerTape from '../../components/TickerTape';
export default function Pricing() {
	return (
		<>
			<div className=" bg-pricing-small md:bg-[url('../public/pricing-bg.svg')] bg-no-repeat">
				{/**seccion 1 */}
				<div className=" w-3/4 pt-32 md:text-center md:w-1/2 mx-auto  md:pt-20">
					<h1 className="text-green-500 font-bold text-4xl  uppercase md:text-6xl ">Choose Your Plan</h1>
					<p className="text-white text-sm pt-5 pe-10 md:pt-7 md:text-sm md:px-20">
						Let's choose the package that is best for you and explore it happily and cheerfully.
					</p>
				</div>
				{/**Cards para la version web con slider */}
				<div className="hidden md:block md:py-20">
					<Cards></Cards>
				</div>
				{/**Cards para la version movil */}
				<div className="block pt-14   md:hidden">
					<CardsSmall></CardsSmall>
				</div>
				{/**seccion2 */}
				<div className=" w-full text-center py-14  md:pt-0 md:w-3/4 mx-auto md:pb-20">
					<h1 className="text-white font-bold text-xl md:text-2xl ">How to choose a plan?</h1>
					<p className="text-white text-sm pt-5 px-5 md:pt-7 md:text-sm md:px-10">
						We recommend you choose the Free Plan in case you are starting trading. And if you are in a medium level of
						expertise, it is better for you to choose the Standard Plan, which presents you with characteristics that
						will help you give the strategies to trade in a better way. But if you want to trade like an expert, you can
						choose the Premium Plan.
					</p>
				</div>
				{/** widget ticker tape*/}
				<div className="hidden">
					<TickerTape></TickerTape>
				</div>
			</div>
		</>
	);
}
