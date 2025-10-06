import Image from "next/image";
import Partials from "../../../components/Partials";
import googleIcon from "../../../../public/assets/images/auth/googleIcon.png";
import appleIcon from "../../../../public/assets/images/auth/appleIcon.png";
import loginThumb from "../../../../public/assets/images/auth/loginThumb.jpg";

export default function Login() {
	return (
		<>
			{/* <!-- login started --> */}
			<section className="login-section fix section-padding">
				<div className="container">
					<div className="login-wrapper">
						<div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
							<div className="auth-contact-info-area">
								<div className="contact-content">
									<h2 className="contact-content__title">Get Started Now</h2>
									<p className="contact-content__subtitle">
										Enter your Credentials to access your account
									</p>
									<form
										action="https://ecomartstw.baseecom.com/main-files/contact.php"
										id="contact-form"
										method="POST"
										className="contact-form-items"
									>
										<div className="grid gap-6">
											<div className="form-clt" data-aos="fade-up">
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
												data-aos-delay="150"
											>
												<span>Password*</span>
												<input
													type="text"
													name="number"
													id="password"
													placeholder="********"
												/>
											</div>
											<div
												className="form-check"
												data-aos="fade-up"
												data-aos-delay="300"
											>
												<div className="">
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
											</div>
											<div data-aos="fade-up" data-aos-delay="450">
												<button type="submit" className="theme-btn style6">
													Sign In
												</button>
											</div>
										</div>
									</form>

									<div
										className="or-border"
										data-aos="fade-up"
										data-aos-delay="650"
									>
										<div className="border"></div>
										<p>Or</p>
									</div>

									<div
										className="button-items-1"
										data-aos="fade-up"
										data-aos-delay="750"
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
										data-aos-delay="800"
									>
										{"Don't Have an account?"}
										<a href="register.html">Sign Up</a>
									</h5>
								</div>
							</div>
							<div className="hidden lg:block">
								<div
									className="login-thumb"
									data-aos="fade-up"
									data-aos-delay="150"
								>
									<Image loading="lazy" src={loginThumb} alt="register-thumb" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- login ended --> */}
			<Partials />
		</>
	);
}
