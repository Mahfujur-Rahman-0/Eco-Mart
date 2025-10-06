import Image from "next/image";

import breadcumbShape1_1 from "../../public/assets/images/shape/breadcumb-shape1_1.png";
import breadcumbShape1_2 from "../../public/assets/images/shape/breadcumb-shape1_2.png";
import breadcumbShape1_3 from "../../public/assets/images/shape/breadcumb-shape1_3.png";
import breadcumbShape1_4 from "../../public/assets/images/shape/breadcumb-shape1_4.png";

import breadcumb from "../../public/assets/images/shape/breadcumb-bg.png";

export default function Breadcrumb() {
	return (
		<div className="breadcumb-section">
			<div
				className="breadcumb-container-wrapper bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${breadcumb.src})`,
				}}
			>
				<div className="shape1">
					<Image loading="lazy" src={breadcumbShape1_1} alt="shape" />
				</div>
				<div className="shape2">
					<Image loading="lazy" src={breadcumbShape1_2} alt="shape" />
				</div>
				<div className="shape3">
					<Image loading="lazy" src={breadcumbShape1_3} alt="shape" />
				</div>
				<div className="shape4">
					<Image loading="lazy" src={breadcumbShape1_4} alt="shape" />
				</div>
				<div className="container">
					<ul className="breadcumb-wrapper">
						<li>
							<a href="index.html">
								<i className="fa-sharp fa-light fa-house"></i>
							</a>
						</li>
						<li>
							<i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>Category</li>
						<li>
							<i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>Shop</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
