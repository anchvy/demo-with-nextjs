/**
 * get relative image path with given filename
 * @param {string} filename
 * @param {boolean} [isSmallSize = false]
 * @returns {string}
 */
export const getImagePath = (filename, isSmallSize = false) => {
  let customFilename
  // if small size is needed, then split filename
  // and put @small in the middle
  if (isSmallSize) {
    const filenameArr = filename.split('.')
    customFilename = `${filenameArr[0]}@small.${filenameArr[1]}`
  } else {
    customFilename = filename
  }

  return `/static/images/${customFilename}`
}
