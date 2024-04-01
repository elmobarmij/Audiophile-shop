export function updateImgPath(path) {
  return path?.replace('/images', '../assets')
}

export function formatPrice(price) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formatter.format(price).replace(/(\.[0-9]*[1-9])0+$/, '$1')
}
