
export type Board = string[][];

// Initial board (uppercase = white, lowercase = black)
export const initialBoard: Board = [
  ["r","n","b","q","k","b","n","r"],
  ["p","p","p","p","p","p","p","p"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["P","P","P","P","P","P","P","P"],
  ["R","N","B","Q","K","B","N","R"]
];

export function notationToCoords(square: string) {
  const file = square[0].charCodeAt(0) - "a".charCodeAt(0);
  const rank = 8 - parseInt(square[1]);
  return { row: rank, col: file };
}

export function coordsToNotation(row: number, col: number) {
  const file = String.fromCharCode("a".charCodeAt(0) + col);
  const rank = 8 - row;
  return file + rank;
}