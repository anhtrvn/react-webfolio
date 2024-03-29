import React, { useEffect } from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";
import { ReactComponent as IconJS } from "../icons/js02-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconReact } from "../icons/react-svgrepo-com.svg";
import { ReactComponent as IconTailwind } from "../icons/tailwind-svgrepo-com.svg";
import { ReactComponent as IconTS } from "../icons/typescript-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconVScode } from "../icons/visual-studio-code-svgrepo-com.svg";

type Props = {};

export default function Skills({}: Props) {
  useEffect(() => {
    const skills = document.querySelectorAll<HTMLDivElement>(".skill");
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("bounce-show", entry.isIntersecting);
      });
    });

    skills.forEach((skill) => {
      skillObserver.observe(skill);
    });
  }, []);

  return (
    <section
      id="skills"
      className="relative mx-auto flex h-screen max-w-[2000px] snap-center flex-col items-center
      justify-center text-center font-mono md:h-[90%] md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400 md:text-3xl">
        Skills
      </h3>

      <div className="z-10 grid grid-cols-3 gap-5 md:grid-cols-5">
        <div className="skill group">
          <IconCplusplus className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name m-[17px] my-[20px] md:m-[21px] md:my-[30px]">
            <p className="skill-text">C++</p>
          </div>
        </div>
        <div className="skill group">
          <IconPython className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name -mx-[8px] my-[20px] md:mx-[2px] md:my-[30px]">
            <p className="skill-text">Python</p>
          </div>
        </div>
        <div className="skill group">
          <IconCsharp className="skill-fade h-[85px] w-[85px] md:h-[105px] md:w-[105px]" />
          <div className="skill-name m-[24px] my-[22px] md:m-[34px] md:my-[34px]">
            <p className="skill-text">C#</p>
          </div>
        </div>
        <div className="skill group">
          <IconJS className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name my-[5px] -ml-[2px] md:my-[11px] md:ml-[10px]">
            <p className="skill-text">
              Java <br /> script
            </p>
          </div>
        </div>
        <div className="skill group">
          <IconTS className="skill-fade -ml-[8px] -mt-[17px] h-[109px] w-[109px] md:h-[130px] md:w-[130px]" />
          <div className="skill-name my-[2px] -ml-[5px] md:my-[12px] md:ml-[5px]">
            <p className="skill-text">
              Type <br /> script
            </p>
          </div>
        </div>
        <div className="skill group">
          <IconTailwind className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name my-[6px] ml-[-21px] md:my-[12px] md:ml-[-21px]">
            <p className="skill-text">Tailwind CSS</p>
          </div>
        </div>
        <div className="skill group">
          <IconReact className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name my-[20px] md:my-[30px] md:ml-[10px]">
            <p className="skill-text">React</p>
          </div>
        </div>
        <div className="skill group">
          <IconVScode className="skill-fade h-[72px] w-[72px] md:h-[92px] md:w-[92px]" />
          <div className="skill-name my-[15px] -ml-[10px] md:my-[27px] md:-ml-[2px]">
            <p className="skill-text">VSCode</p>
          </div>
        </div>
        <div className="skill group">
          <IconUnity className="skill-fade h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
          <div className="skill-name m-[5px] my-[20px] md:m-[16px] md:my-[30px]">
            <p className="skill-text">Unity</p>
          </div>
        </div>
        <div className="skill group">
          <IconGit className="skill-fade ml-[-8px] h-[98px] w-[98px] md:h-[120px] md:w-[120px]" />
          <div className="skill-name m-[17px] my-[30px] md:m-[25px] md:my-[40px]">
            <p className="skill-text">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
}
