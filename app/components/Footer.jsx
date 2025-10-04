export default function Footer() {
	return (
		<>
			{/* <!-- footer started --> */}
			<footer className="footer-section bg-title">
				<div className="container">
					<div className="contact-info-area">
						<div
							className="contact-info-items"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="200"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-phone-volume"></i>
							</div>
							<div className="content">
								<p>Call Us 7/24</p>
								<h3>
									<a href="tel:+2085550112">+208-555-0112</a>
								</h3>
							</div>
						</div>

						<div
							className="contact-info-items"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="400"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-envelopes"></i>
							</div>
							<div className="content">
								<p>Make a Quote</p>
								<h3>
									<a href="mailto:example@gmail.com">example@gmail.com</a>
								</h3>
							</div>
						</div>
						<div
							className="contact-info-items"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="600"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-headset"></i>
							</div>
							<div className="content">
								<p>Opening Hour</p>
								<h3>Sunday - Fri: 9 aM - 6 pM</h3>
							</div>
						</div>
						<div
							className="contact-info-items"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="800"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-street-view"></i>
							</div>
							<div className="content">
								<p>Location</p>
								<h3>4517 Washington ave.</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-widgets-wrapper">
					<div className="container">
						<div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
							<div
								className="single-footer-widget"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="widget-head">
									<a href="/">
										<img
											loading="lazy"
											src="assets/images/logo/white-logo.svg"
											alt="logo-img"
										/>
									</a>
								</div>
								<div className="footer-content">
									<p>
										Phasellus ultricies aliquam volutpat ullamcorper laoreet
										neque, a lacinia curabitur lacinia mollis
									</p>
									<div className="social-icon flex items-center">
										<a href="https://www.facebook.com/">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="https://x.com/">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="https://www.youtube.com/">
											<i className="fab fa-youtube"></i>
										</a>
										<a href="https://www.linkedin.com/">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
							<div
								className="lg:pl-[3rem]"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h3 className="style1">Costumers Support</h3>
									</div>
									<ul className="list-area">
										<li>
											<a className="style1" href="shop-left-sidebar.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Store List
											</a>
										</li>
										<li>
											<a className="style1" href="contact.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Opening Hours
											</a>
										</li>
										<li>
											<a className="style1" href="contact.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Contact Us
											</a>
										</li>
										<li>
											<a className="style1" href="contact.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Return Policy
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="lg:pl-[3rem]"
								data-aos="fade-up"
								data-aos-delay="600"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h3 className="style1">Quick Links</h3>
									</div>
									<ul className="list-area">
										<li>
											<a className="style1" href="about.html">
												<i className="fa-solid fa-chevrons-right"></i>
												About Us
											</a>
										</li>
										<li>
											<a className="style1" href="testimonial.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Testimonial
											</a>
										</li>
										<li>
											<a className="style1" href="faq.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Faq
											</a>
										</li>
										<li>
											<a className="style1" href="blog.html">
												<i className="fa-solid fa-chevrons-right"></i>
												Blog
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="single-footer-widget"
								data-aos="fade-up"
								data-aos-delay="800"
							>
								<div className="widget-head">
									<h3 className="style1">Newsletter</h3>
								</div>
								<div className="footer-content">
									<p>
										Sign up to searing weekly newsletter to get the latest
										updates.
									</p>
									<div className="footer-input">
										<input
											type="email"
											id="email2"
											placeholder="Enter Email Address"
										/>
										<button className="newsletter-btn" type="submit">
											<i className="fa-regular fa-paper-plane"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="footer-wrapper flex items-center justify-between">
							<p>
								© All Copyright 2024 by <a href="index.html">EcomArts</a>
							</p>
							<ul className="credit-card-logo">
								<li>
									<a href="contact.html">
										<img
											loading="lazy"
											src="assets/images/footer/visa-logo.png"
											alt="img"
										/>
									</a>
								</li>
								<li>
									<a href="contact.html">
										<img
											loading="lazy"
											src="assets/images/footer/mastercard-logo.png"
											alt="img"
										/>
									</a>
								</li>
								<li>
									<a href="contact.html">
										<img
											loading="lazy"
											src="assets/images/footer/payoneer-logo.png"
											alt="img"
										/>
									</a>
								</li>
								<li>
									<a href="contact.html">
										<img
											loading="lazy"
											src="assets/images/footer/affirm-logo.png"
											alt="img"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- footer ended --> */}
		</>
	);
}
