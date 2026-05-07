import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import Tips from "@/components/Tips";
import Popular from "@/components/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Carousel></Carousel>
    <Popular></Popular>
    <Tips></Tips>
    <Brands></Brands>
    </>
  );
}
