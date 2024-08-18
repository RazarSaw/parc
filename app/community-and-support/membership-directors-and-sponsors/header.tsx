export default function Header() {
  return (
    <header
      className={`bg-[url('/ve5pwo-pobetkoff.jpg')] bg-no-repeat bg-fixed bg-cover bg-bottom min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-black/75 bg-blend-multiply`}
    >
      <div className="backdrop-blur-sm flex flex-col justify-center">
        <div className="container mx-auto px-8 py-16 flex lg:flex-row flex-col flex-wrap items-center gap-8">
          <h1 className="flex-1">Membership, Directors, & Sponsors</h1>
          <a
            href="/Parkland Amateur Radio Club Membership.pdf"
            className="text-center w-full md:w-auto bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p title="Press to access our membership application">Join Here!</p>
          </a>
          <a
            href="https://www.rac.ca/carl-everson-memorial-silent-keys-list/"
            className="text-center w-full md:w-auto hover:bg-red-500 bg-red-400 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p>Carl Everson Memorial Silent Keys Lists</p>
          </a>
        </div>
      </div>
    </header>
  );
}
