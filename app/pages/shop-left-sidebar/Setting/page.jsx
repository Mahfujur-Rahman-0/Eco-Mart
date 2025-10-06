import Partials from "../../../components/Partials";

export default function Setting() {
	return (
		<>
			{/* <!-- settings started --> */}
			<div className="dashboard-section section-padding fix">
				<div className="container">
					<div className="grid gap-6 xl:grid-cols-4">
						<div className="dashboard-navigation-sidebar">
							<h3>Navigation</h3>
							<div>
								<div
									className="flex flex-col nav-pills"
									id="v-pills-tab"
									role="tablist"
								>
									<a
										href="dashboard.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-sharp fa-solid fa-grid-2"></i>Dashboard
									</a>

									<a
										href="order-history.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-sync"></i>Order History
									</a>

									<a
										href="order-details-one.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-solid fa-list"></i>Order Details
									</a>

									<a
										href="wishlist.html"
										className="nav-link"
										type="button"
										role="tab"
									>
										<i className="fa-light fa-heart"></i>Wishlist
									</a>

									<a
										href="settings.html"
										className="nav-link active"
										type="button"
										role="tab"
									>
										<i className="fa-regular fa-gear"></i>Settings
									</a>

									<button className="nav-link" type="button" role="tab">
										<i className="fa-solid fa-sign-out-alt"></i>Log Out
									</button>
								</div>
							</div>
						</div>
						<div className="xl:col-span-3">
							<div className="container">
								{/* <!-- Account Settings --> */}
								<div className="account-settings">
									<h4 className="section-title">Account Settings</h4>
									<div className="form-wrapper">
										<div className="grid gap-6 md:grid-cols-3">
											<div className="md:col-span-2">
												<form>
													<div className="grid gap-3 md:grid-cols-2">
														<div>
															<label for="firstName" className="form-label">
																First Name
															</label>
															<input
																type="text"
																className="form-control"
																id="firstName"
																placeholder="Dianne"
															/>
														</div>
														<div>
															<label for="lastName" className="form-label">
																Last Name
															</label>
															<input
																type="text"
																className="form-control"
																id="lastName"
																placeholder="Russell"
															/>
														</div>
														<div className="md:col-span-2">
															<label for="email" className="form-label">
																Email
															</label>
															<input
																type="email"
																className="form-control"
																id="email"
																placeholder="dianne.russell@gmail.com"
															/>
														</div>
														<div className="md:col-span-2">
															<label for="phoneNumber" className="form-label">
																Phone Number
															</label>
															<input
																type="tel"
																className="form-control"
																id="phoneNumber"
																placeholder="(603) 805-0123"
															/>
														</div>
													</div>
													<button type="submit" className="theme-btn mt-4">
														Save Changes
													</button>
												</form>
											</div>
											<div className="text-center">
												<div className="profile-image-wrapper">
													<img
														loading="lazy"
														src="assets/images/dashboard/dashboard-settings-profile.png"
														alt="Profile"
														className="img-fluid rounded-circle mb-3"
													/>
													<button className="theme-btn">Choose Image</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <!-- Billing Address --> */}
								<div className="billing-address mt-6">
									<h4 className="section-title">Billing Address</h4>
									<div className="form-wrapper">
										<div className="mb-4">
											<form className="grid gap-4 md:grid-cols-12">
												<div className="md:col-span-6">
													<label for="billingFirstName" className="form-label">
														First Name
													</label>
													<input
														type="text"
														className="form-control"
														id="billingFirstName"
														placeholder="Dianne"
													/>
												</div>
												<div className="md:col-span-6">
													<label for="billingLastName" className="form-label">
														Last Name
													</label>
													<input
														type="text"
														className="form-control"
														id="billingLastName"
														placeholder="Dianne"
													/>
												</div>
												<div className="md:col-span-6">
													<label for="companyName" className="form-label">
														Company Name (optional)
													</label>
													<input
														type="text"
														className="form-control"
														id="companyName"
														placeholder="Zakirsoft"
													/>
												</div>
												<div className="md:col-span-6">
													<label for="streetAddress" className="form-label">
														Street Address
													</label>
													<input
														type="text"
														className="form-control"
														id="streetAddress"
														placeholder="4140 Parker"
													/>
												</div>
												<div className="md:col-span-4">
													<label for="country" className="form-label">
														Country/Region
													</label>
													<select id="country" className="form-select">
														<option selected>United States</option>
														<option>Canada</option>
														<option>Other</option>
													</select>
												</div>
												<div className="md:col-span-4">
													<label for="state" className="form-label">
														State
													</label>
													<select id="state" className="form-select">
														<option selected>Washington DC</option>
														<option>California</option>
														<option>New York</option>
													</select>
												</div>
												<div className="md:col-span-4">
													<label for="zipCode" className="form-label">
														Zip Code
													</label>
													<input
														type="text"
														className="form-control"
														id="zipCode"
														placeholder="20033"
													/>
												</div>
												<div className="md:col-span-6">
													<label for="billingEmail" className="form-label">
														Email
													</label>
													<input
														type="email"
														className="form-control"
														id="billingEmail"
														placeholder="dianne.russell@gmail.com"
													/>
												</div>
												<div className="md:col-span-6">
													<label for="billingPhone" className="form-label">
														Phone
													</label>
													<input
														type="tel"
														className="form-control"
														id="billingPhone"
														placeholder="(603) 805-0123"
													/>
												</div>
												<div className="md:col-span-3">
													<button type="submit" className="theme-btn mt-4">
														Save Changes
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>

								{/* <!-- Change Password --> */}
								<div className="change-password mt-6">
									<h4 className="section-title">Change Password</h4>
									<div className="form-wrapper">
										<form className="grid gap-4 md:grid-cols-3">
											<div>
												<label for="currentPassword" className="form-label">
													Current Password
												</label>
												<input
													type="password"
													className="form-control"
													id="currentPassword"
													placeholder="Password"
												/>
											</div>
											<div>
												<label for="newPassword" className="form-label">
													New Password
												</label>
												<input
													type="password"
													className="form-control"
													id="newPassword"
													placeholder="Password"
												/>
											</div>
											<div>
												<label for="confirmPassword" className="form-label">
													Confirm Password
												</label>
												<input
													type="password"
													className="form-control"
													id="confirmPassword"
													placeholder="Password"
												/>
											</div>
											<div className="md:col-span-3">
												<button type="submit" className="theme-btn mt-4">
													Change Password
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- settings ended --> */}
			<Partials />
		</>
	);
}
