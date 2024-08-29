import Header from "./header";
import Links from "./../../components/Links";
import Image from "next/image";

export default function HamRadioInfo() {
  const links = [
    {
      title: "Getting Started",
      href: "https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/spectrum-allocation/amateur-radio-service",
    },
    {
      title: "Examiner Search",
      href: "https://apc-cap.ic.gc.ca/pls/apc_anon/query_examiner_amat$.startup",
    },
    {
      title: "Shortwave",
      href: "https://www.radioddity.com/blogs/all/shortwave-radio",
    },
    {
      title: "Q Codes",
      href: "./qcode.pdf",
    },
    {
      title: "RAC",
      href: "https://www.rac.ca/",
    },
    {
      title: "ISED",
      href: "https://ised-isde.canada.ca/site/amateur-radio-operator-certificate-services/en",
    },
  ];
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <Links props={links} />
          <section className="flex flex-col gap-8 text-white">
            <h3>What Is Amateur Radio?</h3>
            <p>
              <Image
                layout="responsive"
                width={200}
                height={200}
                alt="Homemade J-Pole in front of a blue sky"
                src="/parc/J Pole.jpg"
                className="float-right lg:w-1/2 w-full rounded-[8px] lg:ml-8 mb-8"
              />
              Amateur radio is a form of radio used by non-professionals
              (regular people) to transmit on specifically allocated
              frequencies. In other words, it&apos;s a group of people (millions
              actually) around the world that talk to each other on special
              frequencies that are not designed for commerical or professional
              use. <br />
              <br />
              With this type of radio, people can talk locally, out of
              line-of-sight, around the world, and even to space! Many{" "}
              <strong
                title="'Ham radio' is a synonym to amateur radio. 'Hams' are amateur radio operators."
                className="cursor-pointer"
              >
                hams
              </strong>{" "}
              build their own equipment. Participants of the hobby build their
              own antennas, partake in circuitry, and explore physics. <br />
              <br />
              The great thing is: <strong>anybody can participate.</strong> As
              long as you&apos;re a certified amateur operator, or in the
              presence of one, you&apos;ll be able to get on the air in no time.
            </p>
          </section>
        </div>
      </main>

      <section className="bg-[url('/parc/Yagi%20Uda.jpg')] bg-fixed bg-center bg-cover bg-no-repeat min-h-[40vh] bg-black/80 bg-blend-multiply grid place-items-center">
        <p className="container mx-auto p-8 text-right text-white text-xl leading-loose">
          <span>
            &quot;Amateur radio operators are the guardians of the airwaves,
            ensuring that the art and science of communication remains vibrant
            and alive.&quot;
          </span>
          <br />
          <br />
          <span className="font-bold">– Joe Taylor (K1JT)</span>
        </p>
      </section>
      <main className="bg-neutral-800 text-white">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-8">
          <h3>Why Would Anyone Join The Hobby?</h3>
          <p>
            <Image
              layout="responsive"
              width={200}
              height={200}
              alt="RAC Newspaper with Parkland Amateur Radio Club sponsorship"
              src="/parc/Newspaper.png"
              className="float-left lg:w-1/3 w-full rounded-[8px] mb-4 mr-8"
            />
            Amateur radio, or &quot;ham radio,&quot; attracts a diverse
            community of enthusiasts who are drawn by a shared passion for
            technology, communication, and service. For many, the appeal lies in
            the hands-on experience of exploring radio frequencies, building
            antennas, and experimenting with electronics. It&apos;s a hobby that
            offers endless opportunities for learning and innovation, making it
            a perfect fit for those with a curiosity about how things work.
            <br />
            <br />
            Additionally, amateur radio provides a unique platform for global
            communication, allowing operators to connect with people across the
            world, often in remote or underserved areas. This global reach
            fosters a deep sense of connection and community, as operators share
            knowledge, participate in international events, and engage in
            friendly competitions.
            <br />
            <br />
            Beyond the technical and social aspects, amateur radio also serves a
            critical role in public service. Many operators volunteer their
            skills to support emergency communications during disasters,
            ensuring that vital information can still flow when other networks
            are down. This commitment to community safety and preparedness is a
            significant draw for those who want to contribute positively to
            society. Whether driven by a love of technology, a desire for global
            connection, or a commitment to public service, amateur radio offers
            something for everyone, making it a rewarding and fulfilling hobby.
          </p>
        </div>
      </main>
    </>
  );
}
