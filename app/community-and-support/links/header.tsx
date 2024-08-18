export default function Header() {
  return (
    <header
      className={`bg-[url('/images/headers/links.jpg')] bg-no-repeat bg-fixed bg-cover bg-bottom min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-black/75 bg-blend-multiply`}
    >
      <div className="backdrop-blur-sm flex flex-col justify-center">
        <div className="container mx-auto px-8 py-16 flex lg:flex-row flex-col flex-wrap items-center gap-8">
          <h1 className="flex-1">Links</h1>
        </div>
      </div>
      <p className="p-8 opacity-15 absolute">
        Photo by{" "}
        <a href="https://unsplash.com/@thomasjsn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Thomas Jensen
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/close-up-photography-of-mining-rig-h3vT1Kp0FxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
    </header>
  );
}
