'use client';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { CircleSvg, DowloandSvg, EyesSvg, MusicSvg, PuzzleSvg, StartSvg, WorldSvg } from '../public/icons';
export default function Sections() {
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		swipeToSlide: false,
		centerMode: false,
		initialSlide: 0,
		centerPadding: '20px',
		arrows: false
	};
	const [activeSection, setActiveSection] = useState('section1');
	const sectionIdRef = useRef('');
	const handleSectionChange = (sectionId) => {
		sectionIdRef.current = sectionId;
		setActiveSection(sectionId);
	};

	return (
		<>
			<div className="text-center md:flex md:pt-24 md:pb-9">
				<div>
					<ul>
						<li className="text-white font-bold text-lg underline underline-offset-8 decoration-2 decoration-green-500 md:me-16 md: md:text-2xl">
							Our advantages
						</li>
					</ul>
				</div>
				<div className="hidden md:block">
					<ul className="  flex items-center ">
						<a
							className=" mx-4 md:me-16 md:ms-5 lg:mx-9 2xl:me-14 ms-10"
							onClick={() => handleSectionChange('section1')}
						>
							<EyesSvg>
								<path
									className={activeSection === 'section1' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="M1.5 9.797S6.045.706 14 .706s12.5 9.091 12.5 9.091-4.545 9.09-12.5 9.09-12.5-9.09-12.5-9.09Zm9.091 0A3.409 3.409 0 0 0 14 13.206l-3.409-3.409Zm6.819 0A3.41 3.41 0 0 0 14 6.387l3.41 3.41Zm3.313 6.723L7.26 3.058 20.723 16.52Z"
									clipRule="evenodd"
								/>
							</EyesSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section2')}>
							<WorldSvg>
								<path
									className={activeSection === 'section2' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="M.5 13.456h25M13 .956c6.904 0 12.5 5.596 12.5 12.5 0 6.903-5.596 12.5-12.5 12.5a19.125 19.125 0 0 0 5-12.5 19.125 19.125 0 0 0-5-12.5Zm0 0a19.125 19.125 0 0 0-5 12.5 19.125 19.125 0 0 0 5 12.5l-.35-.005C5.908 25.766.5 20.242.5 13.456.5 6.552 6.096.956 13 .956Z"
								/>
							</WorldSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section3')}>
							<DowloandSvg>
								<path
									className={activeSection === 'section3' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="m8 15.956 5 5 5-5m0-5h7.5v15H.5v-15H18Zm-5 10v-20 20Z"
								/>
							</DowloandSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section4')}>
							<PuzzleSvg>
								<path
									className={activeSection === 'section4' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="M.5 13.456v-7.5h5.625v-1.25a3.75 3.75 0 1 1 7.5 0v1.25h5.625v7.5h2.5a3.75 3.75 0 1 1 0 7.5h-2.5v5H.5v-5H3a3.75 3.75 0 1 0 0-7.5H.5Z"
									clipRule="evenodd"
								/>
							</PuzzleSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section5')}>
							<CircleSvg>
								<path
									className={activeSection === 'section5' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="m2.974 6.56 4.76 4.76-4.76-4.76Zm7.89 1.63L6.105 3.43l4.759 4.76Zm7.402 3.13 4.76-4.76-4.76 4.76Zm1.629-7.89-4.76 4.76 4.76-4.76Zm-4.76 15.292 4.76 4.76-4.76-4.76Zm7.891 1.63-4.76-4.76 4.76 4.76Zm-15.292-4.76-4.76 4.76 4.76-4.76Zm-1.629 7.89 4.759-4.76-4.759 4.76ZM13 19.081A5.625 5.625 0 1 0 13 7.83a5.625 5.625 0 0 0 0 11.25Zm0 6.875c6.904 0 12.5-5.596 12.5-12.5 0-6.903-5.596-12.5-12.5-12.5S.5 6.553.5 13.456c0 6.904 5.596 12.5 12.5 12.5Z"
									clipRule="evenodd"
								/>
							</CircleSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section6')}>
							<StartSvg>
								<path
									className={activeSection === 'section6' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="m15 20.372-7.709 5.75 2.959-9.25-7.75-5.75h9.584L15 1.956l2.916 9.166H27.5l-7.75 5.75 2.959 9.25L15 20.372Z"
									clipRule="evenodd"
								/>
							</StartSvg>
						</a>
						<a className=" mx-4 md:me-16 ms-0 lg:mx-9 2xl:mx-14 " onClick={() => handleSectionChange('section7')}>
							<MusicSvg>
								<path
									className={activeSection === 'section7' ? 'svg-active' : 'svg-inactive'}
									strokeLinecap="square"
									d="M16.125 18.456v-10 10ZM13 17.206v-7.5 7.5Zm-3.125 3.75v-15 15ZM6.75 15.33v-3.75 3.75Zm12.5-.625v-2.5 2.5ZM13 25.956c6.902 0 12.5-5.598 12.5-12.5 0-6.903-5.598-12.5-12.5-12.5S.5 6.553.5 13.456c0 6.902 5.598 12.5 12.5 12.5Z"
									clipRule="evenodd"
								/>
							</MusicSvg>
						</a>
					</ul>
				</div>
			</div>
			<div className="pt-8 block md:hidden">
				<Slider {...settings} className="bg-linear pt-2">
					<div className=" me-6 ms-6 mt-1" onClick={() => handleSectionChange('section1')}>
						<EyesSvg>
							<path
								className={activeSection === 'section1' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="M1.5 9.797S6.045.706 14 .706s12.5 9.091 12.5 9.091-4.545 9.09-12.5 9.09-12.5-9.09-12.5-9.09Zm9.091 0A3.409 3.409 0 0 0 14 13.206l-3.409-3.409Zm6.819 0A3.41 3.41 0 0 0 14 6.387l3.41 3.41Zm3.313 6.723L7.26 3.058 20.723 16.52Z"
								clipRule="evenodd"
							/>
						</EyesSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section2')}>
						<WorldSvg>
							<path
								className={activeSection === 'section2' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="M.5 13.456h25M13 .956c6.904 0 12.5 5.596 12.5 12.5 0 6.903-5.596 12.5-12.5 12.5a19.125 19.125 0 0 0 5-12.5 19.125 19.125 0 0 0-5-12.5Zm0 0a19.125 19.125 0 0 0-5 12.5 19.125 19.125 0 0 0 5 12.5l-.35-.005C5.908 25.766.5 20.242.5 13.456.5 6.552 6.096.956 13 .956Z"
							/>
						</WorldSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section3')}>
						<DowloandSvg>
							<path
								className={activeSection === 'section3' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="m8 15.956 5 5 5-5m0-5h7.5v15H.5v-15H18Zm-5 10v-20 20Z"
							/>
						</DowloandSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section4')}>
						<PuzzleSvg>
							<path
								className={activeSection === 'section4' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="M.5 13.456v-7.5h5.625v-1.25a3.75 3.75 0 1 1 7.5 0v1.25h5.625v7.5h2.5a3.75 3.75 0 1 1 0 7.5h-2.5v5H.5v-5H3a3.75 3.75 0 1 0 0-7.5H.5Z"
								clipRule="evenodd"
							/>
						</PuzzleSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section5')}>
						<CircleSvg>
							<path
								className={activeSection === 'section5' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="m2.974 6.56 4.76 4.76-4.76-4.76Zm7.89 1.63L6.105 3.43l4.759 4.76Zm7.402 3.13 4.76-4.76-4.76 4.76Zm1.629-7.89-4.76 4.76 4.76-4.76Zm-4.76 15.292 4.76 4.76-4.76-4.76Zm7.891 1.63-4.76-4.76 4.76 4.76Zm-15.292-4.76-4.76 4.76 4.76-4.76Zm-1.629 7.89 4.759-4.76-4.759 4.76ZM13 19.081A5.625 5.625 0 1 0 13 7.83a5.625 5.625 0 0 0 0 11.25Zm0 6.875c6.904 0 12.5-5.596 12.5-12.5 0-6.903-5.596-12.5-12.5-12.5S.5 6.553.5 13.456c0 6.904 5.596 12.5 12.5 12.5Z"
								clipRule="evenodd"
							/>
						</CircleSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section6')}>
						<StartSvg>
							<path
								className={activeSection === 'section6' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="m15 20.372-7.709 5.75 2.959-9.25-7.75-5.75h9.584L15 1.956l2.916 9.166H27.5l-7.75 5.75 2.959 9.25L15 20.372Z"
								clipRule="evenodd"
							/>
						</StartSvg>
					</div>
					<div className="mx-6" onClick={() => handleSectionChange('section7')}>
						<MusicSvg>
							<path
								className={activeSection === 'section7' ? 'svg-active' : 'svg-inactive'}
								strokeLinecap="square"
								d="M16.125 18.456v-10 10ZM13 17.206v-7.5 7.5Zm-3.125 3.75v-15 15ZM6.75 15.33v-3.75 3.75Zm12.5-.625v-2.5 2.5ZM13 25.956c6.902 0 12.5-5.598 12.5-12.5 0-6.903-5.598-12.5-12.5-12.5S.5 6.553.5 13.456c0 6.902 5.598 12.5 12.5 12.5Z"
								clipRule="evenodd"
							/>
						</MusicSvg>
					</div>
				</Slider>
			</div>
			<div>
				<section id="section1" className={`section ${activeSection === 'section1' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">No brokers and intermediaries</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							You don’t need to pay a commission to brokers, all that you earn is yours!
						</p>
					</div>
				</section>
				<section id="section2" className={`section ${activeSection === 'section2' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">News & Analytics</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							The latest news in the world of trading, financial markets and analytics, study and create your own
							strategy.
						</p>
					</div>
				</section>
				<section id="section3" className={`section ${activeSection === 'section3' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">Convenient withdrawal of funds</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							Fast withdrawal of funds, a large selection of payment systems.
						</p>
					</div>
				</section>
				<section id="section4" className={`section ${activeSection === 'section4' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">Demo account</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							Open a demo account for $ 5,000 and learn to trade, without losing your money.
						</p>
					</div>
				</section>
				<section id="section5" className={`section ${activeSection === 'section5' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">Individual support</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							A team of professionals who will answer any of your questions.
						</p>
					</div>
				</section>
				<section id="section6" className={`section ${activeSection === 'section6' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">Convenient, modern platform</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							We have created an incredibly convenient and modern platform, the most important information is always in
							front of your eyes.
						</p>
					</div>
				</section>
				<section id="section7" className={`section ${activeSection === 'section7' ? 'active' : ''}`}>
					<div className="w-full text-center">
						<h1 className="font-bold text-white text-xl pt-5 md:text-2xl ">200+ different assets</h1>
						<p className="font-normal text-gray-400 text-sm mx-auto w-72 py-3 md:text-base ">
							You can make money on various metals, currency pairs, cryptocurrencies. All in your hands.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
