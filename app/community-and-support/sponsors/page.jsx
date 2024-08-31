import Image from "next/image";
import Friends from "./friends";

export default function Sponsors() {
  return (
    <main className="bg-neutral-800">
      <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
        <section className="flex flex-col gap-8">
          <h2 className="xl:col-span-2 col-span-1">Sponsors</h2>
          <p>
            The Parkland Amateur Radio Club was started in 2002, and has
            successfully installed a long distance working repeater linked with
            the existing EchoLink and IRLP systems that allow communication for
            just basic chit chat or another source of Emergency Communication
            all over the World.
          </p>
          <p>
            We are able to successfully keep this service alive in East Central
            Saskatchewan, through its Sponsors and Members, who we appreciate
            for the service, time and money they have contributed to the club.
          </p>
          <p>
            Over the years, PARC has made some exemplars in terms of supporting
            our repeaters. Below are our sponsors who have kindly allowed our
            club to host repeaters at there stations.
          </p>
        </section>
        <Friends />
      </div>
    </main>
  );
}
