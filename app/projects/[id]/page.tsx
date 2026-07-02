import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { IoArrowBack, IoCheckmarkCircle } from "react-icons/io5";

import { projects } from "@/data";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }));
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) return notFound();

  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-4xl w-full py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition mb-8"
        >
          <IoArrowBack /> Back to projects
        </Link>

        {/* Title + quick actions up top so a recruiter can jump straight to the demo/code */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            {project.title}
          </h1>

          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple text-black-100 font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              Live Demo <FaLocationArrow size={14} />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.2] text-white hover:bg-white/[0.05] transition whitespace-nowrap"
            >
              View Code <FaGithub size={16} />
            </a>
          </div>
        </div>

        {/* Full description */}
        <p className="text-white-100 text-base md:text-lg leading-relaxed mb-8">
          {project.longDes}
        </p>

        <div className="rounded-2xl overflow-hidden border border-white/[0.1] mb-10">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Key features */}
        <h2 className="text-lg font-semibold text-white mb-4">Key Features</h2>
        <ul className="flex flex-col gap-3 mb-10">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-white-100 text-sm md:text-base leading-relaxed"
            >
              <IoCheckmarkCircle
                className="shrink-0 mt-0.5"
                size={18}
                color="#CBACF9"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <h2 className="text-lg font-semibold text-white mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-20">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-[#10132E] text-white-200 border border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
