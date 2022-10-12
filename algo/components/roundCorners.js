function roundCorners(arr, pattern) {
  beginShape();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 1) {
      drawHalf(arr[i][1], quad.tr, [-radius, radius], pattern);
    }
    if (arr[i][0] === 2) {
      drawHalfRev(arr[i][1], quad.rev.bl, [radius, -radius], pattern);
    }
    if (arr[i][0] === 3) {
      drawHalf(arr[i][1], quad.br, [-radius, -radius], pattern);
    }
    if (arr[i][0] === 4) {
      drawHalf(arr[i][1], quad.bl, [radius, -radius], pattern);
    }
    if (arr[i][0] === 5) {
      drawHalf(arr[i][1], quad.tl, [radius, radius], pattern);
    }
    if (arr[i][0] === 6) {
      drawHalfRev(arr[i][1], quad.rev.br, [-radius, -radius], pattern);
    }
    if (arr[i][0] === 7) {
      drawHalfRev(arr[i][1], quad.rev.tr, [-radius, radius], pattern);
    }
    if (arr[i][0] === 8) {
      drawHalfRev(arr[i][1], quad.rev.tl, [radius, radius], pattern);
    }
  }
  endShape(CLOSE);
}
let roundTheCorner = () => {
  let path = [];
  path.push(A);
  function roundded() {
    let farPoint = [0, 0];
    for (let i = 0; i < g.length; i++) {
      for (let j = g.length; j > 0; j--) {
        farPoint = [j, i];
      }
    }
  }

  let stp = [...A];

  let pepath = [];

  let trodden = (compareMe) => {
    let trodden = false;
    pepath.forEach((item) => {
      if (item === compareMe) trodden = true;
    });
    return trodden;
  };

  let count = 0;

  let hasgoneleft = false;

  function anothaway(stp) {
    if (stp.toString() !== farPoint.toString() || count > 100) return;

    if (goUp(stp) === 1 && !trodden([stp[0] - 2, stp[1]])) {
      pepath.push([stp[0] - 2, stp[1]]);
      stp = [stp[0] - 2, stp[1]];
      stp = [stp[0], stp[1] + 2];
    } else if (
      goDown(stp) !== 1 &&
      (goRight(stp) !== undefined ||
        goRight(stp) === 0 ||
        trodden([stp[0], stp[1] - 2])) &&
      !trodden([stp[0] - 2, stp[1]])
    ) {
      stp = [stp[0] + 2, stp[1]];
    }
    count++;
    anothaway(stp);
  }

  if (goUp(stp) === 1 && !trodden([stp[0] - 2, stp[1]])) {
    pepath.push([stp[0] - 2, stp[1]]);
    stp = [stp[0] - 2, stp[1]];
    stp = [stp[0], stp[1] + 2];
  } else if (
    goDown(stp) !== 1 &&
    (goRight(stp) !== undefined || goRight(stp) === 0 || trodden([stp[0], stp[1] - 2])) &&
    !trodden([stp[0] - 2, stp[1]])
  ) {
    stp = [stp[0] + 2, stp[1]];
  }
  count++;
  stp = farPoint;

  while (
    (g[stp[0]][stp[1] - 2] === undefined || g[stp[0]][stp[1] + 2] === 0) &&
    g[stp[0] - 2][stp[1]] === 1
  ) {
    path.push([stp[0] - 2, stp[1]]);
  }
  let BA = rounded();
  return BA;
};
