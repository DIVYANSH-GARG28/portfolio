interface TapeBannerProps {
  text?: string;
  bg?: string;
  tilt?: "left" | "right" | "none";
  reverse?: boolean;
}

export const TapeBanner = ({
  text = "PROBLEM TO PRODUCT ✦ DIVYANSH GARG ✦ BUILDER ✦ SHIP INCREMENTALLY ✦ AI & IOT",
  bg = "bg-[#FFE23A]",
  tilt = "left",
  reverse = false,
}: TapeBannerProps) => {
  const tiltClass =
    tilt === "left"
      ? "-rotate-1 md:-rotate-2"
      : tilt === "right"
      ? "rotate-1 md:rotate-2"
      : "";

  const repeated = Array(8).fill(text).join(" ✦ ");

  return (
    <div
      className={`relative z-10 w-full overflow-hidden comic-tape-bar ${bg} text-[#0C0E0F] py-2 md:py-3 ${tiltClass}`}
    >
      <div
        className={`flex whitespace-nowrap will-change-transform ${
          reverse ? "animate-tape-scroll-rev" : "animate-tape-scroll"
        }`}
      >
        <span className="text-base md:text-xl font-tape tracking-wider px-4">
          {repeated}
        </span>
        <span className="text-base md:text-xl font-tape tracking-wider px-4">
          {repeated}
        </span>
      </div>
    </div>
  );
};
