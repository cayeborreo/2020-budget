export const formatNumber = number => {
  return Intl.NumberFormat("en-US", { minimumFractionDigits: 0 }).format(number)
}

export const getCartIds = cart => {
  // Sometimes keys (price/id) have 0 as value (quantity); need to filter those out
  const keys = !!cart ? Object.keys(cart) : null

  if (!!keys) {
    return keys.filter(item => cart[item] > 0)
  } else return []
}

export const generateRandomIndex = max => {
  const generateIndex = () => Math.floor(Math.random() * 10)

  let index

  do {
    index = generateIndex()
  } while (index >= max)

  return index
}
