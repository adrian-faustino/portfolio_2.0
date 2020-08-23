export const scrollToRef = (
  ref: React.RefObject<HTMLDivElement | HTMLElement>
) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
