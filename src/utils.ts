import { Coordinates } from "./types";

export const getRandomItemFromArray = (array: any[]): any => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const removeRandomItemFromArray = (
  array: string[],
  setArray: React.Dispatch<React.SetStateAction<string[]>>
): string => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  setArray((prev) => prev.filter((i) => i !== item));
  return item;
};

export const coordinatesToKey = (coordinates: Coordinates): string =>
  `${coordinates.x}-${coordinates.y}`;

export const keyToCoordinates = (key: string): Coordinates => {
  const [x, y] = key.split("-").map(Number);
  return { x, y };
};

export const generateCoordinates = ({
  x,
  y,
  previousX,
  previousY,
  numPoints,
}: {
  x: number;
  y: number;
  previousX: number;
  previousY: number;
  numPoints: number;
}) => {
  const coordinates = [];

  for (let i = 0; i < numPoints; i++) {
    const ratio = i / (numPoints - 1);
    const newX = previousX + ratio * (x - previousX);
    const newY = previousY + ratio * (y - previousY);
    coordinates.push({ x: newX, y: newY });
  }

  return coordinates;
};

export const getCloserHalfOfArray = (item: number, items: number[]) => {
  const middleIndex = Math.floor(items.length / 2);
  const middleItem = items[middleIndex];
  return middleItem > item
    ? items.slice(0, middleIndex)
    : items.slice(middleIndex);
};

export const getClosestPointCoordinates = ({
  x,
  y,
  xs,
  ys,
}: {
  x: number;
  y: number;
  xs: number[];
  ys: number[];
}): Coordinates => {
  if (xs.length === 1 && ys.length === 1) return { x: xs[0], y: ys[0] };
  const newXs = xs.length > 1 ? getCloserHalfOfArray(x, xs) : xs;
  const newYs = ys.length > 1 ? getCloserHalfOfArray(y, ys) : ys;
  return getClosestPointCoordinates({ x, y, xs: newXs, ys: newYs });
};
