/**
 * Compress an image File to a Blob using the Canvas API.
 * @param {File} file - Original image file
 * @param {object} opts
 * @param {number} opts.maxWidth  - Max width in px (default 1280)
 * @param {number} opts.maxHeight - Max height in px (default 1280)
 * @param {number} opts.quality   - JPEG quality 0–1 (default 0.82)
 * @returns {Promise<Blob>}
 */
export function compressImage(file, { maxWidth = 1280, maxHeight = 1280, quality = 0.82 } = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)

      let { width, height } = img
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width = Math.round(width * ratio)
        height = Math.round(height * ratio)
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error('Canvas toBlob failed')),
        'image/jpeg',
        quality,
      )
    }

    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Image load failed')) }
    img.src = url
  })
}
