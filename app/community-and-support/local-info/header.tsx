export default function Header() {
  return (
    <header
      className={`bg-[url('/parc/rptlocation1.jpg')] bg-center bg-fixed bg-no-repeat bg-cover min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
    >
      <div className="backdrop-blur-sm flex flex-col justify-center">
        <div className="container mx-auto px-8 py-16 flex lg:flex-row flex-col flex-wrap items-center gap-8">
          <h1 className="flex-1">Local Info</h1>
        </div>
      </div>
    </header>
  );
}
