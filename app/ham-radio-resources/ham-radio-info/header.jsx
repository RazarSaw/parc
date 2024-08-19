export default function header() {
  return (
    <header
      className={`bg-[url('/parc/images/headers/Ham%20Radio%20Info%20Header.png')] bg-no-repeat 2xl:bg-fixed bg-cover 2xl:bg-[100%,90%] min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
    >
      <div className="backdrop-blur-sm flex flex-col justify-center">
        <div className="container mx-auto p-8">
          <h1>Ham Radio Info</h1>
        </div>
      </div>
    </header>
  );
}
