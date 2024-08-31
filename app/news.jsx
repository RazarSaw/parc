"use client";
import Image from "next/image";

const news = [
  {
    title: "PARC Field Day",
    // image: "/parc/1231685-Field-Day-operators-result.jpg",
    information: [
      { icon: "📅", details: "Friday June 25th, 2025 (Setup)" },
      { icon: "⌚", details: "Sat 18:00 - Sun 20:59 (UTC)" },
      { icon: "🗺️", details: "Canora, Saskatchewan" },
    ],
    description: (
      <>
        <p>
          That&apos;s right: Field Day 2025 is happening and it&apos;s happening
          in Canora, SK! More details to follow when the date is closer.
        </p>
      </>
    ),
  },
];

export default function News() {
  return (
    <section className="flex flex-col gap-8">
      <h2>Bulletins</h2>
      <div id="news" className="grid  grid-cols-1 gap-8">
        {news.map((story) => {
          return (
            <div
              className="bg-neutral-700 rounded-[8px] p-0 flex flex-col h-full"
              key={story.title}
            >
              {/* <Image
                width={960}
                height={640}
                alt="Previous Parkland Amateur Radio Club field day with 3 males laughing in the interior of a room"
                src={story.image}
                className="aspect-[16/3] object-cover rounded-t-[8px] w-full"
              /> */}
              <article className="p-8 flex flex-col justify-between h-full gap-8">
                <div className="flex-grow flex flex-col gap-8">
                  <h3>{story.title}</h3>
                  <div className="flex flex-wrap md:gap-4 gap-2">
                    {story.information.map((item) => {
                      return (
                        <p
                          key={item.details}
                          className="flex flex-row md:gap-2 gap-1 md:flex-grow-0 flex-grow text-left"
                        >
                          <span className="bg-neutral-600/75 py-2 md:py-3 px-3 rounded-l-[8px] md:rounded-[8px] uppercase font-semibold md:text-xs text-[0.6rem]">
                            {item.icon}
                          </span>
                          <span className="bg-neutral-600/75 py-2 md:py-3 px-3 md:px-4 rounded-r-[8px] md:rounded-[8px] uppercase font-semibold md:text-xs text-[0.6rem] md:flex-grow-0 flex-grow">
                            {item.details}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                  {story.description}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
