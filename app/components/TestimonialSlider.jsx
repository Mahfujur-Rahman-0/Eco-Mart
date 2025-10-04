"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TestimonialSlider() {
	return (
		<>
			<div className="container">
				<Swiper
					speed={2000}
					modules={[Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={3}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						320: {
							slidesPerView: 1, // mobile
						},
						768: {
							slidesPerView: 2, // tablet
						},
						1024: {
							slidesPerView: 2, // desktop
						},
						1280: {
							slidesPerView: 3, // large desktop
						},
					}}
				>
					<SwiperSlide>
						<div className="testimonial-card-items-one">
							<p>
								One of the most powerful takeaways from this book is the
								emphasis on adopting a mindset of abundance and possibility. The
								idea that we can choose to see opportunities rather than
								limitations is a game-changer.
							</p>
							<div className="client-info-wrapper d-flex align-items-center justify-content-between">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{
											backgroundImage:
												"url('assets/images/homepage-1/testimonialProfileThumb1_1.jpg')",
										}}
									>
										<div className="icon">
											<img
												loading="lazy"
												className="shape"
												src="assets/images/shape/shape.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="content">
										<h3>Ronald Richards</h3>
										<span>Marketing Coordinator</span>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
									</div>
								</div>
								{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo1.png" alt="">
                                    </div> --> */}
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-card-items-one">
							<p>
								The idea that we can choose to see opportunities rather than
								limitations is a game-changer. The book encourages readers to
								step out of their comfort zones and embrace a more positive
								outlook on life.
							</p>
							<div className="client-info-wrapper d-flex align-items-center justify-content-between">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{
											backgroundImage:
												"url('assets/images/homepage-1/testimonialProfileThumb1_2.jpg')",
										}}
									>
										<div className="icon">
											<img
												loading="lazy"
												className="shape"
												src="assets/images/shape/shape.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="content">
										<h3>Dianne Russell</h3>
										<span>Project Manager</span>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
									</div>
								</div>
								{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo2.png" alt="">
                                    </div> --> */}
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-card-items-one">
							<p>
								{`"The Art of Possibility" by Rosamund Stone Zander and
											Benjamin Zander is a transformative read that challenges
											conventional thinking and opens up new possibilities. As a
											reader, I found myself profoundly .`}
							</p>
							<div className="client-info-wrapper d-flex align-items-center justify-content-between">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{
											backgroundImage:
												"url('assets/images/homepage-1/testimonialProfileThumb1_3.jpg')",
										}}
									>
										<div className="icon">
											<img
												loading="lazy"
												className="shape"
												src="assets/images/shape/shape.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="content">
										<h3>Ronald Richards</h3>
										<span>Marketing Coordinator</span>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
									</div>
								</div>
								{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo1.png" alt="">
                                    </div> --> */}
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-card-items-one">
							<p>
								{`From the very first chapter, the authors engage readers
											with inspiring stories and practical insights. Benjamin
											Zander's experiences as a conductor bring a unique
											perspective to leadership .`}
							</p>
							<div className="client-info-wrapper d-flex align-items-center justify-content-between">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{
											backgroundImage:
												"url('assets/images/homepage-1/testimonialProfileThumb1_2.jpg')",
										}}
									>
										<div className="icon">
											<img
												loading="lazy"
												className="shape"
												src="assets/images/shape/shape.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="content">
										<h3>Ronald Richards</h3>
										<span>Marketing Coordinator</span>
										<div className="star">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-regular fa-star"></i>
											<i className="fa-regular fa-star"></i>
										</div>
									</div>
								</div>
								{/* <!-- <div className="logo">
                                        <img loading="lazy" src="assets/img/homepage-1/logo2.png" alt="">
                                    </div> --> */}
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
