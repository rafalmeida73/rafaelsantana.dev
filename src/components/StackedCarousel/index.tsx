import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  StackedCarouselProps,
  renderedSlide,
  slideInfoMap,
  staticSlideInfo,
} from "./types";

// Define static defaults outside the component function
const defaultScaleFactor: number = 0.95;
const defaultTransitionTime: number = 450;
const MAX_Z_INDEX = 100; // Use a constant for clarity

// Helper function (can be outside or inside, doesn't depend on component scope)
function shouldRecaclculate(
  prop1: StackedCarouselProps,
  prop2: StackedCarouselProps,
): boolean {
  if (!prop2) return true; // If previous props don't exist yet

  return (
    prop1.slideWidth !== prop2.slideWidth ||
    prop1.carouselWidth !== prop2.carouselWidth ||
    prop1.maxVisibleSlide !== prop2.maxVisibleSlide ||
    prop1.currentVisibleSlide !== prop2.currentVisibleSlide ||
    prop1.fadeDistance !== prop2.fadeDistance ||
    prop1.customScales?.join("") !== prop2.customScales?.join("") ||
    prop1.data.length !== prop2.data.length // Added data length check
  );
}

export const StackedCarousel = (props: StackedCarouselProps) => {
  const {
    data,
    slideComponent: Component,
    slideWidth,
    carouselWidth,
    height: initialHeight, // Rename to avoid clash with calculated height state
    maxVisibleSlide,
    currentVisibleSlide: currentVisibleDisplaySlideProp,
    transitionTime = defaultTransitionTime,
    swipeSpeed,
    fadeDistance,
    customScales,
    onActiveSlideChange,
    disableSwipe,
    className,
    useGrabCursor,
    customTransition,
  } = props;

  // Refs for instance variables and DOM elements
  const listRef = useRef<HTMLDivElement>(null);
  const slideInfoMapRef = useRef<slideInfoMap>({});
  const sortedSlideInfoRef = useRef<staticSlideInfo[]>([]);
  const slidePerSideRef = useRef<number>(0);
  const clearSlideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const keyCountRef = useRef<number>(data ? data.length : 0); // Initial key counter based on data
  const addedSlideRef = useRef<number>(0);
  const centerPositionRef = useRef<number>(0);
  const renderedSlidePerSideRef = useRef<number>(0);
  const prevPropsRef = useRef<StackedCarouselProps>(props); // Ref to store previous props

  // State
  const [initalSwipeX, setInitialSwipeX] = useState<number>(0);
  const [swipeStarted, setSwipeStarted] = useState<boolean>(false);
  const [renderedSlides, setRenderedSlides] = useState<renderedSlide[]>([]);
  const [prevRenderedSlides, setPrevRenderedSlides] = useState<renderedSlide[]>(
    [],
  ); // To store state before swipe modifies positions visually
  // Provide the correct type annotation here
  const [swipePositionInfo, setSwipePositionInfo] = useState<
    { slideIndex: number; maxLeft: number; maxRight: number }[]
  >([]);
  const [swipRight, setSwipRight] = useState<boolean>(false); // For z-index transition duration adjustment
  const [tempShift, setTempShift] = useState<boolean>(false); // For highlighting center during swipe
  const [calculatedHeight, setCalculatedHeight] = useState<number>(
    initialHeight || 0,
  );

  // Memoized calculation for scales and offsets (depends only on props)
  const calculateScaleAndOffsets = useCallback(
    (
      slidePerSideValue: number,
    ): { offsets: number[]; scaledOffsets: number[]; scales: number[] } => {
      const availableSpace = carouselWidth / 2 - slideWidth / 2;
      const scales = [1];
      const scaledSlideWidths = [slideWidth];

      for (let slide = 1; slide <= slidePerSideValue; slide++) {
        const scale =
          customScales && customScales[slide] !== undefined // Check customScales has entry for index
            ? customScales[slide]
            : Math.pow(defaultScaleFactor, slide);
        scales.push(scale);
        scaledSlideWidths.push(slideWidth * scale);
      }

      let includedSlideWidths = scaledSlideWidths.slice(1);
      let fillingSpace = availableSpace;
      if (fadeDistance !== undefined) {
        // Adjust calculation if fadeDistance is used
        // Ensure slidePerSideValue is at least 1 before slicing
        const endSlice = slidePerSideValue > 0 ? slidePerSideValue : 1;
        includedSlideWidths = scaledSlideWidths.slice(1, endSlice);
        fillingSpace = availableSpace * (1 - fadeDistance);
      }

      const totalSlideWidth = includedSlideWidths.reduce((a, b) => a + b, 0);
      const offSetPercentage = totalSlideWidth
        ? fillingSpace / totalSlideWidth
        : 0;

      const scaledOffsets = [0];
      const offsets = [0];
      for (let slide = 1; slide <= slidePerSideValue; slide++) {
        const isCustomFade =
          fadeDistance !== undefined && slide === slidePerSideValue;
        const scale = scales[slide];
        scaledOffsets[slide] = isCustomFade
          ? (fadeDistance as number) * availableSpace // fadeDistance is checked for undefined earlier
          : slideWidth * scale * offSetPercentage;
        offsets[slide] = scaledOffsets[slide] + slideWidth * ((1 - scale) / 2);
      }

      return { offsets, scaledOffsets, scales };
    },
    [carouselWidth, slideWidth, customScales, fadeDistance, defaultScaleFactor],
  );

  // Need modDataRange defined before initializeProperties if it were a dependency
  // But we removed it as dependency, so order doesn't strictly matter now, but keep it before for clarity
  const modDataRange = useCallback(
    (n: number): number => {
      const m = data ? data.length : 0;
      if (m === 0) return -1; // Handle no data

      return ((n % m) + m) % m;
    },
    [data?.length],
  ); // Depend on data.length (use optional chaining)

  // Memoized function to initialize/re-initialize properties and slides
  const initializeProperties = useCallback(
    (currentSlidesState: renderedSlide[], isInitialSetup: boolean) => {
      // --- Validation ---
      if (!data || data.length === 0) {
        console.error(
          "react-stacked-center-carousel: data array is empty or undefined.",
        );

        return null; // Handle empty data gracefully
      }
      if (data.length < (maxVisibleSlide + 1) / 2) {
        console.error(
          "react-stacked-center-carousel: You must have more than (maxVisibleSlide + 1) / 2 data items.",
        );

        return null; // Prevent errors, maybe return default state?
      }
      if (
        (currentVisibleDisplaySlideProp &&
          currentVisibleDisplaySlideProp % 2 !== 1) ||
        maxVisibleSlide % 2 !== 1
      ) {
        console.error(
          "react-stacked-center-carousel: currentVisibleSlide or maxVisibleSlide must be an odd number.",
        );

        return null;
      }
      if (
        currentVisibleDisplaySlideProp &&
        currentVisibleDisplaySlideProp > maxVisibleSlide
      ) {
        console.error(
          "react-stacked-center-carousel: currentVisibleSlide must be smaller than maxVisibleSlide.",
        );

        return null;
      }
      if (
        fadeDistance !== undefined &&
        (fadeDistance > 1 || fadeDistance < 0)
      ) {
        console.error(
          "react-stacked-center-carousel: fadeDistance is a percentage value in the range of 0 - 1",
        );
        // Don't return null here, just log error, invalid value will be ignored by calculation logic
      }
      // Check length required for customScales based on slidePerSide derived from maxVisibleSlide
      const tempRenderedSlidePerSide = (maxVisibleSlide + 1) / 2;
      const tempSlidePerSide = Math.max(tempRenderedSlidePerSide, 1); // Scale array needs up to slidePerSide index
      if (customScales && customScales.length <= tempSlidePerSide) {
        // Need entry for index `tempSlidePerSide`
        console.error(
          `react-stacked-center-carousel: customScales array length (${customScales.length}) must be at least ${tempSlidePerSide + 1} to cover all visible slides.`,
        );

        return null; // This is likely a fatal configuration error
      }
      if (swipeSpeed && (swipeSpeed > 0.99 || swipeSpeed < 0.01)) {
        console.error(
          "react-stacked-center-carousel: swipeSpeed must have a value between 0.01 and 0.99",
        );
        // Don't return null, invalid value might just result in default behavior or clamping later
      }
      // --- End Validation ---

      const currentVisibleSlides =
        currentVisibleDisplaySlideProp || maxVisibleSlide;
      const visibleSlidePerSide = (currentVisibleSlides - 1) / 2;
      const newSlidePerSide = Math.max(visibleSlidePerSide + 1, 1);
      const totalRenderCount = maxVisibleSlide + 2; // Number of placeholders needed
      const newRenderedSlidePerSide = (maxVisibleSlide + 1) / 2;

      // Use the memoized calculation
      const { offsets, scaledOffsets, scales } =
        calculateScaleAndOffsets(newSlidePerSide);

      // Determine base slides: Start fresh if it's initial setup or if maxVisibleSlide changed fundamentally
      const needsFreshStart =
        isInitialSetup ||
        prevPropsRef.current?.maxVisibleSlide !== maxVisibleSlide;
      const baseSlides = needsFreshStart
        ? Array(totalRenderCount).fill(null)
        : currentSlidesState.filter(({ slideIndex, dataIndex }) => {
            // Keep slides within the *new* range or placeholder slides during updates
            return dataIndex === -1 || Math.abs(slideIndex) <= newSlidePerSide;
          });

      // Ensure baseSlides has the correct length, padding/truncating as needed
      while (baseSlides.length < totalRenderCount) baseSlides.push(null);
      if (baseSlides.length > totalRenderCount)
        baseSlides.length = totalRenderCount;

      const newSlideInfoMap: slideInfoMap = {};

      // Find current center slide's index relative to the baseSlides array
      let currentCenterSlideRelativeIndex = baseSlides.findIndex(
        // FIX: Check if 'slide' is truthy (not null/undefined) before accessing properties
        (slide) => slide && slide.slideIndex === 0,
      );

      // If center slide not found (e.g., during prop changes or initially), default to the calculated middle index
      if (currentCenterSlideRelativeIndex === -1 || needsFreshStart) {
        // Also reset if needsFreshStart is true
        currentCenterSlideRelativeIndex = Math.floor(totalRenderCount / 2);
      }

      // Determine the data index for the center slide
      // Use optional chaining on baseSlides[index] in case the calculated index is somehow invalid (though unlikely after checks)
      const currentCenterDataIndex = needsFreshStart
        ? 0 // Start at the beginning on fresh start
        : (baseSlides[currentCenterSlideRelativeIndex]?.dataIndex ?? 0); // Use existing center's data index or default to 0

      let filledWidth = 0;
      const newCenterPosition = carouselWidth / 2 - slideWidth / 2;
      const finalRenderedSlides: renderedSlide[] = [...baseSlides]; // Create a mutable copy

      // Calculate properties for each slide position relative to the center
      for (let absIndex = 0; absIndex <= newSlidePerSide; absIndex++) {
        const offset = offsets[absIndex] ?? 0;
        const slideScale = scales[absIndex] ?? 0;
        const currentOffSet = filledWidth + offset;

        [-absIndex, absIndex].forEach((slideIndex) => {
          const relativeIndex = currentCenterSlideRelativeIndex + slideIndex;
          // Ensure relativeIndex is within the bounds of the finalRenderedSlides array
          if (relativeIndex < 0 || relativeIndex >= totalRenderCount) return;

          const position = slideIndex >= 0 ? currentOffSet : -currentOffSet;
          const opacity = absIndex === newSlidePerSide ? 0 : 1; // Fade out the outermost calculated slide
          const dataIndex = modDataRange(currentCenterDataIndex + slideIndex);
          const existingSlide = finalRenderedSlides[relativeIndex]; // Get potential existing slide at this slot

          finalRenderedSlides[relativeIndex] = {
            dataIndex,
            scale: slideScale,
            position: position,
            slideIndex: slideIndex,
            opacity: opacity,
            zIndex: newRenderedSlidePerSide - Math.abs(slideIndex), // Z-index based on distance from center
            // Preserve key if slide exists and wasn't null, otherwise generate initial or reuse from existing
            key:
              existingSlide?.key ??
              (isInitialSetup
                ? slideIndex
                : keyCountRef.current + slideIndex + Date.now()), // Ensure unique keys, add timestamp for robustness
          };

          // Store calculated static info for this slide index
          if (absIndex <= newRenderedSlidePerSide) {
            // Only store info for potentially visible slides
            newSlideInfoMap[slideIndex] = {
              position: position,
              scale: slideScale,
              opacity: opacity,
              slideIndex: slideIndex, // Add slideIndex here too
              maxTransformDistance: {}, // Calculated later
              maxTransformScale: {}, // Calculated later
              maxTransformOpacity: {}, // Calculated later
            };
          }
        });
        if (absIndex !== 0) filledWidth += scaledOffsets[absIndex] ?? 0;
      }

      // Calculate transform limits used for swipe interpolation
      for (let i = -newSlidePerSide; i <= newSlidePerSide; i++) {
        if (!newSlideInfoMap[i]) continue; // Skip if index doesn't exist

        // Opacity change happens when fading in/out at the edges
        newSlideInfoMap[i].maxTransformOpacity = {
          left: i === -newSlidePerSide + 1 || i === newSlidePerSide ? 1 : 0,
          right: i === -newSlidePerSide || i === newSlidePerSide - 1 ? 1 : 0,
        };

        // Calculate distance/scale change relative to the neighbor towards the center
        const leftNeighbor = newSlideInfoMap[i - 1];
        if (i === -newSlidePerSide || !leftNeighbor) {
          newSlideInfoMap[i].maxTransformDistance.left = 0;
          newSlideInfoMap[i].maxTransformScale.left = 0;
        } else {
          newSlideInfoMap[i].maxTransformDistance.left =
            newSlideInfoMap[i].position - leftNeighbor.position;
          newSlideInfoMap[i].maxTransformScale.left = Math.abs(
            newSlideInfoMap[i].scale - leftNeighbor.scale,
          );
        }

        const rightNeighbor = newSlideInfoMap[i + 1];
        if (i === newSlidePerSide || !rightNeighbor) {
          newSlideInfoMap[i].maxTransformDistance.right = 0;
          newSlideInfoMap[i].maxTransformScale.right = 0;
        } else {
          newSlideInfoMap[i].maxTransformDistance.right =
            rightNeighbor.position - newSlideInfoMap[i].position;
          newSlideInfoMap[i].maxTransformScale.right = Math.abs(
            rightNeighbor.scale - newSlideInfoMap[i].scale,
          );
        }
      }

      // Fill placeholder slides if maxVisibleSlide > currentVisibleSlides (used for responsive transitions)
      if (maxVisibleSlide > currentVisibleSlides) {
        const maxRenderedSlidePerSideValue = (maxVisibleSlide + 1) / 2;
        const currentSlidePerSideValue = newSlidePerSide; // The number currently calculated fully
        for (
          let i = currentSlidePerSideValue + 1;
          i <= maxRenderedSlidePerSideValue;
          i++
        ) {
          for (let direct = 1; direct >= 0; direct--) {
            // 1 for right side, 0 for left side
            const slideIndex = direct === 1 ? i : -i;
            const relativeIndex = currentCenterSlideRelativeIndex + slideIndex;

            // Ensure index is within the bounds of our array
            if (relativeIndex < 0 || relativeIndex >= totalRenderCount)
              continue;

            // If the slot is currently null (meaning it needs a placeholder)
            if (finalRenderedSlides[relativeIndex] === null) {
              // Find the adjacent slide towards the center to copy position/scale from
              const adjacentIndex = relativeIndex + (direct === 1 ? -1 : 1);
              const adjacentSlide = finalRenderedSlides[adjacentIndex];

              if (adjacentSlide) {
                // Make sure adjacent slide exists and is not null
                finalRenderedSlides[relativeIndex] = {
                  scale: adjacentSlide.scale, // Copy from adjacent
                  position: adjacentSlide.position, // Copy from adjacent
                  key: keyCountRef.current + slideIndex + Date.now(), // Generate unique key
                  dataIndex: -1, // Mark as placeholder
                  slideIndex,
                  opacity: 0, // Placeholders are invisible
                  zIndex: 0, // And have no z-index impact
                };
              }
            }
          }
        }
      }

      // Final check: Fill any remaining null slots with safe defaults
      for (let i = 0; i < totalRenderCount; i++) {
        if (finalRenderedSlides[i] === null) {
          finalRenderedSlides[i] = {
            key: `placeholder-${i}-${Date.now()}`, // Ensure unique key
            dataIndex: -1,
            slideIndex: i - currentCenterSlideRelativeIndex, // Approximate slideIndex based on position
            opacity: 0,
            position: newCenterPosition, // Default position
            scale: 0,
            zIndex: 0,
          };
        }
      }

      const newSortedSlideInfo = Object.values(newSlideInfoMap).sort(
        (a, b) => a.position - b.position,
      );

      // Update refs directly - these don't trigger re-renders but hold calculated values for use in handlers/effects
      slideInfoMapRef.current = newSlideInfoMap;
      sortedSlideInfoRef.current = newSortedSlideInfo;
      slidePerSideRef.current = newSlidePerSide;
      centerPositionRef.current = newCenterPosition;
      renderedSlidePerSideRef.current = newRenderedSlidePerSide;

      return finalRenderedSlides; // Return the calculated slides for state update
    },
    [
      // Dependencies... (same as before)
      data,
      maxVisibleSlide,
      currentVisibleDisplaySlideProp,
      carouselWidth,
      slideWidth,
      fadeDistance,
      customScales,
      swipeSpeed,
      calculateScaleAndOffsets,
      modDataRange, // Include modDataRange as it's called inside
    ],
  );

  // --- Further Helper Functions ---

  const getZIndex = useCallback((slideIndex: number): number => {
    // Use the ref holding the calculated value based on maxVisibleSlide
    return renderedSlidePerSideRef.current - Math.abs(slideIndex);
  }, []); // No dependencies, as it reads a ref updated elsewhere

  const safeGetSlideInfo = useCallback(
    (slideIndex: number): staticSlideInfo => {
      let positionIndex = slideIndex;
      const slidePerSide = slidePerSideRef.current;
      // Clamp index to the range of calculated info
      if (positionIndex > slidePerSide) positionIndex = slidePerSide;
      else if (positionIndex < -slidePerSide) positionIndex = -slidePerSide;

      // Provide a default fallback if map entry doesn't exist for the clamped index
      return (
        slideInfoMapRef.current[positionIndex] || {
          position: 0,
          scale: 0,
          opacity: 0,
          slideIndex: positionIndex,
          maxTransformDistance: { left: 0, right: 0 },
          maxTransformScale: { left: 0, right: 0 },
          maxTransformOpacity: { left: 0, right: 0 },
        }
      );
    },
    [],
  ); // No dependencies, reads refs

  const getSlideDOMInfo = useCallback(
    (
      slideIndex: number,
    ): {
      scale: number;
      slideDOM: Element | null;
      slideCenterOffset: number;
    } => {
      const listElement = listRef.current;
      // Attempt to find slide by data-key or class name if needed
      // Using class name based on slideIndex might be fragile if slideIndex changes before DOM updates
      const slideClassName = `react-stacked-center-carousel-slide-${slideIndex}`;

      if (!listElement)
        return { scale: 0, slideDOM: null, slideCenterOffset: 0 };

      const slideDOM = listElement.querySelector(`.${slideClassName}`); // Use querySelector for robustness

      if (!slideDOM) return { scale: 0, slideDOM: null, slideCenterOffset: 0 };

      const slideRect = slideDOM.getBoundingClientRect();
      const { left: carouselLeft } = listElement.getBoundingClientRect();
      const scale = slideWidth > 0 ? slideRect.width / slideWidth : 0; // Avoid division by zero
      const additionalOffset = slideWidth * 0.5 * (1 - scale); // Offset due to scaling from center
      const slideOffsetLeft = slideRect.left - carouselLeft - additionalOffset;
      // Calculate offset relative to the calculated center position
      const slideCenterOffset = slideOffsetLeft - centerPositionRef.current;

      return { scale, slideDOM, slideCenterOffset };
    },
    [slideWidth],
  ); // Depends on prop slideWidth and ref centerPositionRef

  const getSlideScaleAndOpacity = useCallback(
    (centerOffset: number): { scale: number; opacity: number } => {
      const sortedSlides = sortedSlideInfoRef.current;
      if (!sortedSlides || sortedSlides.length === 0)
        return { scale: 1, opacity: 1 }; // Default if not initialized

      // Find the slide *just after* the current offset (or the last one if offset is beyond the last slide's position)
      const targetSlide =
        sortedSlides.find(
          ({ position }) => Math.ceil(position) >= centerOffset,
        ) ?? sortedSlides[sortedSlides.length - 1];

      if (!targetSlide) return { scale: 1, opacity: 1 }; // Fallback if no target slide found

      const {
        position,
        slideIndex,
        scale,
        maxTransformDistance,
        maxTransformScale,
        maxTransformOpacity,
        opacity,
      } = targetSlide;

      // Calculate offset relative to the *targetSlide's* ideal position
      const offset = Math.ceil(position) - centerOffset;

      // Determine interpolation factor based on distance to the *left* neighbor's position
      const distanceLeft = maxTransformDistance.left ?? 0;
      const scaleChangeLeft = maxTransformScale.left ?? 0;
      const opacityChangeLeft = maxTransformOpacity.left ?? 0; // This seems wrongly named, should relate to fading *in* from left?

      // Percentage towards the left slide (0 means at targetSlide's position, 1 means at slideIndex-1's position)
      // Clamp percentage between 0 and 1
      let offsetPercentage = distanceLeft === 0 ? 0 : offset / distanceLeft;
      offsetPercentage = Math.max(0, Math.min(1, offsetPercentage));

      // Interpolate: Start with target values and subtract the change *towards* the left neighbor
      return {
        scale: scale - scaleChangeLeft * offsetPercentage,
        opacity: opacity - opacityChangeLeft * offsetPercentage, // Check if opacity logic needs inversion
      };
    },
    [],
  ); // Depends on sortedSlideInfoRef

  const centerOffset = useCallback(
    (slideIndex: number): number => {
      const { slideCenterOffset } = getSlideDOMInfo(slideIndex);
      // Use the calculated center position stored in the ref
      const centerPosition = centerPositionRef.current;

      return Math.abs(centerPosition - slideCenterOffset);
    },
    [getSlideDOMInfo],
  ); // Depends on other callbacks/refs

  const updateHeight = useCallback(() => {
    // Only calculate if height is not explicitly provided and the list ref is available
    if (initialHeight || !listRef.current) return;

    const { slideDOM } = getSlideDOMInfo(0); // Check center slide's DOM element
    if (slideDOM) {
      try {
        // Ensure element is valid before getting style
        const computedStyle = window.getComputedStyle(slideDOM);
        const parsedHeight = parseInt(computedStyle.height);
        // Update state only if height is valid and different from current calculated height
        if (
          !isNaN(parsedHeight) &&
          parsedHeight > 0 &&
          parsedHeight !== calculatedHeight
        ) {
          setCalculatedHeight(parsedHeight);
        }
      } catch (error) {
        console.error("Error calculating height:", error);
      }
    }
  }, [initialHeight, getSlideDOMInfo, calculatedHeight]); // Dependency on calculatedHeight prevents infinite loops if DOM height fluctuates

  // --- Slide Management Callbacks ---

  const clearUselessSlide = useCallback(() => {
    addedSlideRef.current = 0; // Reset added slide counter used for z-index adjustment
    setRenderedSlides((currentSlides) =>
      currentSlides.filter(({ slideIndex, dataIndex }) => {
        // Keep placeholders and slides within the visible + 1 range
        return (
          dataIndex === -1 || Math.abs(slideIndex) <= slidePerSideRef.current
        );
      }),
    );
  }, []); // Depends on refs

  const debouncedClearInvisibleSlide = useCallback(() => {
    clearTimeout(clearSlideTimeoutRef.current); // Clear existing timeout
    // Set a new timeout to cleanup slides after transitions should have finished
    clearSlideTimeoutRef.current = setTimeout(
      clearUselessSlide,
      transitionTime ?? defaultTransitionTime, // Use provided or default transition time
    );
  }, [clearUselessSlide, transitionTime]);

  const resetSlides = useCallback(() => {
    // Update slide properties to their final calculated positions/styles after movement/swipe
    setRenderedSlides((currentSlides) =>
      currentSlides.map((slide) => {
        // Skip placeholders
        if (slide.dataIndex === -1) return slide;

        // Get the ideal static info for this slide's index
        const { opacity, scale, position } = safeGetSlideInfo(slide.slideIndex);

        return {
          ...slide,
          zIndex: getZIndex(slide.slideIndex), // Ensure correct final Z-index
          opacity,
          scale,
          position,
        };
      }),
    );
    // Reset swipe direction state *after* slides are set to their final positions
    setSwipRight(false);
    // Schedule cleanup of slides that moved out of range and are now invisible
    debouncedClearInvisibleSlide();
  }, [safeGetSlideInfo, getZIndex, debouncedClearInvisibleSlide]);

  const getInsertionInfo = useCallback((steps: number) => {
    const slidePerSide = slidePerSideRef.current;
    // Index of the slide that needs to be added first when moving 'steps'
    const newAddedSlideIndex =
      steps > 0
        ? slidePerSide - steps + 1 // Moving right (steps=1), add from right: index = max - 1 + 1 = max
        : -slidePerSide - steps - 1; // Moving left (steps=-1), add from left: index = -max - (-1) - 1 = -max
    // Target index represents the edge slide that needs to be filled up to
    const targetSlideIndex = steps > 0 ? slidePerSide : -slidePerSide;
    // Condition to check if more slides are needed
    const requireMoreSlide = (current: number, target: number) =>
      steps > 0 ? current <= target : current >= target;
    // Direction to increment/decrement the slide index being added
    const updateCount = steps > 0 ? 1 : -1;

    return {
      newAddedSlideIndex,
      targetSlideIndex,
      requireMoreSlide,
      updateCount,
    };
  }, []); // Depends on ref

  const moveCarousel = useCallback(
    (steps: number, disableSwipeRightState: boolean = false) => {
      // If steps is 0 (e.g., after swipe ends on the same slide), just reset positions smoothly
      if (steps === 0) {
        resetSlides();

        return;
      }

      let newCenterDataIndex = -1; // Initialize tracker for the new center slide's data index

      // Phase 1: Map existing slides to their new logical positions
      const preliminarySlides = renderedSlides.map((oldSlide) => {
        const { slideIndex, dataIndex } = oldSlide;
        // Keep placeholders as they are
        if (dataIndex === -1) return oldSlide;

        const newSlideIndex = slideIndex - steps; // Moving right (steps=1) decreases index, moving left increases

        // Find the data index of the slide that *will become* the center
        if (newSlideIndex === 0) {
          newCenterDataIndex = modDataRange(dataIndex); // Calculate based on original dataIndex
        }

        // Get the static properties (position, scale, opacity) for the new logical index
        const slideInfo = safeGetSlideInfo(newSlideIndex);

        return {
          ...oldSlide,
          slideIndex: newSlideIndex, // Update logical index
          position: slideInfo.position, // Set target position
          scale: slideInfo.scale, // Set target scale
          opacity: slideInfo.opacity, // Set target opacity
          zIndex: getZIndex(newSlideIndex), // Recalculate Z-index based on new logical position
        };
      });

      // Phase 2: Add new slides if necessary (slides entering the view)
      const slidePerSide = slidePerSideRef.current;
      const maxSlideIndex = steps > 0 ? slidePerSide : -slidePerSide; // Edge index from where new slides appear
      addedSlideRef.current += Math.abs(steps); // Track how many added in this step for z-index adjustment

      const insertionInfo = getInsertionInfo(steps);
      let { newAddedSlideIndex } = insertionInfo;
      const { requireMoreSlide, updateCount, targetSlideIndex } = insertionInfo;

      const finalSlides = [...preliminarySlides]; // Work with a mutable copy for insertions

      while (requireMoreSlide(newAddedSlideIndex, targetSlideIndex)) {
        // Check if a slide with this target index already exists (e.g., from previous state)
        const slideAlreadyExist = finalSlides.find(
          ({ slideIndex }) => slideIndex === newAddedSlideIndex,
        );

        // If no slide exists for this required index, create and insert it
        if (!slideAlreadyExist) {
          // Find the slide it should be inserted next to (the one logically closer to the center)
          const adjacentSlideIndex = newAddedSlideIndex - updateCount;
          const insertPositionIndex = finalSlides.findIndex(
            ({ slideIndex, dataIndex }) =>
              slideIndex === adjacentSlideIndex && dataIndex !== -1, // Find the *real* adjacent slide, not a placeholder
          );

          // Only insert if we found a valid adjacent slide to determine dataIndex and position
          if (insertPositionIndex !== -1) {
            const adjacentSlide = finalSlides[insertPositionIndex];
            // Calculate dataIndex for the new slide based on the adjacent one
            const insertDataIndex = modDataRange(
              adjacentSlide.dataIndex + updateCount,
            );

            if (insertDataIndex !== -1) {
              // Ensure dataIndex calculation is valid
              // New slides appear from the edge position/scale but initially transparent
              const { scale, position } = safeGetSlideInfo(maxSlideIndex);
              keyCountRef.current += 1; // Increment unique key counter
              const zIndex = getZIndex(newAddedSlideIndex);

              const insertSlide: renderedSlide = {
                scale,
                position,
                opacity: 0, // Start transparent, will fade in during resetSlides
                // Adjust initial zIndex based on how many slides were added *during this move* operation
                // This helps maintain layering during rapid moves. ResetSlides fixes it finally.
                zIndex: zIndex - addedSlideRef.current,
                slideIndex: newAddedSlideIndex,
                dataIndex: insertDataIndex,
                key: keyCountRef.current + "-" + insertDataIndex, // Make key more robust
              };

              // Insert the new slide into the array at the correct location
              // If moving right (steps > 0), insert *after* the adjacent slide
              // If moving left (steps < 0), insert *before* the adjacent slide (which is at insertPositionIndex)
              finalSlides.splice(
                steps > 0 ? insertPositionIndex + 1 : insertPositionIndex,
                0,
                insertSlide,
              );
            }
          }
        }
        newAddedSlideIndex += updateCount; // Move to the next index to check/add
      }

      // Phase 3: Update state and trigger follow-up actions
      setRenderedSlides(finalSlides); // Update the state with the new slide configuration
      setSwipeStarted(false); // Ensure swipe interaction state is reset
      // Set swipe direction hint for transition timing, unless explicitly disabled
      setSwipRight(disableSwipeRightState ? false : steps < 0);

      // Trigger active slide change callback if the center slide's data has changed
      if (onActiveSlideChange && newCenterDataIndex !== -1) {
        // Check if new center data index is different from the previous center slide's data index if possible
        // This prevents redundant calls if moveCarousel(0) was called or data didn't actually change center
        const previousCenterSlide = renderedSlides.find(
          (s) => s.slideIndex === 0,
        );
        if (
          !previousCenterSlide ||
          previousCenterSlide.dataIndex !== newCenterDataIndex
        ) {
          onActiveSlideChange(newCenterDataIndex);
        }
      }

      // Use setTimeout to defer resetting slide visual properties (opacity, final z-index)
      // This allows React to render the `finalSlides` structure first, then apply the smooth transition styles.
      setTimeout(() => {
        resetSlides(); // Applies final styles, fades in new slides, and schedules cleanup
      }, 0); // Timeout 0 pushes execution to the end of the current event loop cycle
    },
    [
      renderedSlides, // Depends on current slides state
      onActiveSlideChange,
      modDataRange,
      safeGetSlideInfo,
      getZIndex,
      getInsertionInfo,
      resetSlides, // Include resetSlides as it's called internally and relies on state/refs
    ],
  );

  // --- Swipe Handlers ---

  const getSwipeX = useCallback(
    (e: React.MouseEvent | React.TouchEvent): number => {
      if ("touches" in e) {
        return e.touches[0].clientX;
      }

      return e.clientX;
    },
    [],
  );

  const onSwipeStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (disableSwipe || swipeStarted) return; // Prevent starting if disabled or already started

      // Prevent default actions like text selection or image dragging during swipe
      e.preventDefault();

      clearTimeout(clearSlideTimeoutRef.current); // Stop any pending slide cleanup
      setSwipeStarted(true);
      setTempShift(false); // Reset visual shift flag

      const currentInitialSwipeX = getSwipeX(e);
      setInitialSwipeX(currentInitialSwipeX);

      // Capture the *current visual state* of slides before applying swipe transformations.
      // This avoids issues if a transition was ending.
      let centerDataIndex = -1; // Track data index of the visually centered slide
      const newSwipePositionInfo = [];
      const slidesAtSwipeStart: renderedSlide[] = [];
      let tempShiftDirection = 0; // Detect if a side slide is visually closer than center

      // Find the visual center offset of the logical center slide (index 0)
      const centerSlideInfo = renderedSlides.find((s) => s.slideIndex === 0);
      const centerSlideDOMInfo = centerSlideInfo ? getSlideDOMInfo(0) : null;
      const centerSlideVisualOffset = centerSlideDOMInfo
        ? centerSlideDOMInfo.slideCenterOffset
        : centerPositionRef.current;

      // Iterate through current state to capture visual properties
      for (const slide of renderedSlides) {
        const { slideIndex, dataIndex } = slide;

        if (dataIndex === -1) {
          // Include placeholders, but they don't participate in swipe dynamics
          slidesAtSwipeStart.push(slide);
          newSwipePositionInfo.push({ slideIndex, maxLeft: 0, maxRight: 0 });
          continue;
        }

        // Get current visual properties directly from DOM info
        const { slideCenterOffset, scale, slideDOM } =
          getSlideDOMInfo(slideIndex);
        const currentOpacity = slideDOM
          ? parseFloat(window.getComputedStyle(slideDOM).opacity)
          : slide.opacity; // Fallback to state opacity

        // Determine which slide is visually closest to the center currently
        if (
          Math.abs(slideCenterOffset - centerPositionRef.current) <
          Math.abs(centerSlideVisualOffset - centerPositionRef.current)
        ) {
          // This slide is visually closer than the logical center slide was
          tempShiftDirection = slideIndex < 0 ? 1 : -1; // Determine direction of visual shift
        }
        if (slideIndex === 0) {
          centerDataIndex = dataIndex; // Store data index of the logical center
        }

        // Get the static info for the slide's *logical* index to calculate travel limits
        const staticInfo = safeGetSlideInfo(slideIndex);

        newSwipePositionInfo.push({
          slideIndex: slideIndex, // Store the logical index
          // Calculate max travel distance based on current visual position and logical limits
          maxLeft:
            slideCenterOffset -
            staticInfo.position +
            (staticInfo.maxTransformDistance.left ?? 0),
          maxRight:
            staticInfo.position +
            (staticInfo.maxTransformDistance.right ?? 0) -
            slideCenterOffset,
        });

        // Store the captured visual state
        slidesAtSwipeStart.push({
          ...slide,
          scale: scale, // Current visual scale
          opacity: currentOpacity, // Current visual opacity
          position: slideCenterOffset, // Current visual position (offset from center)
          // Keep original slideIndex and zIndex for now, swipe logic will adjust based on visual position
        });
      }

      // If a visual shift was detected, update the center data index accordingly
      if (tempShiftDirection !== 0) {
        const visuallyCenteredSlide = slidesAtSwipeStart.find(
          (s) => s.slideIndex === tempShiftDirection * -1,
        ); // Find the slide that caused the shift
        if (visuallyCenteredSlide)
          centerDataIndex = visuallyCenteredSlide.dataIndex;
      }

      // Update state to reflect the captured visual state before actual movement begins
      setRenderedSlides(slidesAtSwipeStart); // Use visually captured state
      setPrevRenderedSlides([...slidesAtSwipeStart]); // Store this baseline for delta calculations
      setSwipePositionInfo(newSwipePositionInfo); // Store calculated travel limits

      // If a visual shift occurred, potentially notify about the new active slide immediately
      if (
        tempShiftDirection !== 0 &&
        onActiveSlideChange &&
        centerDataIndex !== -1
      ) {
        // Only call if different from previous center? Or always call on swipe start?
        // Let's call it if the visually centered data index is different from logical index 0's data index.
        const logicalCenterDataIndex = renderedSlides.find(
          (s) => s.slideIndex === 0,
        )?.dataIndex;
        if (logicalCenterDataIndex !== centerDataIndex) {
          onActiveSlideChange(centerDataIndex);
        }
      }
    },
    [
      disableSwipe,
      swipeStarted, // Check if already swiping
      renderedSlides, // Read current slides state
      getSlideDOMInfo, // Get visual info
      safeGetSlideInfo, // Get static info
      onActiveSlideChange, // Callback
      // Removed centerOffset as direct dependency, logic incorporated
      // Removed getZIndex as initial capture uses existing zIndex implicitly
    ],
  );

  const onSwipe = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!swipeStarted || disableSwipe) return;

      const currentSwipeX = getSwipeX(e);
      const swipeDistance = initalSwipeX - currentSwipeX; // Positive if swiping left (towards negative positions)
      const delta = Math.abs(swipeDistance);
      if (delta < 1) return; // Ignore tiny movements

      const swipeLeft = swipeDistance > 0;
      let showTempShift = false; // Flag to indicate if a side slide takes visual center stage

      // Calculate transformation percentage based on swipe distance and speed factor
      const effectiveSlideWidth = slideWidth > 0 ? slideWidth : 100; // Avoid division by zero
      const transformFactor = (10 / effectiveSlideWidth) * delta; // How much of the slide width has been swiped (scaled)
      const effectiveSwipeSpeed = Math.max(
        0.01,
        Math.min(0.99, swipeSpeed || 0.5),
      ); // Clamp speed factor
      const transformPercentage =
        1 - Math.pow(1 - effectiveSwipeSpeed, transformFactor);

      // Calculate the visual position of the original center slide (logical index 0) during this swipe
      let originalCenterTargetPosition = centerPositionRef.current; // Default if not found
      const centerSlideIndexInPrev = prevRenderedSlides.findIndex(
        (s) => s.slideIndex === 0,
      );
      if (centerSlideIndexInPrev !== -1) {
        const centerSlideInitial = prevRenderedSlides[centerSlideIndexInPrev];
        const centerSlideSwipeInfo = swipePositionInfo[centerSlideIndexInPrev];
        if (centerSlideSwipeInfo) {
          const centerMaxDeltaX = swipeLeft
            ? centerSlideSwipeInfo.maxLeft
            : centerSlideSwipeInfo.maxRight;
          originalCenterTargetPosition =
            centerSlideInitial.position +
            (swipeLeft ? -1 : 1) * centerMaxDeltaX * transformPercentage;
        }
      }

      // Apply transformations to each slide based on the swipe
      const newRenderedSlides = prevRenderedSlides.map((slide, index) => {
        const {
          position: initialPosition,
          slideIndex,
          dataIndex,
          zIndex: initialZIndex,
        } = slide;

        // Skip placeholders or slides missing swipe info
        if (
          dataIndex === -1 ||
          !swipePositionInfo[index] ||
          swipePositionInfo[index].slideIndex !== slideIndex
        ) {
          console.warn(
            "Mismatch swipe info for index",
            index,
            "slideIndex",
            slideIndex,
          );

          return slide;
        }

        const { maxLeft, maxRight } = swipePositionInfo[index];
        // Determine the max distance this slide can travel in the swipe direction
        const maxDeltaX = swipeLeft ? maxLeft : maxRight;

        // Calculate the target visual position based on initial position, direction, travel limit, and swipe percentage
        const targetPosition =
          initialPosition +
          (swipeLeft ? -1 : 1) * maxDeltaX * transformPercentage;

        // Interpolate scale and opacity based on the calculated target visual position
        const { scale, opacity } = getSlideScaleAndOpacity(targetPosition);

        let currentZIndex = initialZIndex;
        // Check if a side slide (logical index +/- 1) is now visually closer to the center than the original center slide
        if (Math.abs(slideIndex) === 1) {
          // If this side slide's visual distance to center is less than the original center slide's visual distance
          if (
            Math.abs(targetPosition - centerPositionRef.current) <
            Math.abs(originalCenterTargetPosition - centerPositionRef.current)
          ) {
            currentZIndex = MAX_Z_INDEX; // Bring this side slide to the front
            showTempShift = true; // Set the flag
          } else {
            // Ensure non-centered slides don't accidentally get MAX_Z_INDEX if logic resets
            currentZIndex = getZIndex(slideIndex);
          }
        } else if (slideIndex === 0) {
          // Ensure center slide gets correct z-index if not overtaken
          currentZIndex = getZIndex(0);
        } else {
          currentZIndex = getZIndex(slideIndex); // Other slides get normal z-index
        }

        return {
          ...slide,
          position: targetPosition, // Apply new visual position
          scale, // Apply interpolated scale
          opacity, // Apply interpolated opacity
          zIndex: currentZIndex, // Apply potentially elevated z-index
        };
      });

      setRenderedSlides(newRenderedSlides); // Update state with visually transformed slides
      setTempShift(showTempShift); // Update the visual shift indicator state
    },
    [
      swipeStarted,
      disableSwipe,
      initalSwipeX,
      slideWidth,
      swipeSpeed,
      prevRenderedSlides, // Baseline visual state
      swipePositionInfo, // Travel limits
      getSlideScaleAndOpacity, // Interpolation function
      getZIndex, // To reset z-index for non-shifting slides
    ],
  );

  const onSwipeEnd = useCallback(() => {
    if (!swipeStarted || disableSwipe) return;

    // Determine the target logical slide based on which slide ended up with MAX_Z_INDEX (due to tempShift)
    // If no slide has MAX_Z_INDEX (e.g., small swipe didn't cause a visual shift), assume center (index 0) is target
    const centerSlide = renderedSlides.find(
      ({ zIndex }) => zIndex === MAX_Z_INDEX,
    );

    // Calculate the steps needed to move logically to the target slide
    // If tempShift occurred, the centerSlide.slideIndex will be +/- 1. Otherwise, it's 0.
    const steps = centerSlide ? centerSlide.slideIndex : 0;

    // Call moveCarousel with the calculated steps. moveCarousel handles the state updates and transitions.
    moveCarousel(steps);

    // Reset swipe-specific states immediately
    setSwipeStarted(false);
    setInitialSwipeX(0);
    setTempShift(false);
    setSwipePositionInfo([]);
    // Note: renderedSlides and prevRenderedSlides are handled by moveCarousel -> resetSlides flow
  }, [swipeStarted, disableSwipe, renderedSlides, moveCarousel]); // Depend on state and moveCarousel

  // --- Effects ---

  // Effect for initial setup and cleanup
  useEffect(() => {
    // Perform initial calculation and state setup
    const initialSlides = initializeProperties([], true); // Pass empty array and true flag for initial setup
    if (initialSlides) {
      setRenderedSlides(initialSlides);
      setPrevRenderedSlides([...initialSlides]); // Sync prev state
      if (onActiveSlideChange) {
        onActiveSlideChange(0); // Notify initial active slide (index 0)
      }
      // Ensure key counter is at least the number of initial slides to avoid collisions
      keyCountRef.current = Math.max(keyCountRef.current, initialSlides.length);
    }
    updateHeight(); // Calculate height after initial render attempt

    // Store initial props for comparison in update effect
    prevPropsRef.current = props;

    // Cleanup function for unmounting
    return () => {
      clearTimeout(clearSlideTimeoutRef.current); // Clear any pending timeouts
    };
  }, []); // Empty dependency array: Run only once on mount

  // Effect for handling prop changes (componentDidUpdate logic)
  useEffect(() => {
    if (
      !prevPropsRef.current ||
      !shouldRecaclculate(props, prevPropsRef.current)
    ) {
      // Update prevPropsRef even if no recalculation needed, for the *next* comparison
      prevPropsRef.current = props;

      return; // Skip effect if props relevant to layout haven't changed
    }

    // Recalculate properties based on new props and *current* slide state (to maintain center if possible)
    const newCalculatedSlides = initializeProperties(renderedSlides, false); // Pass current state, false flag for update

    if (newCalculatedSlides) {
      setRenderedSlides(newCalculatedSlides);
      setPrevRenderedSlides([...newCalculatedSlides]); // Sync prev state with new structure
      // Reset swipe states as layout has fundamentally changed
      setInitialSwipeX(0);
      setSwipeStarted(false);
      setSwipRight(false);
      setTempShift(false);
      setSwipePositionInfo([]);
      updateHeight(); // Update height possibly needed due to layout changes (e.g., different slide content)
      // Ensure key counter is updated
      keyCountRef.current = Math.max(
        keyCountRef.current,
        newCalculatedSlides.length,
      );
    }

    // Update prevPropsRef *after* processing changes for the next comparison cycle
    prevPropsRef.current = props;

    // Note: We depend on `props` itself. If specific props were listed, ensure `initializeProperties` and `updateHeight`
    // are also included if they aren't stable references (though useCallback should stabilize them).
  }, [props, initializeProperties, updateHeight, renderedSlides]);

  // Effect for recalculating height if relevant props or data change
  useEffect(() => {
    // If height is explicitly provided, use it directly
    if (initialHeight && initialHeight !== calculatedHeight) {
      setCalculatedHeight(initialHeight);
    } else if (!initialHeight) {
      // If height is dynamic, attempt to update based on current DOM
      // This might be triggered after data changes or initial load
      updateHeight();
    }
    // This effect depends on initialHeight, updateHeight callback, and potentially data length indirectly via updateHeight
  }, [initialHeight, updateHeight, calculatedHeight, data?.length]);

  // --- Public API Methods (Exposed via ref if needed, currently internal) ---
  // Use useCallback for stability if these were ever passed down or used in effects
  const goNext = useCallback(() => moveCarousel(1), [moveCarousel]);
  const goBack = useCallback(() => moveCarousel(-1), [moveCarousel]);
  const swipeTo = useCallback(
    (steps: number) => moveCarousel(steps),
    [moveCarousel],
  );

  // --- Render ---
  const cursor =
    (useGrabCursor && !disableSwipe && (swipeStarted ? "grabbing" : "grab")) ||
    "default";

  return (
    <div
      className={`react-stacked-center-carousel ${className || ""}`}
      onMouseDown={!disableSwipe ? onSwipeStart : undefined}
      onMouseUp={!disableSwipe ? onSwipeEnd : undefined}
      onMouseMove={!disableSwipe ? onSwipe : undefined}
      onMouseLeave={!disableSwipe ? onSwipeEnd : undefined} // End swipe if mouse leaves the container
      onTouchStart={!disableSwipe ? onSwipeStart : undefined}
      onTouchMove={!disableSwipe ? onSwipe : undefined}
      onTouchEnd={!disableSwipe ? onSwipeEnd : undefined}
      ref={listRef}
      style={{
        width: carouselWidth,
        height: calculatedHeight || "auto", // Use calculated height or allow auto-sizing
        position: "relative",
        overflow: "hidden",
        cursor: cursor,
        userSelect: swipeStarted ? "none" : "auto", // Prevent text selection during active swipe
        WebkitUserSelect: swipeStarted ? "none" : "auto", // For Safari
        touchAction: "pan-y", // Allow vertical scroll while capturing horizontal swipe
      }}
    >
      {renderedSlides.map(
        ({
          opacity,
          slideIndex,
          dataIndex,
          position,
          scale,
          key, // Use the unique key generated during initialization/update
          zIndex,
        }) => {
          // Use unique key, handle placeholders by checking dataIndex
          const elementKey = `slide-${key}`;
          // Use slideIndex for className for potential styling, unless it's a placeholder
          const idClassNameSuffix =
            dataIndex === -1 ? `hidden-${key}` : slideIndex;
          const zDuration = transitionTime * (swipRight ? 0.6 : 1); // Adjust z-index transition speed based on swipe direction hint
          // Determine transition style: none during active swipe, otherwise use prop or default
          const transition = swipeStarted
            ? "none"
            : customTransition ||
              `all ${transitionTime}ms ease, z-index ${zDuration}ms ease`;

          // Determine if this slide is visually the center one
          // During swipe (tempShift=true), the one with MAX_Z_INDEX is center
          // Otherwise (no swipe or tempShift=false), the one with logical index 0 is center
          const isCenterSlide = tempShift
            ? zIndex === MAX_Z_INDEX
            : slideIndex === 0;

          return (
            <div
              key={elementKey}
              className={`react-stacked-center-carousel-slide-${idClassNameSuffix}`}
              draggable={false} // Prevent native image/link dragging interference
              style={{
                position: "absolute",
                display: "flex", // Use flex for content alignment within the slide container
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                left: `calc(50% - ${slideWidth / 2}px)`, // Center the slide container itself
                transform: `translateX(${position}px) scale(${scale})`, // Apply position and scale
                width: slideWidth,
                transition: transition, // Apply conditional transition
                opacity: opacity, // Apply calculated opacity
                zIndex: zIndex, // Apply calculated z-index
                // Hide completely transparent slides more effectively for accessibility/performance
                visibility: opacity < 0.01 ? "hidden" : "visible",
              }}
            >
              {/* Only render the actual slide Component if it's not a placeholder */}
              {dataIndex !== -1 && (
                <Component
                  dataIndex={dataIndex}
                  data={data} // Pass the whole data array
                  slideIndex={slideIndex} // Pass the logical slide index relative to center
                  isCenterSlide={isCenterSlide} // Indicate if it's visually the center
                  swipeTo={swipeTo} // Pass the swipeTo function for programmatic control
                />
              )}
            </div>
          );
        },
      )}
    </div>
  );
};
