"use client";
import Image from "next/image";

export default function News() {
  return (
    <section className="flex flex-col gap-8">
      <h2>Bulletins</h2>
      <div id="news" className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0">
          <Image
            layout="responsive"
            width={200}
            height={200}
            alt="Manitoba Hamfest with people inside of a warehouse purchasing items from various vendors"
            src="/parc/Manitoba Hamfest 2024.jpg"
            className="aspect-[16/3] object-cover rounded-t-[8px]"
          />
          <article className="p-8 flex flex-col justify-between h-full gap-8">
            <div className="flex-grow flex flex-col gap-8">
              <h3>Manitoba Ham Fest</h3>
              <p className="flex flex-wrap gap-4 uppercase font-semibold text-xs">
                {"August 17, 2024 &bull; 10:00 - 15:00 (Local Times) &bull; Austin, Manitoba"
                  .split("&bull;")
                  .map((string) => {
                    return (
                      <span
                        key={string}
                        className="bg-neutral-600/75 flex-grow rounded-[8px] py-2 px-3 text-center"
                      >
                        {string}
                      </span>
                    );
                  })}
              </p>
              <p>
                Are you interested in buying items for the cheap with other
                amateurs? Participate in Manitoba&apos;s upcoming Ham Fest!{" "}
                <strong>Contact Jim at 204-922-2427</strong> for details.
                Bookings details can be found at the{" "}
                <a href="https://www.brandonarc.ca/">
                  Brandon Amater Radio Club&apos;s Website.
                </a>{" "}
                Find more{" "}
                <a href="https://hamshack.ca/rtcl_listing/manitoba-ham-fest/">
                  flea market details{" "}
                </a>
                on Hamshack.
              </p>
            </div>
          </article>
        </div>
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
              <p className="flex flex-wrap gap-4 uppercase font-semibold text-xs">
                {"Friday June 25th, 2025 (Setup) &bull; 18:00 Sat - 20:59 Sun (UTC Times) &bull; Canora, Saskatchewan"
                  .split("&bull;")
                  .map((string) => {
                    return (
                      <span
                        key={string}
                        className="bg-neutral-600/75 flex-grow rounded-[8px] py-2 px-3 text-center"
                      >
                        {string}
                      </span>
                    );
                  })}
              </p>
              <p>
                That&apos;s right: Field Day 2024 is happening and it&apos;s
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
