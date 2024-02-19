import { subtle } from "crypto";
import Image from "next/image";
import { PEOPLE_URL } from "../constants";
interface Probs {
  img: string;
  title: "Putuk Truno Camp" | "Mountain View Camp";
  subtitle: "Prigen, Pasuruan" | "Somewhere in the Wilderness";
  peopleJoined: "50+ Joined";
}
const CampSite = ({ img, title, subtitle, peopleJoined }: Probs) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${img} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full p-4 bg-green-50">
            <Image src={"/folded-map.svg"} alt={"map"} width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((item) => (
              <Image
                src={item}
                alt={"url"}
                key={item}
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampSite;
