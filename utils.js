export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatDate = (date) => {
  const theData = new Date(date);
  return theData.toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
