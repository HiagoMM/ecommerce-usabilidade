export const parseNumber = (value: string) =>
  Number(value.split("R$")[1].trim());
