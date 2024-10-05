export default function Links(props) {
  return (
    <section className="flex flex-row lg:gap-8 md:gap-4 gap-2 flex-wrap justify-stretch items-stretch">
      {props.props.map((link) => {
        return (
          <a
            href={link.href}
            key={link.title}
            target="_blank"
            className="flex-1 bg-neutral-700 hover:bg-neutral-700/90 rounded-[8px] transition-all hover:scale-[1.02] outline duration-500 ease-in-out hover:outline-white outline-black/0 py-2 px-3 md:py-3 md:px-4 flex items-center md:justify-center min-w-[250px] text-white font-semibold lg:text-lg md:text-sm text-[0.6rem] md:text-center text-left"
          >
            <p>{link.title}</p>
          </a>
        );
      })}
    </section>
  );
}
