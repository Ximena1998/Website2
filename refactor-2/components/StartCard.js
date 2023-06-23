'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function StartCards() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: false,
		centerMode: true,
		initialSlide: 0,
		centerPadding: '70px',
		arrows: false
	};
	return (
		<div className="text-white pt-10 pb-32 start-cards bg-[url('../public/bg-star4-small.svg')] bg-no-repeat bg-right-bottom">
			<Slider {...settings}>
				<div>
					<div className="flex justify-center">
						<Image src="/photo1.svg" width={100} height={100} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold text-xl text-center pt-4">$ 51.7 billion</h1>
					<p className=" text-sm w-52 text-center mx-auto pt-4">
						Michael Bloomberg ade a career in politics, but then he retired, scraped the bottom of the barrel, collected
						money and began trading on the stock exchange;
					</p>
				</div>
				<div>
					<div className="flex justify-center">
						<Image src="/photo2.svg" width={100} height={100} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold  text-center pt-4">$ 85 billion</h1>
					<p className=" text-sm w-52 text-center mx-auto pt-4">
						Warren Buffett has raised about $ 85 billion in investment, and his fortune continues to grow;
					</p>
				</div>
				<div>
					<div className="flex justify-center">
						<Image src="/photo3.svg" width={100} height={100} alt="Image 1"></Image>
					</div>
					<h1 className=" font-bold  text-center pt-4">$ 24 billion</h1>
					<p className="text-sm  w-52 text-center mx-auto pt-4">
						Karl Icahn slowly traded on the stock exchange since the 80s and to date has earned about $ 24 billion. His
						favorite assets are shares of Apple and eBay;
					</p>
				</div>
			</Slider>
		</div>
	);
}
