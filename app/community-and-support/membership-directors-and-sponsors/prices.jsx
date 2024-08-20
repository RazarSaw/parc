export default function Prices() {
  return (
    <section className="bg-gradient-to-r from-violet-500 to-blue-500">
      <div className="container mx-auto px-8 py-16 gap-8 flex flex-col">
        <h2 className="col-span-3 md:text-center text-left">
          We Want <strong>YOU</strong>
        </h2>
        <p className="col-span-3">
          Our local club would not be possible without the people who make it
          up. From high level directors, to regular members, we&apos;re
          constantly hoping to gain people in the hobby. Membership terms are
          from{" "}
          <span className="font-semibold">
            June 1<sup>st</sup> to May 31<sup>st</sup>
          </span>
          . To become a member of the Parkland Amateur Radio Club, you may fill
          out our{" "}
          <a href="/parc/Parkland Amateur Radio Club Membership.pdf">form</a>,
          or email:{" "}
          <a href="mailto:parklandamateur@outlook.com">
            parklandamateur@outlook.com.
          </a>
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-8 gap-4">
          <div className="rounded-[8px] p-8 bg-white flex flex-col justify-between gap-4 text-center shadow-lg">
            <h3 className="text-neutral-900 uppercase">Regular </h3>
            <p className="text-neutral-900">
              <span className="text-2xl font-black">$30.00</span> / year
            </p>
            <p className="text-neutral-900">Full Membership Individual</p>
          </div>
          <div className="rounded-[8px] p-8 bg-white flex flex-col justify-between gap-4 text-center shadow-lg">
            <h3 className="text-neutral-900 uppercase">Regular </h3>
            <p className="text-neutral-900">
              <span className="text-2xl font-black">$40.00</span> / year
            </p>
            <p className="text-neutral-900">Full Family Membership</p>
          </div>
          <div className="rounded-[8px] p-8 bg-white flex flex-col justify-between gap-4 text-center shadow-lg">
            <h3 className="text-neutral-900 uppercase">Associate </h3>
            <p className="text-neutral-900">
              <span className="text-2xl font-black">$30.00</span> / year
            </p>
            <p className="text-neutral-900">Non Executive Membership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
