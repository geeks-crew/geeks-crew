import BottomSheetComponent from "@/components/BottomSheet";
import { contactLinks, socialLinks } from "@/utils";
import { Icon } from "@iconify/react";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import Typewriter from "typewriter-effect";
const recursive = Fira_Code({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  const [open, setOpen] = useState({ open: false, content: "" });

  const handleClick = (content) => {
    setOpen({ open: true, content });
  };

  return (
    <>
      <Head>
        <title>Ammar Bin Shakir - Fullstack Engineer</title>
        <meta
          name="description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          property="og:title"
          content="Ammar Bin Shakir - Fullstack Engineer"
        />
        <meta
          property="og:description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          property="og:image"
          content="https://ammar.geekscrew.xyz/avatar.jpeg"
        />
        <meta property="og:url" content="https://ammar.geekscrew.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ammar Bin Shakir - Fullstack Engineer"
        />
        <meta
          name="twitter:description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          name="twitter:image"
          content="https://ammar.geekscrew.xyz/avatar.jpeg"
        />
        <link rel="icon" href="/avatar.jpeg" />
      </Head>

      <div
        className={` ${recursive.className} w-full bg-teal-50 h-screen flex flex-col
        `}
        // bg-gradient-to-tl from-[#f7ad02] via-[#ccc85f] to-[#125a70]  min-h-screen animate-gradient
      >
        <nav class="border border-t-0 border-l-0 border-r-0 shadow-md  backdrop-blur-md">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a
              href="https://flowbite.com"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                Geeks Crew
              </span>
            </a>
          </div>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-between flex-grow  p-5">
          {["About Us", "Our Work", "Team Expertise", "Contact Us"].map(
            (item) => (
              <div
                key={item}
                onClick={() => handleClick(item)}
                className="text-gray-900 hover:text-white cursor-pointer  p-5 rounded-lg shadow-md  border  backdrop-blur-md flex items-center justify-center hover:bg-gradient-to-tl from-[#f7ad02] via-[#ccc85f] to-[#125a70]   animate-gradient"
              >
                <h1 className="text-3xl font-bold leading-none tracking-tight  md:text-5xl lg:text-6xl text-center  ">
                  {item}
                </h1>
              </div>
            )
          )}
        </div>
        {open && (
          <BottomSheetComponent
            open={Boolean(open.open)}
            content={open.content}
            setOpen={setOpen}
          />
        )}
      </div>
    </>
  );
}
