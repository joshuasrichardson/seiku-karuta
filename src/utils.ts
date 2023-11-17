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
