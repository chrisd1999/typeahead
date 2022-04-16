
const clsx = (classes: {[key: string]: boolean}): string => {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
};

export default clsx;
