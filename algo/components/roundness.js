const half = {
  t: { i: 18, max: 36 },
  b: { i: 0, max: 18 },
  l: { i: 9, max: 27 },
  r: { i: 27, max: 45 },
  rev: {
    r: { i: 45, max: 27 },
  },
};

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

    vertex(x + point.x * 2 + offset[0], y + point.y * 2 + offset[1]);
    if (pattern) vertexPattern(x + point.x * 2 + offset[0], y + point.y * 2 + offset[1]);
  }
}

function drawHalfRev(point, segment, offset, pattern) {
  for (let i = segment.i; i >= segment.max; i--) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;

    vertex(x + point.x * 2 + offset[0], y + point.y * 2 + offset[1]);
    if (pattern) vertexPattern(x + point.x * 2 + offset[0], y + point.y * 2 + offset[1]);
  }
}
