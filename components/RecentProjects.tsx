"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[40rem] h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.liveLink} href={item.liveLink}>
              {/* Cover image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-4 rounded-xl">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="lg:text-base lg:font-normal font-light text-sm mt-1"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#10132E] text-white-200 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icons + Buttons */}
              <div className="flex items-center justify-between mt-4 mb-1">
                {/* Tech icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-purple hover:opacity-80 transition"
                  >
                    Live <FaLocationArrow size={12} color="#CBACF9" />
                  </a>
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white-200 hover:opacity-80 transition"
                  >
                    Code <FaGithub size={12} />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
