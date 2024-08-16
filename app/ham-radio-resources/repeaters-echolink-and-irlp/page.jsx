export default function RepeatersEcholinkAndIRLP() {
  const links = [
    {
      title: "Repeater Listings",
      href: "https://www.repeaterbook.com/repeaters/Display_SS.php?state_id=CA11&band=%&freq=%&band6=%&loc=%&county_id=%&call=%&status_id=%&features=%&system=%&coverage=%&use=%",
    },
    {
      title: "All IRLP Node Stations",
      href: "https://status.irlp.net/index.php?PSTART=3",
    },
    {
      title: "IRLP Reflectors",
      href: "https://status.irlp.net/index.php",
    },
    {
      title: "Saskatchewan Reflector",
      href: "https://status.irlp.net/index.php?PSTART=11&nodeid=9300",
    },
    {
      title: "EchoLink Nodes",
      href: "https://www.echolink.org/logins.jsp",
    },
  ];
  return (
    <>
      <header
        className={`bg-[url('/micor_radio.jpg')] bg-no-repeat bg-cover bg-bottom min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
      >
        <div className="backdrop-blur-md flex flex-col justify-center">
          <div className="container mx-auto p-8">
            <h1>Repeaters, EchoLink, & IRLP</h1>
          </div>
        </div>
      </header>
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <section className="flex flex-row gap-8 flex-wrap justify-stretch items-stretch text-center">
            {links.map((link) => {
              console.log(link);
              return (
                <a
                  href={link.href}
                  key={link.title}
                  className="flex-1 bg-neutral-700 rounded-[8px] transition-all hover:scale-[1.05] p-4 flex items-center justify-center min-w-[250px]"
                >
                  <p>{link.title}</p>
                </a>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
