const dateFormated = (date: string | number | Date) =>
  new Date(date).toLocaleDateString("fr-FR");
export default dateFormated;
