export default function Header() {
  return (
    <header
      className={`bg-[url('/parc/micor_radio.jpg')] bg-no-repeat bg-fixed bg-cover  min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
    >
      <div className="backdrop-blur-md flex flex-col justify-center">
        <div className="container mx-auto p-8">
          <h1>Repeaters, EchoLink, & IRLP</h1>
        </div>
      </div>
    </header>
  );
}
