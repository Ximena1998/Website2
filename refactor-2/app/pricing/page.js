import Cards from '../../components/Cards';
import { CheckSvg } from '../../public/icons';

export default function Pricing() {
	return (
		<>
			<div className="md:bg-[url('../public/pricing-bg.svg')] bg-no-repeat">
				<div className="w-1/2 mx-auto text-center md:pt-20">
					<h1 className="text-green-500 font-bold  uppercase md:text-6xl ">Choose Your Plan</h1>
					<p className="text-white md:pt-7 md:text-base md:px-20">
						Let's choose the package that is best for you and explore it happily and cheerfully.
					</p>
				</div>
				<div className="hidden md:block md:py-20">
					<Cards></Cards>
				</div>
				<div className="block md:hidden">
					{/** Card 1 */}
					<div className=" max-w-xs mx-auto h-card p-6 bg-dark border border-green-500 ">
						<h5 className="my-4 text-2xl font-medium text-green-500 ">€250</h5>
						<div className="flex items-baseline text-white">
							<span class="text-xl font-bold tracking-tight">Basic</span>
						</div>
						<ul role="list" className="space-y-2 my-7 ">
							<li className="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Technical Support 24/7</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Expert Chart Analysis</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">7-day free trial of expertly managed account</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Access to 5 markets</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Zero withdrawal fees</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:10 Leverage TEMPORARY (14 business days)</span>
							</li>
							<div className=" absolute bottom-6 mx-8">
								<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-2">
									Select
								</button>
							</div>
						</ul>
					</div>
					{/** Card 2 */}
					<div className=" max-w-xs mx-auto h-card bg-dark border border-green-500 ">
						<div className=" ms-40 text-green-500 text-center py-2 border-s border-b border-green-500 ">
							<span class="text-base ">Most popular</span>
						</div>
						<h5 className="mb-4 text-2xl font-medium px-6 text-green-500 ">€10,000</h5>
						<div className="flex items-baseline px-6 text-white">
							<span class="text-xl font-bold tracking-tight">Silver</span>
						</div>
						<ul role="list" className="space-y-2 my-7 px-6 ">
							<li className="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Personal Market Analyst</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Customized Introductory class</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Monthly Meetings with Analyst</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Technical Assistance 24/7</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">30-day free trial of expertly managed account</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Guaranteed access to 5 financial markets</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1 Monthly Withdrawal at zero cost</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">30% Bonus</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:10 Leverage </span>
							</li>
							<div className="absolute bottom-6 mx-8">
								<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-2">
									Select
								</button>
							</div>
						</ul>
					</div>
					{/** Card 3 */}
					<div className=" max-w-xs mx-auto h-card bg-dark border border-green-500 ">
						<div className=" ms-40 text-green-500 text-center py-2 border-s border-b border-green-500 ">
							<span class="text-base ">Best deal</span>
						</div>
						<h5 className="my-4 text-2xl font-medium px-6 text-green-500 ">€50,000</h5>
						<div className="flex items-baseline px-6 text-white">
							<span class="text-xl font-bold tracking-tight">Gold</span>
						</div>
						<ul role="list" className="space-y-2 my-7 px-6 ">
							<li className="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Personal Market Analyst</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Customized Introductory class</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Weekly Meetings with Analyst</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Technical Assistance 24/7</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Membership of the expertly-managed account</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Guaranteed access to 5 financial markets</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">50% Bonus</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1 Weekly withdrawal at no charge</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:20 Leverage + ACCESS to BASIC EVENTS with 1:50</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:5 Leverage on Expertly Managed Account</span>
							</li>
							<div className="absolute bottom-6 mx-8">
								<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-2">
									Select
								</button>
							</div>
						</ul>
					</div>
					{/** Card 4 */}
					<div className=" max-w-xs mx-auto h-card p-6 bg-dark border border-green-500 ">
						<h5 className="my-4 text-2xl font-medium text-green-500 ">€150,000</h5>
						<div className="flex items-baseline text-white">
							<span class="text-xl font-bold tracking-tight">Platinum</span>
						</div>
						<ul role="list" className="space-y-2 my-7 ">
							<li className="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Personal Analyst</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Weekly Meetings with Analyst</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Technical Assistance 24/7</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">24/5 WhatsApp Access to dealing department</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Guaranteed access to 5 financial markets</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1 Weekly Withdrawal at no charge</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">75% Bonus</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">
									1:50 Leverage + ACCESS FOR VIP SIGNALS + ACCESS For ALL EVENTS
								</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:10 Leverage on Expertly Managed Account</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Access to Platinum Market for ultra-fast execution</span>
							</li>
							<div className="absolute bottom-6 mx-8 ">
								<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-2">
									Select
								</button>
							</div>
						</ul>
					</div>
					{/** Card 5 */}
					<div className=" max-w-xs mx-auto h-card p-6 bg-dark border border-green-500 ">
						<h5 className="my-4 text-2xl font-medium text-green-500 ">By invitation only</h5>
						<div className="flex items-baseline text-white">
							<span class="text-xl font-bold tracking-tight">VIP</span>
						</div>
						<ul role="list" className="space-y-2 my-7 ">
							<li className="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Expertly Managed Account</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1:25 Leverage on Expertly Managed Account</span>
							</li>
							<li class="flex space-x-2">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Zero Withdrawal charges</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">50% Default Trading Insuranse</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">No Swaps</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">Access to dealing department via WhatsApp</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">WhatsApp Access to Analyst</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">1 Monthly Full-Protection Trade</span>
							</li>
							<li class="flex space-x-3">
								<CheckSvg className="w-7 h-7 pt-2 flex-shrink-0" />
								<span class="text-base font-normal text-white">
									1 Monthly Market Research(confirm with your AccountManager)
								</span>
							</li>
							<div className="absolute bottom-6  mx-8">
								<button className="bg-green-500 rounded-sm text-white text-center w-48 md:w-52 h-10 md:mt-2">
									Select
								</button>
							</div>
						</ul>
					</div>
				</div>
				<div className="w-3/4 mx-auto text-center md:pb-20">
					<h1 className="text-white font-bold  uppercase md:text-2xl ">How to choose a plan?</h1>
					<p className="text-white md:pt-7 md:text-base md:px-10">
						We recommend you choose the Free Plan in case you are starting trading. And if you are in a medium level of
						expertise, it is better for you to choose the Standard Plan, which presents you with characteristics that
						will help you give the strategies to trade in a better way. But if you want to trade like an expert, you can
						choose the Premium Plan.
					</p>
				</div>
			</div>
		</>
	);
}
