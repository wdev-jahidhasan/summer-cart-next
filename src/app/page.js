import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import Tips from "@/components/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Carousel></Carousel>
    <h1 className="text-center font-bold text-5xl">Popular Products</h1>
    <Tips></Tips>
    <Brands></Brands>
    </>
  );
}
