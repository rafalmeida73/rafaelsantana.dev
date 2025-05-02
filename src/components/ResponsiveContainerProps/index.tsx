import { RefObject } from "react";

import { StackedCarousel } from "../StackedCarousel";
import { useResizeDetector } from "react-resize-detector";

export interface ResponsiveContainerProps {
  render: (
    parentWidth: number,
    carouselRef?: RefObject<typeof StackedCarousel>,
  ) => React.ReactNode;
  carouselRef?: RefObject<typeof StackedCarousel>;
}

export const ResponsiveContainer = ({
  render,
  carouselRef,
}: ResponsiveContainerProps) => {
  const { width, ref } = useResizeDetector();

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="w-full">
      {width && render(width, carouselRef)}
    </div>
  );
};
