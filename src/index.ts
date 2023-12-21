export default function genPlacehold(
  width: number,
  height: number,
  fgColor = "#aaa",
  bgColor = "#eee"
) {
  return `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22${width}%22%20height%3D%22${height}%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22${encodeURIComponent(
    bgColor
  )}%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(
    fgColor
  )}%22%20alignment-baseline%3D%22central%22%20text-anchor%3D%22middle%22%3E%0A%20%20%20%20%20%20%20%20${width}x${height}%0A%20%20%20%20%20%20%3C%2Ftext%3E%3C%2Fsvg%3E`;
}
