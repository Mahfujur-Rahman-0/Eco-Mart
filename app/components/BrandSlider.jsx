"use client";

import brandLogo2_1 from "../../public/assets/images/homepage-2/brand-logo2_1.png";
import brandLogo2_2 from "../../public/assets/images/homepage-2/brand-logo2_2.png";
import brandLogo2_3 from "../../public/assets/images/homepage-2/brand-logo2_3.png";
import brandLogo2_4 from "../../public/assets/images/homepage-2/brand-logo2_4.png";
import brandLogo2_5 from "../../public/assets/images/homepage-2/brand-logo2_5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function BrandSlider() {
	return (
		<>
			<Swiper
				speed={2000}
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={5}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1, // mobile
					},
					640: {
						slidesPerView: 2, // small tablet
					},
					768: {
						slidesPerView: 3, // tablet
					},
					1024: {
						slidesPerView: 4, // desktop
					},
					1280: {
						slidesPerView: 5, // large desktop
					},
				}}
			>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_1} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_2} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_3} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_4} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_5} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_1} alt="EcomArts" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="brand-img-two">
						<Image loading="lazy" src={brandLogo2_2} alt="EcomArts" />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
