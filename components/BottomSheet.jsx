import { Fira_Code } from "next/font/google";
import { BottomSheet } from "react-spring-bottom-sheet";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";
const recursive = Fira_Code({ weight: "400", subsets: ["latin-ext"] });

export default function BottomSheetComponent({ open, setOpen, content }) {
  console.log("open", open);
  return (
    <>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen({ open: false, content: "" })}
        blocking={true}
        className="bg-black"
        // header={
        //   <input
        //     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
        //     type="text"
        //     placeholder="Text input field in a sticky header"
        //   />
        // }
        snapPoints={({ maxHeight }) => [maxHeight / 2, maxHeight * 0.9]}
      >
        <div className={`p-5 ${recursive.className} flex flex-col items-center`}>
          <h1 className="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center  ">
            {content}
          </h1>
          <img src="/coming-soon.webp" alt="Flowbite Logo" />
        </div>
      </BottomSheet>
    </>
  );
}
