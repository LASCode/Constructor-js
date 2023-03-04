const getClassnamesFromObject = (classObj) => {
  return Object.entries(classObj)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ');
}

export { getClassnamesFromObject };