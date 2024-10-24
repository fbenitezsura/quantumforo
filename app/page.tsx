import Image from "next/image";
import ContainerHome from "@components/Templates/home/ContainerHome";

export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <ContainerHome />
    </main>
  );
}
