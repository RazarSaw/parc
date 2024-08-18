"use client";

import News from "./components/News";
import Side from "./Side";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  const repeaters = [
    {
      location: "Canora",
      callsign: "VA5EMO",
      frequency: "147.300 + MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Hendon",
      callsign: "VE5EML",
      frequency: "146.610 - MHz",
      tone: "No Tone",
      info: "IRLP / Reflector 9300",
    },
    {
      location: "Norquay",
      callsign: "VA5INV",
      frequency: "147.080 + MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Rocanville",
      callsign: "VA5RSR",
      frequency: "145.310 - MHz",
      tone: "100.0",
      info: "IRLP / EchoLink / Reflector 9300",
    },
    {
      location: "Yorkton",
      callsign: "VA5PAR",
      frequency: "145.490 - MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Fort Qu'Appelle",
      callsign: "VE5RJK",
      frequency: "146.4300 (no offset) MHz",
      tone: "No Tone",
      info: "IRLP / Reflector 9300",
    },
  ];
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="grid xl:grid-cols-[1fr_auto] grid-cols-1 lg:gap-8 container mx-auto py-16 px-4">
          <div className="p-4 text-white flex flex-col gap-20">
            <section className="flex flex-col gap-8">
              <h2>
                Connecting Communities for Public Service, CANWARN and FUN
              </h2>
              <p>
                <img
                  src="/rptlocation1.jpg"
                  className="float-right ml-8 mb-8 lg:w-1/2 w-full rounded-[8px]"
                />
                The Parkland Amateur Radio Club was started in 2002, and has
                successfully installed a long distance working repeater linked
                with the existing EchoLink and IRLP systems that allow
                communication for just basic chit chat or another source of
                Emergency Communication all over the World. We are able to
                successfully keep this service alive in East Central
                Saskatchewan, through its Sponsors and Members, who we
                appreciate for the service, time and money they have contributed
                to the club.
                <br />
                <br />
                The Parkland Amateur Radio Club (P.A.R.C.), consists of very
                active and ambitious amateur radio operators, who commonly share
                a common interest in many aspects of amateur Radio, located in
                the Parklands, covering East Central Saskatchewan. Local
                amateurs in Canora, Saskatchewan in the beginning consisted of
                only 3, back in 2000, and eventually those same three formed the
                club, known as the &apos;Canora Amateur Radio Club&apos;, in February
                2002. We started with a local repeater, and soon had IRLP or
                V.O.I.P. Communication installed and linked, which expanded our
                range of communication to all around the world. Once more
                operators knew of our local accomplishments they soon joined our
                club. In January 2004, we started with the addition of EchoLink
                to our existing IRLP Node, which also improved our coverage to
                include communication via computer keyboard.
              </p>
              <p>
                Our goals as a club seem to be changing faster than ever and
                over the next couple of years more amateur&apos;s joined the club,
                and in April 2006, we changed our club name to: The Parkland
                Amateur Radio Club Inc., (P.A.R.C.).
              </p>
            </section>
            <News />
            <section className="flex flex-col gap-8">
              <h2>Our Repeater System</h2>
              <p>
                {" "}
                The Parkland Amateur Radio Club boasts a great repeater network
                system, which provides several different modes of communication,
                to a expanded coverage area. We are continuously updating our
                equipment and repeater network, more information can be viewed
                on our <Link href="./ham-radio-info/repeaters-echolink-and-irlp">repeater page.</Link>
              </p>
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1hhj566FHT62oBQi-0ETpRZiKpja1_yf7&ehbc=2E312F"
                  height="480"
                  className="w-full"
                ></iframe>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=17ofkEFonsS4s7nLT0yQfRQ33v__5Mo8&ehbc=2E312F"
                  height="480"
                  className="w-full"
                ></iframe>
              </div>

              <p>
                The Parkland amateur Radio Club hosts a great system,
                integrating both VHF / UHF and V.O.I.P. communication systems,
                that can be linked to other systems around the world. Our club
                achieved this through many volunteer hours from all our members,
                donations from fellow ham operators from far and wide and
                through the people and organizations around our local coverage
                area. We are continuing to grow, by new members coming on board,
                and we are constantly upgrading and adding to our already proven
                reliable system.
              </p>
              <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-8">
                {repeaters.map((repeater) => {
                  return (
                    <article
                      className="bg-neutral-700 rounded-[8px] p-4"
                      key={repeater.callsign}
                    >
                      <h3 className="pb-4">{repeater.location}</h3>
                      <div>
                        <p>{repeater.callsign}</p>
                        <p>{repeater.frequency}</p>
                        <p>{repeater.tone}</p>
                        <p>{repeater.info.replaceAll("/", "•")}</p>
                      </div>
                    </article>
                  );
                })}
              </section>
            </section>
          </div>

          <Side />
        </div>
      </main>
    </>
  );
}
