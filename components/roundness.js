const half = {
  /// add zeroes to make smooth lines later
  t: { i: 18, max: 36 },
  b: { i: 0, max: 18 },
  l: { i: 9, max: 27 },
  r: { i: 27, max: 45 },
  rev: {
    r: { i: 45, max: 27 },
  },
};
// low res
// const quad = {
//   bl: { i: 9, max: 18 },
//   tl: { i: 18, max: 27 },
//   tr: { i: 27, max: 36 },
//   br: { i: 0, max: 8 },
//   rev: {
//     tr: { i: 36, max: 27 },
//     br: { i: 9, max: 0 },
//     bl: { i: 18, max: 9 },
//     tl: { i: 27, max: 18 },
//   },
// };

// function drawHalf(point, segment, offset, pattern) {
//   for (let i = segment.i; i <= segment.max; i++) {
//     let x = cos(radians(10 * i)) * radius;
//     let y = sin(radians(10 * i)) * radius;

//     vertex(x + point.x + offset[0], y + point.y + offset[1]);
//     if (pattern) vertexPattern(x + point.x + offset[0], y + point.y + offset[1]);
//   }
// }

// function drawHalfRev(point, segment, offset, pattern) {
//   for (let i = segment.i; i >= segment.max; i--) {
//     let x = cos(radians(10 * i)) * radius;
//     let y = sin(radians(10 * i)) * radius;

//     vertex(x + point.x + offset[0], y + point.y + offset[1]);
//     if (pattern) vertexPattern(x + point.x + offset[0], y + point.y + offset[1]);
//   }
// }
const quad = {
  bl: { i: 90, max: 180 },
  tl: { i: 180, max: 270 },
  tr: { i: 270, max: 360 },
  br: { i: 0, max: 80 },
  rev: {
    tr: { i: 360, max: 270 },
    br: { i: 90, max: 00 },
    bl: { i: 180, max: 90 },
    tl: { i: 270, max: 180 },
  },
};

function drawHalf(point, segment, offset, pattern) {
  for (let i = segment.i; i <= segment.max; i++) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;

    vertex(x + point.x + offset[0], y + point.y + offset[1]);
    if (pattern) vertexPattern(x + point.x + offset[0], y + point.y + offset[1]);
  }
}

function drawHalfRev(point, segment, offset, pattern) {
  for (let i = segment.i; i >= segment.max; i--) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;

    vertex(x + point.x + offset[0], y + point.y + offset[1]);
    if (pattern) vertexPattern(x + point.x + offset[0], y + point.y + offset[1]);
  }
}
