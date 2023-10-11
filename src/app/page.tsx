"use client"

import Intro from "@/components/intro";
import ListicleGenerator from "@/components/listicleGenerator";

export default function Home() {

  return (
    <main className="flex flex-col text-center items-center">
      <Intro />
      <ListicleGenerator />
    </main>
  )
}
