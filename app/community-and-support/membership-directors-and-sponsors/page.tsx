import Members from "./members";
import Directors from "./directors";
import Sponsors from "./sponsors";

export default function membershipDirectorsAndSponsors() {
  return (
    <>
      <header
        className={`bg-[url('/parklandarc/Ham%20Radio%20Info%20Header.png')] bg-no-repeat bg-cover bg-bottom min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
      >
        <div className="backdrop-blur-md flex flex-col justify-center">
          <div className="container mx-auto p-8 flex lg:flex-row flex-col flex-wrap items-center gap-8">
            <h1 className="flex-1">Membership, Directors, & Sponsors</h1>
            <a
              href="/parklandarc/Parkland Amateur Radio Club Membership.pdf"
              className="text-center w-full md:w-auto bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
            >
              <p title="Press to access our membership application">
                Join Here!
              </p>
            </a>
            <a
              href="https://www.rac.ca/carl-everson-memorial-silent-keys-list/"
              className="text-center w-full md:w-auto hover:bg-neutral-700 bg-neutral-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
            >
              <p>Carl Everson Memorial Silent Keys Lists</p>
            </a>
          </div>
        </div>
      </header>
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
        </div>
      </main>
    </>
  );
}
