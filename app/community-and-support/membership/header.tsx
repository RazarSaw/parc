export default function Header() {
  return (
    <header
      className={`bg-[url('/parc/images/headers/ve5pwo-pobetkoff.jpg')] bg-no-repeat bg-fixed bg-cover bg-bottom min-h-[40vh] bg-black/75 bg-blend-multiply grid`}
    >
      <div className="backdrop-blur-sm flex flex-col justify-center h-full">
        <div className="container mx-auto px-8 py-16 flex flex-col items-center gap-8">
          <h1 className="flex-1 text-center">Membership</h1>
          <a
            href="/parc/Parkland Amateur Radio Club Membership.pdf"
            target="_blank"
            className="text-center w-full md:w-auto bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p title="Press to access our membership application">Join Here!</p>
          </a>
        </div>
      </div>
    </header>
  );
}
