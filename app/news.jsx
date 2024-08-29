"use client";
import Image from "next/image";

export default function News() {
  return (
    <section className="flex flex-col gap-8">
      <h2>Bulletins</h2>
      <div id="news" className="grid  grid-cols-1 gap-8">
        <div className="bg-neutral-700 rounded-[8px] p-0 flex flex-col h-full">
          <Image
            layout="responsive"
            width={200}
            height={200}
            alt="Previous Parkland Amateur Radio Club field day with 3 males laughing in the interior of a room"
            src="/parc/1231685-Field-Day-operators-result.jpg"
            className="aspect-[16/3] object-cover rounded-t-[8px]"
          />
          <article className="p-8 flex flex-col justify-between h-full gap-8">
            <div className="flex-grow flex flex-col gap-8">
              <h3>PARC Field Day</h3>
              <p className="flex flex-wrap md:gap-4 gap-2 uppercase font-semibold md:text-xs text-[0.6rem]">
                {"📅 Friday June 25th, 2025 (Setup) / ⌚ Sat 18:00 - Sun 20:59 (UTC) / 🗺️ Canora, Saskatchewan"
                  .split("/")
                  .map((string) => {
                    return (
                      <span
                        key={string}
                        className="bg-neutral-600/75 md:flex-grow-0 flex-grow rounded-[8px] py-2 md:py-3 px-3 md:px-4 text-left"
                      >
                        {string}
                      </span>
                    );
                  })}
              </p>
              <p>
                That&apos;s right: Field Day 2025 is happening and it&apos;s
                happening in Canora, SK! More details to follow when the date is
                closer.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
