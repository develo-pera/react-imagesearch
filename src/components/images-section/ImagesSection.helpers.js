export const returnImagesArrayForPageNumber
= (fetchedImages, pageNumber) => fetchedImages[pageNumber]


export const reorderImagesForMosaicDisplay = (arr, columns) => {
  const cols = columns;
  const out = [];
  let col = 0;
  while (col < cols) {
    for (let i = 0; i < arr.length; i += cols) {
      const val = arr[i + col]
      if (val !== undefined) out.push(val)
    }
    col += 1
  }
  return out
}
