// Update the import path and filename as needed, for example:
import Footer from "../../page-components/home/footer";
import Heroes from "../../page-components/home/heroes";
import Heading from "../../page-components/home/heading";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center flex-1 justify-center md:justify-start text-center gap-y-8">
        <Heading/>
        <Heroes/>
      </div>
      <Footer/>
    </div>
  );
}
