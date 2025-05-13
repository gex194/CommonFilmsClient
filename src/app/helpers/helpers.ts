export function buildImagePath(imageEndPath: string = "", size: number) {
  const baseUrl: string = "https://image.tmdb.org/t/p/"
  const pictureSize: string = `w${size}`

  return baseUrl + pictureSize + imageEndPath;
}
