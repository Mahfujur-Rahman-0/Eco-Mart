import Partials from "../../../components/Partials";

export default function ContactUs() {
	return (
		<>
			{/* <!-- contact started --> */}
			<section className="contact-section fix section-padding">
				<div className="container max-w-[1230px]">
					<div className="contact-section-wrapper">
						<div className="grid xl:grid-cols-12">
							<div className="xl:col-span-5">
								<div className="contact-info" data-aos="fade-up">
									<div className="contact-info__contact">
										<h5 className="contact-info__contact--title">
											Contact Information
										</h5>
										<p className="contact-info__contact--subtitle">
											Say something to start a live chat!
										</p>
										<div className="contact-info__contact--contact-items">
											<ul className="contact-info-items">
												<li>
													<i className="fa-solid fa-phone"></i>
													<a href="tel:2086660112">+1012 3456 789</a>
												</li>

												<li>
													<i className="fa-regular fa-envelope"></i>
													<a href="mailto:infotech@gmail.com">demo@gmail.com</a>
												</li>
												<li>
													<i className="fas fa-map-marker-alt"></i>
													<a href="#">
														132 Dartmouth Street Boston, <br />
														Massachusetts 02156 United States
													</a>
												</li>
											</ul>
										</div>
										<div className="contact-info__contact--social-icon flex items-center">
											<a href="https://www.facebook.com/">
												<i className="fab fa-facebook-f"></i>
											</a>
											<a href="https://x.com/">
												<i className="fab fa-twitter"></i>
											</a>
											<a href="https://www.linkedin.com/">
												<i className="fab fa-linkedin-in"></i>
											</a>
										</div>
									</div>
									<div className="contact-info__icon">
										<div className="icon-1">
											<img
												loading="lazy"
												src="assets/images/contact/shape-1.png"
												alt="icon"
											/>
										</div>
										<div className="icon-2">
											<img
												loading="lazy"
												src="assets/images/contact/shape-2.png"
												alt="icon"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="xl:col-span-7">
								<div className="contact-form-items-1">
									<form
										action="https://ecomartstw.baseecom.com/main-files/contact.php"
										id="contact-form-1"
										method="POST"
									>
										<div className="grid gap-6 xl:grid-cols-2">
											<div
												className="form-clt-1 mb-4"
												data-aos="fade-up"
												data-aos-delay="100"
											>
												<label for="name">First Name</label>
												<input
													type="text"
													name="name"
													id="name2"
													placeholder="John"
												/>
											</div>
											<div
												className="form-clt-1 mb-4"
												data-aos="fade-up"
												data-aos-delay="200"
											>
												<label for="name">Last Name</label>
												<input
													type="text"
													name="name"
													id="name"
													placeholder="Doe"
												/>
											</div>
											<div
												className="form-clt-1"
												data-aos="fade-up"
												data-aos-delay="300"
											>
												<label for="name">Email</label>
												<input
													type="text"
													name="email"
													id="email212"
													placeholder="Email"
												/>
											</div>
											<div
												className="form-clt-1"
												data-aos="fade-up"
												data-aos-delay="400"
											>
												<label for="name">Phone Number</label>
												<input
													type="text"
													name="phone"
													id="phone"
													placeholder="Phone number"
												/>
											</div>
											<div
												className="xl:col-span-2"
												data-aos="fade-up"
												data-aos-delay="500"
											>
												<div className="subjects">
													<h6>Select Subject?</h6>
													<div className="checkbox">
														<label className="checkbox-single">
															<span className="checkbox-area">
																<input type="checkbox" />
																<span className="checkmark d-center"></span>
																<span className="text">General Inquiry</span>
															</span>
														</label>
														<label className="checkbox-single">
															<span className="checkbox-area">
																<input type="checkbox" />
																<span className="checkmark d-center"></span>
																<span className="text">General Inquiry</span>
															</span>
														</label>
														<label className="checkbox-single">
															<span className="checkbox-area">
																<input type="checkbox" />
																<span className="checkmark d-center"></span>
																<span className="text">General Inquiry</span>
															</span>
														</label>
														<label className="checkbox-single">
															<span className="checkbox-area">
																<input type="checkbox" />
																<span className="checkmark d-center"></span>
																<span className="text">General Inquiry</span>
															</span>
														</label>
													</div>
												</div>
											</div>
											<div
												className="xl:col-span-2"
												data-aos="fade-up"
												data-aos-delay="600"
											>
												<div className="form-clt-1">
													<label for="name">Message</label>
													<textarea
														name="message"
														id="message"
														placeholder="Write your message.."
													></textarea>
												</div>
											</div>
											<div
												className="btn-wrapper flex justify-end xl:col-span-2"
												data-aos="fade-up"
												data-aos-delay="700"
											>
												<a className="theme-btn style6" href="cart.html">
													Send Message
												</a>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- contact ended --> */}

			{/* <!-- map started --> */}
			<div className="contact-map-section fix">
				<div className="map-items">
					<div className="googpemap">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
							style={{ border: "0" }}
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
			{/* <!-- map ended --> */}
			<Partials />
		</>
	);
}
