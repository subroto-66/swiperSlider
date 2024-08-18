import SwiperComponent from "./components/SwiperComponent";

export function generateMetadata({ params }: any) {
  return {
    title: "text metadata",
    description: "text description",
  };
}

export default function page() {
  const images = [
    "/slider-1.jpeg",
    "/slider-2.jpeg",
    "/slider-3.jpeg",
    "/slider-4.jpeg",
    "/slider-5.jpeg",
    "/slider-3.jpeg",
  ];
  return (
    <div>
      <SwiperComponent sliders={images} />
    </div>
  );
}
