function roundCorners(arr, pattern) {
  // [8, 8],
  // [8, 10],
  // [8, 8],
  beginShape();
  for (let i = 0; i < arr.length - 2; i++) {
    let gridPoint = g[arr[i + 1][0]][arr[i + 1][1]];
    // if (
    //   arr[i][0] === arr[i + 1][0] &&
    //   arr[i + 1][0] === arr[i + 2][0] &&
    //   arr[i][1] + 2 === arr[i + 1][1] &&
    //   arr[i][1] === arr[i + 2][1]
    // ) {
    //   drawHalfRev(gridPoint, quad.rev.bl, [radius * 2, -radius], pattern);
    // }
    // console.log(arr[i]);
    if (
      arr[i][0] + 2 === arr[i + 1][0] &&
      arr[i][0] + 2 === arr[i + 2][0] &&
      arr[i][1] === arr[i + 1][1] &&
      arr[i + 1][1] + 2 === arr[i + 2][1]
    ) {
      drawHalf(gridPoint, quad.tr, [-radius, radius], pattern);
    }
    if (
      arr[i][0] === arr[i + 1][0] &&
      arr[i + 1][0] + 2 === arr[i + 2][0] &&
      arr[i][1] + 2 === arr[i + 1][1] &&
      arr[i + 1][1] === arr[i + 2][1]
    ) {
      drawHalfRev(gridPoint, quad.rev.bl, [radius, -radius], pattern);
    }
    if (
      arr[i][0] === arr[i + 1][0] &&
      arr[i + 1][0] === arr[i + 2][0] + 2 &&
      arr[i][1] + 2 === arr[i + 1][1] &&
      arr[i + 1][1] === arr[i + 2][1]
    ) {
      drawHalf(gridPoint, quad.br, [-radius, -radius], pattern);
    }
    if (
      arr[i][0] === arr[i + 1][0] + 2 &&
      arr[i + 1][0] === arr[i + 2][0] &&
      arr[i][1] === arr[i + 1][1] &&
      arr[i + 1][1] === arr[i + 2][1] + 2
    ) {
      drawHalf(gridPoint, quad.bl, [radius, -radius], pattern);
    }
    if (
      arr[i][0] === arr[i + 1][0] &&
      arr[i + 1][0] + 2 === arr[i + 2][0] &&
      arr[i][1] - 2 === arr[i + 1][1] &&
      arr[i + 1][1] === arr[i + 2][1]
    ) {
      drawHalf(gridPoint, quad.tl, [radius, radius], pattern);
    }
    if (
      arr[i][0] + 2 === arr[i + 1][0] &&
      arr[i + 1][0] === arr[i + 2][0] &&
      arr[i][1] === arr[i + 1][1] &&
      arr[i + 1][1] - 2 === arr[i + 2][1]
    ) {
      drawHalfRev(gridPoint, quad.rev.br, [-radius, -radius], pattern);
    }
    if (
      arr[i][0] === arr[i + 1][0] &&
      arr[i + 1][0] - 2 === arr[i + 2][0] &&
      arr[i][1] - 2 === arr[i + 1][1] &&
      arr[i + 1][1] === arr[i + 2][1]
    ) {
      drawHalfRev(gridPoint, quad.rev.tr, [-radius, radius], pattern);
    }
    if (
      arr[i][0] - 2 === arr[i + 1][0] &&
      arr[i + 1][0] === arr[i + 2][0] &&
      arr[i][1] == arr[i + 1][1] &&
      arr[i + 1][1] + 2 === arr[i + 2][1]
    ) {
      drawHalfRev(gridPoint, quad.rev.tl, [radius, radius], pattern);
    }
  }
  endShape(CLOSE);
  //endShape();
}
// let path = [];
// path.push(A);
// function sortEm() {
//   let farPoint = [0, 0];
//   for (let i = 0; i < g.length; i++) {
//     for (let j = 0; j < g.length; j++) {
//       if (g[j][i] === 1 && (farPoint[1] < i || farPoint[0] < j)) {
//         farPoint = [j, i];
//       }
//     }
//   }

//   let stp = [...A];

//   let pepath = [];

//   let trodden = (compareMe) => {
//     let trodden = false;
//     pepath.forEach((item) => {
//       if (item.toString() === compareMe.toString()) trodden = true;
//     });
//     if (
//       compareMe[0] - 2 >= 0 &&
//       compareMe[1] - 2 >= 0 &&
//       g[compareMe[0] - 2][compareMe[1] - 2] === 0
//     ) {
//       trodden = false;
//     }

//     return trodden;
//   };

//   let count = 0;

//   let hasgoneleft = false;

//   function anothaway(stp) {
//     if (stp.toString() === farPoint.toString() || count > 100) return;

//     if (
//       goDown(stp) !== 1 &&
//       (goRight(stp) !== 1 || trodden([stp[0], stp[1] + 2])) &&
//       !trodden([stp[0], stp[1] - 2])
//     ) {
//       pepath.push([stp[0], stp[1] - 2]);
//       stp = [stp[0], stp[1] - 2];
//       hasgoneleft = true;
//     } else if (goUp(stp) === 1 && !trodden([stp[0] - 2, stp[1]])) {
//       pepath.push([stp[0] - 2, stp[1]]);
//       stp = [stp[0] - 2, stp[1]];
//     } else if (goRight(stp) === 1 && !trodden([stp[0], stp[1] + 2])) {
//       pepath.push([stp[0], stp[1] + 2]);
//       stp = [stp[0], stp[1] + 2];
//     } else if (
//       goDown(stp) === 1 &&
//       (goRight(stp) === undefined ||
//         goRight(stp) === 0 ||
//         trodden([stp[0], stp[1] + 2])) &&
//       !trodden([stp[0] + 2, stp[1]])
//     ) {
//       pepath.push([stp[0] + 2, stp[1]]);

//       stp = [stp[0] + 2, stp[1]];
//     }
//     count++;
//     anothaway(stp);
//   }

//   anothaway(stp);

//   stp = farPoint;
//   for (let i = 0; i < 24; i++) {
//     if (g[stp[0]][stp[1] - 2] === 1) {
//       while (g[stp[0]][stp[1] - 2] === 1) {
//         path.push([stp[0], stp[1] - 2]);

//         stp = [stp[0], stp[1] - 2];
//       }
//     }

//     if (
//       (g[stp[0]][stp[1] - 2] === undefined || g[stp[0]][stp[1] - 2] === 0) &&
//       stp[0] - 2 >= 0 &&
//       g[stp[0] - 2][stp[1]] === 1
//     ) {
//       while (
//         stp[0] - 2 >= 0 &&
//         (g[stp[0]][stp[1] - 2] === undefined || g[stp[0]][stp[1] - 2] === 0) &&
//         g[stp[0] - 2][stp[1]] === 1
//       ) {
//         path.push([stp[0] - 2, stp[1]]);

//         stp = [stp[0] - 2, stp[1]];
//       }
//     }
//   }

//   path.push(pepath[0]);
//   return pepath.concat(path);
// }
// let dapath = sortEm();

// let newPath = path.map((item) => [g.length - item[0] - 1, g.length - item[1] - 1]);
// console.log(g);
// console.log(dapath);
// let copy = new Array(path.length); // boost in Safari
// for (var i = 0; i < path.length; ++i) copy[i] = path[i].slice(0);
// let reversed = copy.map((item) => item.reverse());
// let rr = [path, reversed, newPath];
// return dapath;
