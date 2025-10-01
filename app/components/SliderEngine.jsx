"use client";
import { useEffect, useRef, useState } from "react";
import SliderStructure from "./SliderStructure";

export default function Slider({ images, Timing, sliderType }) {
	const [SwiperAuto, setSwiperAuto] = useState(0);

	const divRef = useRef([]);
	const counterRef = useRef(-1);
	const turnCounterRef = useRef(1);
	const swiperContainer = useRef(null);
	const isDraging = useRef(false);
	const transitionRef = useRef(true);
	const [touchOn, setTouchOn] = useState(false);
	const deviceChecker = useRef(false);

	//Auto slide functionality
	useEffect(() => {
		let timer;

		if (!touchOn) {
			timer = setInterval(() => {
				animatedSlider();
			}, Timing || 4000);
		}

		return () => clearInterval(timer);
	}, [touchOn, Timing]);

	const animatedSlider = () => {
		transitionRef.current = false;
		setSwiperAuto((e) => e + 100);

		divRef.current.forEach((ell) => {
			if (
				ell.getAttribute("aria-label") ===
				`${counterRef.current + 1} / ${images.length}`
			) {
				ell.style.transform = `translate(${
					images.length * 100 * turnCounterRef.current
				}%)`;
			}
		});

		if (counterRef.current < images.length - 1) {
			counterRef.current++;
		} else {
			counterRef.current = 0;
			turnCounterRef.current++;
		}
	};
	// <------------Disable right click------------>

	// useEffect(() => {
	// 	const handleContextMenu = (e) => {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		return false;
	// 	};
	// 	window.addEventListener("contextmenu", handleContextMenu);
	// 	return () => {
	// 		window.removeEventListener("contextmenu", handleContextMenu);
	// 	};
	// }, []);

	// <------------Touch functionality------------>

	let lastX = null;

	const handelTouchDragStart = (e) => {
		e.preventDefault(); // Prevent default to avoid unwanted dragging behaviors
	};
	const handelTouchStart = () => {
		isDraging.current = true;
		transitionRef.current = true;
		setTouchOn(true);
	};
	const handelTouchEnd = () => {
		isDraging.current = false;
		lastX = null;
		setTouchOn(false);
	};

	const handleMove = (e) => {
		isDraging.current = true;
		const div = e.currentTarget.getBoundingClientRect();

		// Handle both touch and mouse events
		let x;
		if (e.type.includes("touch")) {
			const touch = e.touches[0];
			x = touch.clientX - div.left;
		} else {
			x = e.clientX - div.left;
		}

		if (lastX !== null) {
			if (x > lastX) {
				// go Left <=
				increasingP(transitionRef.current);
			} else if (x < lastX) {
				// go Right =>
				decreasingP(transitionRef.current);
			}
		}

		lastX = x;
	};

	const animatedSliderReverce = () => {
		transitionRef.current = false;
		setSwiperAuto((e) => !e <= 0 && e - 100);

		if (SwiperAuto == 0) {
			return;
		}
		if (counterRef.current > 0) {
			counterRef.current--;
		} else {
			counterRef.current = images.length - 1;
			!turnCounterRef.current <= 0 && turnCounterRef.current--;
		}
		[...divRef.current].reverse().forEach((ell) => {
			if (
				ell.getAttribute("aria-label") ===
				`${counterRef.current + 1} / ${images.length}`
			) {
				ell.style.transform = `translate(${
					images.length * 100 * turnCounterRef.current - images.length * 100
				}%)`;
			}
		});
	};
	const increasingP = (ee) => {
		if (ee == false) {
			return;
		}
		animatedSliderReverce();
	};

	const decreasingP = (ee) => {
		if (ee == false) {
			return;
		}
		animatedSlider();
	};
	// <------------Mouse functionality------------>
	const handleonMouseDown = (e) => {
		handelTouchDragStart(e);
		handelTouchStart();
	};
	const handleonMouseUp = () => {
		handelTouchEnd();
	};

	return (
		<div
			onTouchStart={handelTouchStart}
			onTouchEnd={handelTouchEnd}
			onTouchMove={handleMove}
			onDragStart={handelTouchDragStart}
			onMouseDown={handleonMouseDown}
			onMouseUp={handleonMouseUp}
			onMouseMove={handleMove}
			ref={swiperContainer}
			className="swiper grab"
		>
			<div
				className={`swiper-wrapper ${"Top-Swiper"}`}
				style={{
					transform: `translate(-${SwiperAuto}%)`,
				}}
			>
				{images.map((e, index) => (
					<div
						aria-label={index + 1 + " / " + images.length}
						ref={(el) => (divRef.current[index] = el)}
						key={index}
						style={{ transform: `translate(0)` }}
						className="swiper-slide"
					>
						{(sliderType = "sliderTypeOne" && <SliderStructure e={e} />)}
					</div>
				))}
			</div>
			<div className="slider-pagination"></div>
		</div>
	);
}
