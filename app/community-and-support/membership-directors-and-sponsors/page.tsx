import Members from "./members";
import Directors from "./directors";
import Sponsors from "./sponsors";
import Header from "./header";
import Community from "./community";

export default function membershipDirectorsAndSponsors() {
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <section className="flex flex-col gap-8 text-white">
            <h3>
              We Want <strong>YOU</strong>
            </h3>
            <p>
              Our local club would not be possible without the people who make
              it up. From high level directors, to regular members, we&apos;re
              constantly hoping to gain people in the hobby.
            </p>
          </section>
          <Members />
          <Directors />
          <Sponsors />
          {/* <Community /> */}
        </div>
      </main>
    </>
  );
}
