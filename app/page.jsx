"use client";

import Side from "./side";
import News from "./news";
import Header from "./components/Header";
import Repeaters from "./repeaters";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="grid xl:grid-cols-[1fr_auto] grid-cols-1 lg:gap-8 container mx-auto md:py-16 md:px-4 py-8 px-2">
          <div className="p-4 text-white flex flex-col gap-20">
            <section className="flex flex-col gap-8">
              <h2>
                Connecting Communities for Public Service, CANWARN and FUN
              </h2>
              <p>
                <img
                  src="/parc/rptlocation1.jpg"
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
                club, known as the &apos;Canora Amateur Radio Club&apos;, in
                February 2002. We started with a local repeater, and soon had
                IRLP or V.O.I.P. Communication installed and linked, which
                expanded our range of communication to all around the world.
                Once more operators knew of our local accomplishments they soon
                joined our club. In January 2004, we started with the addition
                of EchoLink to our existing IRLP Node, which also improved our
                coverage to include communication via computer keyboard.
              </p>
              <p>
                Our goals as a club seem to be changing faster than ever and
                over the next couple of years more amateur&apos;s joined the
                club, and in April 2006, we changed our club name to: The
                Parkland Amateur Radio Club Inc., (P.A.R.C.).
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
                on our{" "}
                <a href="/parc/ham-radio-resources/repeaters-echolink-and-irlp.html">
                  repeater page.
                </a>
              </p>
              <div className="flex flex-col gap-8">
                <h3>Interested In Our Network?</h3>
                <p>
                  Below is the latest mapping of our club&apos;s coverage. As our
                  club evolves, we intend to grow our system by adding more
                  local communities to our coverage.
                </p>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=17ofkEFonsS4s7nLT0yQfRQ33v__5Mo8&ehbc=2E312F"
                  height="400"
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
              <Repeaters />
              <p>
                The repeater system is integrated with both EchoLink and IRLP
                (Internet Radio Linking Project), enabling seamless connectivity
                with other repeaters and amateur radio operators across the
                province and beyond. With EchoLink, licensed amateur radio
                operators can connect to the repeater via the internet, allowing
                them to communicate with other operators using a computer,
                smartphone, or tablet from virtually anywhere in the world. This
                feature is particularly useful for members who may be traveling
                or are outside the range of the local repeater. Our local system
                is interlinked with the provincial repeater system. Check out
                more below.
              </p>
              <a
                href="https://ve5ufo-radiospace.godaddysites.com/"
                className="bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.01] transition-all"
              >
                <p>Visit SASKWARN (Wireless Amateur Radio Network)</p>
              </a>
            </section>
          </div>

          <Side />
        </div>
      </main>
    </>
  );
}
