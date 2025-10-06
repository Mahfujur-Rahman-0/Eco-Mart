"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import shopDetailsThumb from "../../public/assets/images/shop/shop-details-thumb.png";

export default function SingleProductSlider() {
	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={5}
				slidesPerView={1}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
				}}
			>
				<SwiperSlide>
					<Image className="mx-auto" src={shopDetailsThumb} alt="thumb" />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="mx-auto" src={shopDetailsThumb} alt="thumb" />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="mx-auto" src={shopDetailsThumb} alt="thumb" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
