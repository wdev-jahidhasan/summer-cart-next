import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Carousel></Carousel>
    <h1 className="text-center font-bold text-5xl">Popular Products</h1>
    <h1 className="text-center font-bold text-5xl text-green-300 my-5">Summer Care Tips</h1>
    <Brands></Brands>
    </>
  );
}
