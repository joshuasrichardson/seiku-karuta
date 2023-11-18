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

export const toTitleCase = (input: string): string => {
  const words = input.split(" ");

  const titleCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const titleCaseString = titleCaseWords.join(" ");

  return titleCaseString;
};
