"use client";

import Section01 from "./components/section-01";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-16">
      <section className="w-full lg:w-3/4">
        <Section01 />
      </section>
    </main>
  );
}