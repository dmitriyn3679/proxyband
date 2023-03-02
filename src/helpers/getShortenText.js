export const getShortenText = (text, wordsCount) => {
  return `${text.slice(0, wordsCount)}...`
}
