import Image from "next/image";
import Partials from "../../../components/Partials";
import googleIcon from "../../../../public/assets/images/auth/googleIcon.png";
import appleIcon from "../../../../public/assets/images/auth/appleIcon.png";
import loginThumb from "../../../../public/assets/images/auth/loginThumb.jpg";
export default function SignIn() {
	return (
		<>
			{/* <!-- register started --> */}
			<section className="register-section fix section-padding">
				<div className="container max-xl:max-w-3xl">
					<div className="register-wrapper">
						<div className="grid gap-x-12 lg:grid-cols-2">
							<div className="auth-contact-info-area">
								<div className="contact-content">
									<h2 className="contact-content__title" data-aos="fade-up">
										Get Started Now
									</h2>
									<p
										className="contact-content__subtitle"
										data-aos="fade-up"
										data-aos-delay="100"
									>
										Enter your Credentials to access your account
									</p>
									<form
										action="https://ecomartstw.baseecom.com/main-files/contact.php"
										id="contact-form"
										method="POST"
										className="contact-form-items"
									>
										<div className="grid gap-6">
											<div
												className="form-clt"
												data-aos="fade-up"
												data-aos-delay="200"
											>
												<span>Your name*</span>
												<input
													type="text"
													name="name"
													id="name"
													placeholder="Enter your name"
												/>
											</div>
											<div
												className="form-clt"
												data-aos="fade-up"
												data-aos-delay="300"
											>
												<span>Email address*</span>
												<input
													type="text"
													name="email"
													id="email"
													placeholder="Enter your email"
												/>
											</div>
											<div
												className="form-clt"
												data-aos="fade-up"
												data-aos-delay="400"
											>
												<span>Password*</span>
												<input
													type="text"
													name="number"
													id="password"
													placeholder="********"
												/>
											</div>
											<div className="" data-aos="fade-up" data-aos-delay="500">
												<input
													id="reviewcheck"
													name="reviewcheck"
													type="checkbox"
													hidden
												/>
												<label
													className="form-check-label"
													htmlFor="reviewcheck"
												>
													I agree to the
													<span>terms & policy</span>
												</label>
											</div>
											<div data-aos="fade-up" data-aos-delay="600">
												<button type="submit" className="theme-btn style6">
													Sign Up
												</button>
											</div>
										</div>
									</form>

									<div
										className="or-border"
										data-aos="fade-up"
										data-aos-delay="700"
									>
										<div className="border"></div>
										<p>Or</p>
									</div>

									<div
										className="button-items-1"
										data-aos="fade-up"
										data-aos-delay="800"
									>
										<a href="#!">
											<div className="button-items-1__google-button">
												<Image loading="lazy" src={googleIcon} alt="icon" />
												<p>Sign in with Google</p>
											</div>
										</a>

										<a href="#!">
											<div className="button-items-1__apple-button">
												<Image loading="lazy" src={appleIcon} alt="icon" />
												<p>Sign in with Apple</p>
											</div>
										</a>
									</div>
									<h5
										className="contact-content__logtitle text-center"
										data-aos="fade-up"
										data-aos-delay="900"
									>
										Have an account? <a href="login.html">Sign Up</a>
									</h5>
								</div>
							</div>
							<div
								className="register-thumb hidden xl:block"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<Image loading="lazy" src={loginThumb} alt="register-thumb" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- register ended --> */}
			<Partials />
		</>
	);
}
