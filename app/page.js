import Image from "next/image";
import First from "@/components/First";
import Card from "@/components/Card";
import Canva from "@/components/Canva"

export default function Home() {
  return (
  <>
  <audio autoPlay>
    <source src="./audio.m4a"></source>
  </audio>
    <First/>
    <Canva/>
    <Card/>
    </>
  );
}
