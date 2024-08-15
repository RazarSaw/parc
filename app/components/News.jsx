"use client";

export default function News() {
  return (
    <section className="flex flex-col gap-8">
      <h2>Bulletins</h2>
      <div id="news" className="grid xl:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0">
          <img
            src="/Manitoba Hamfest 2024.jpg"
            className="aspect-[16/3] object-cover rounded-t-[8px]"
          />
          <article className="p-4 flex flex-col justify-between h-full gap-4">
            <div className="flex-grow flex flex-col gap-4">
              <h3>Manitoba Ham Fest</h3>
              <p className="uppercase font-semibold text-sm">
                August 17, 2024 &bull; 10:00 - 15:00 (Local Times) &bull;
                Austin, Manitoba
              </p>
              <p>
                Are you interested in buying items for the cheap with other
                amateurs? Participate in Manitoba&apos;s upcoming Ham Fest!{" "}
                <strong>Contact Jim at 204-922-2427</strong> for details.
                Bookings details can be found at the{" "}
                <a href="https://www.brandonarc.ca/">
                  Brandon Amater Radio Club&apos;s Website.
                </a>{" "}
                Find more{" "}
                <a href="https://hamshack.ca/rtcl_listing/manitoba-ham-fest/">
                  flea market details{" "}
                </a>
                on Hamshack.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10274.330741517277!2d-98.9472001!3d49.925407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e5eef26080fc9b%3A0xbae4d4254001be08!2sManitoba%20Agricultural%20Museum!5e0!3m2!1sen!2sca!4v1723510812709!5m2!1sen!2sca"
              className="w-full"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
        </div>
        <div className="bg-neutral-700 rounded-[8px] p-0 flex flex-col h-full">
          <img
            src="/1231685-Field-Day-operators-result.jpg"
            className="aspect-[16/3] object-cover rounded-t-[8px]"
          />
          <article className="p-4 flex flex-col justify-between h-full gap-4">
            <div className="flex-grow flex flex-col gap-4">
              <h3>PARC Field Day</h3>
              <p className="uppercase font-semibold text-sm">
                Friday June 25th, 2025 (Setup) &bull; 1800 Saturday - 2059
                Sunday (UTC Times) &bull; Canora, Saskatchewan
              </p>
              <p>
                That&apos;s right: Field Day 2024 is happening and it&apos;s happening in
                Canora, SK! More details to follow when the date is closer.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187326.4558766718!2d-102.42478197014384!3d51.62081594749153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e316dc16abff19%3A0x7773a5155fa2f3!2sCanora%2C%20SK%20S0A%200L0!5e0!3m2!1sen!2sca!4v1723513095664!5m2!1sen!2sca"
              className="w-full"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
        </div>
      </div>
    </section>
  );
}
