"use client";

import Header from "./header";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import history from "./history";

export default function localInfo() {
  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 px-8 flex flex-col gap-16">
          <h2>Our Local History</h2>
          <p>
            Long, long ago, a few curious individuals led to the growth of what
            would now be called the Parkland Amateur Radio Club (PARC). It all
            begins in 1995.
          </p>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {history.map((history) => {
              return (
                <li
                  className="mb-10 ms-8 flex flex-col gap-4"
                  key={history.time}
                >
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 md:text-md font-semibold text-sm text-gray-900 dark:text-white">
                    {history.time}{" "}
                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span> */}
                  </h3>
                  {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 13th, 2022
                  </time> */}
                  <article className="flex flex-col gap-4 p-0">
                    <Accordion
                      variant="splitted"
                      itemClasses={{
                        title:
                          "font-bold md:text-lg text-sm md:text-center text-left",
                        subtitle: "md:text-md text-sm md:text-center text-left",
                        indicator: "hidden",
                        base: "p-0 px-0 w-full m-0",
                        heading: "p-0 -mx-2",
                        trigger:
                          "data-[hover=true]:bg-neutral-600 bg-neutral-700/50 rounded-lg transition-all duration-300 md:p-8 p-4",
                      }}
                      defaultExpandedKeys={["Early Beginnings"]}
                      className="flex flex-col gap-4"
                    >
                      {history.sections.map((section, index) => {
                        return (
                          <AccordionItem
                            key={section.title}
                            aria-label={section.title}
                            title={section.title}
                            subtitle={
                              <p className="text-sm pt-4">{section.subtitle}</p>
                            }
                          >
                            <div className="flex flex-col gap-4 py-4">
                              {section.subsections}
                            </div>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </article>
                </li>
              );
            })}
          </ol>
          <section className="flex flex-col gap-8">
            <h2>Our Commitment</h2>
            <p>
              We are all unified in keeping Emergency Communication a main
              priority, which we want to continue even more expansion in the
              future, and to get more people involved from the area. If you are
              interested in becoming an amateur radio operator or you want to
              provide some funding assistance, you can contact any club member
              at: http://nonprofits.accesscomm.ca/parc/
            </p>
            <p>
              This project has consumed thousands of dollars and many hours of
              volunteer time, but even with that, this service could not have
              happened without the donations of other organizations for their
              understanding of the importance of having emergency communication
              service in our area. The Parkland Amateur Radio Club would like to
              thank, our sponsors, for their contribution to making this long
              term project a reality: Please take the time to check out our
              sponsors for their contributions to the club.
            </p>
          </section>
        </div>
      </main>
      <section className="py-8 bg-neutral-800">
        <iframe
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1HCCt8Dx4OXQazOKTviJmMBlWB7gSZVhNISW_Qx7exes&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="650"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
