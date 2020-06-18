export const formatDateBr = (date) => {
  let dateFormat = new Date(date);
  return dateFormat.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
