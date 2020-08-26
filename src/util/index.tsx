export const scrollToRef = (
  ref: React.RefObject<HTMLDivElement | HTMLElement>
) => {
  console.log("Scrolling...");
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
