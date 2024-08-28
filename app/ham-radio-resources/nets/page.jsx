import Links from "../../components/Links";
import Header from "./header";
import VHF from "./VHF";
import DailyHF from "./dailyHF";
import WeekdayHF from "./weekdayHF";
import Digital from "./digital";

export default function Nets() {
  const links = [
    {
      title: "DMR Nets",
      href: "https://w0wc.com/resources/brandmeister-dmr-nets/",
    },
    {
      title: "D-STAR Nets",
      href: "https://hamnetlist.blogspot.com/",
    },
    {
      title: "HamNetList.com",
      href: "https://hamnetlist.blogspot.com/",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <Links props={links} />
          <section className="text-white flex flex-col gap-8">
            <h2>What Is A Net?</h2>
            <p>
              An amateur radio net is a scheduled on-air gathering of amateur
              radio operators designed to facilitate communication, information
              exchange, and community building. These nets serve a variety of
              purposes, from providing crucial communication support during
              emergencies and public events to offering a platform for sharing
              technical advice, weather reports, and other relevant news.
              Whether focused on emergency preparedness, technical discussions,
              or simply fostering camaraderie among hams, these nets are a
              cornerstone of the amateur radio community.
            </p>
          </section>
          <section className="flex flex-col gap-16 text-white">
            <VHF />
            <DailyHF />
            <WeekdayHF />
            <Digital />
          </section>
        </div>
      </main>
    </>
  );
}
