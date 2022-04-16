const clsx = (classes: any): string => {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
};

export default clsx;
