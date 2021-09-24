const timeConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  const result = `${hours} h ${minutes} min`;
  return result;
};

export default timeConvert;
