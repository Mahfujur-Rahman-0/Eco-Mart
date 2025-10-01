import Image from "next/image";

export default function SliderStructure({ e }) {
	return (
		<div className="thumb">
			<Image loading="lazy" src={e} alt="thumb" />
		</div>
	);
}
