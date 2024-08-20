export default function Links(props) {
  return (
    <section className="flex flex-row lg:gap-8 gap-4 flex-wrap justify-stretch items-stretch">
      {props.props.map((link) => {
        return (
          <a
            href={link.href}
            key={link.title}
            className="flex-1 bg-neutral-700 hover:bg-neutral-700/90 rounded-[8px] transition-all hover:scale-[1.02] p-4 flex items-center md:justify-center min-w-[250px] text-white font-bold md:text-lg text-sm md:text-center text-left"
          >
            <p>{link.title}</p>
          </a>
        );
      })}
    </section>
  );
}
