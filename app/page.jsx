"use client";

import Side from "./side";
import News from "./news";
import Header from "./components/Header";
import Repeaters from "./repeaters";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="grid xl:grid-cols-[1fr_auto] grid-cols-1 gap-16 container mx-auto py-16 px-8">
          <div className="text-white flex flex-col gap-16">
            <News />
            <hr/>
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
                  loading="lazy"
                  title="Map of Parkland Amateur Radio Club coverage"
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
                target="_blank"
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
