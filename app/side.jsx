"use client";
import Image from "next/image";

export default function Side() {
  const irlpNodes = [
    "1376",
    "1587",
    "1621",
    "1622",
    "1710",
    "1800",
    "1807",
    "1808",
    "1858",
    "1884",
  ];
  return (
    <aside className="flex flex-col gap-8">
      <article className="flex flex-col gap-8">
        <h2 className="text-white">IRLP Nodes</h2>
        <ul className="bg-white rounded-[8px] p-4">
          {irlpNodes.map((node) => (
            <li key={node}>
              <iframe
                id="I42"
                className="d2"
                frameBorder="0"
                height="20"
                name="I42"
                scrolling="no"
                title={`IRLP node ${node}`}
                src={`https://irlp.g4eid-km8h.net/status/nodes/status${node}.html`}
                width="240"
              ></iframe>
            </li>
          ))}
        </ul>
      </article>
      <h2>Callsign Search</h2>
      <article className="bg-white rounded-[8px] flex justify-center items-center p-4 gap-4 flex-wrap">
        <a href="https://apc-cap.ic.gc.ca/pls/apc_anon/query_amat_cs$.startup">
          <Image
            layout="responsive"
            width={200}
            height={200}
            alt="Radio Amateurs of Canada logo"
            src="/parc/images/logos/rac-logo-2.svg"
            className="max-h-32"
          />
        </a>
        <a href="https://www.arrl.org/advanced-call-sign-search">
          <Image
            layout="responsive"
            width={200}
            height={200}
            alt="American Radio Relay League logo"
            src="/parc/images/logos/ARRL_logo.svg.png"
            className="max-h-32"
          />
        </a>
        <a href="https://www.qrz.com/lookup">
          <Image
            layout="responsive"
            width={200}
            height={200}
            alt="QRZ globe logo"
            src="/parc/images/logos/QRZcom Globe Logo_2.png"
            className="max-h-32"
          />
        </a>
      </article>
      <h2>Solar Weather</h2>
      <a
        href="https://www.hamqsl.com/solar.html"
        title="Click to add Solar-Terrestrial Data to your website!"
        className="bg-black p-4 rounded-[8px] grid place-items-center"
      >
        <Image
          layout="responsive"
          width={200}
          height={200}
          alt="Details of solar activity"
          src="https://www.hamqsl.com/solarn0nbh.php"
          className="w-full hidden xl:block"
        />
        <Image
          layout="responsive"
          width={200}
          height={200}
          alt="Details of solar activity"
          src="https://www.hamqsl.com/solar101vhfpic.php"
          className="xl:hidden inline "
        />
      </a>
      {/* <div className="bg-slate-200 rounded-[8px]">
        <iframe
          src="http://www.g4ilo.com/wwv/webprop.php?format=small"
          height="268px"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          className="w-full"
        ></iframe>
      </div> */}
    </aside>
  );
}
