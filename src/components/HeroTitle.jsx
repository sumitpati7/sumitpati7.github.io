import { Dot } from "lucide-react";

function HeroTitle() {
  return (
    <section className="flex justify-center items-center h-full min-h-[calc(100vh-74px)]">
      <div className="flex flex-col items-center gap-4">
        <p className="p-2 capitalize text-primary border-primary border bg-transparent rounded-3xl text-center inline-flex items-center justify-center gap-1 font-medium">
          <Dot className="text-5xl" />
          available for new projects
        </p>
        <h1 className="group text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center tracking-tight">
          <span className="text-white transition-colors duration-300 group-hover:text-primary">Sumit</span>{" "}
          <span className="text-primary transition-colors duration-300 group-hover:text-white">Pati</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium">
          Associate Software Engineer | Full Stack Developer
        </p>
        <p className="text-base sm:text-lg text-gray-500 text-center max-w-xl">
          Building end-to-end solutions with modern technologies
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <button className="px-6 py-3 bg-primary text-primary-bg font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
            View Projects
          </button>
          <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroTitle;
