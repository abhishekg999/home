import readingTime from "reading-time";

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getReadingTime = (text: string): string => {
  return readingTime(text).text;
};
