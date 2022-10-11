function theDrawRL(A, B) {
  let startTime = performance.now();
  function createGrid() {
    let g = [];
    for (let x = 1; x < size.arr + 2; x++) {
      /// was 10
      g.push([]);
      for (let y = 0; y < size.arr + 1; y++) {
        /// was 10
        g[x - 1].push(0);
        //point(xpoint, y);
      }
    }
    return g;
  }
  let toFill = [];
  let g = createGrid();
  let doneStampin = false;
  function stamp(index) {
    // if (index[0] === 0 && index[1] === 0) console.log("truuu");
    let indexes = [];
    function square(index) {
      if (g[index[0] + 2] === undefined || g[index[1] + 2] === undefined) {
        doneStampin = true;
        return;
      }
      g[index[0]][index[1]] = 1;
      g[index[0] + 2][index[1]] = 1;
      g[index[0]][index[1] + 2] = 1;
      g[index[0] + 2][index[1] + 2] = 1;

      toFill.push([index[0] + 2, index[1]]);
      let corners = [
        [index[0] + 2, index[1]],
        [index[0], index[1] + 2],
        [index[0] + 2, index[1] + 2],
        // [index[0] - 4, index[1] - 4],
        /// FORWARD | DOWN
      ];
      // if (index[0] - 4 >= A[0]) corners.push([index[0] - 4, index[1]]);
      // if (index[1] - 4 >= A[1]) corners.push([index[0], index[1] - 4]);
      // if (index[0] - 4 >= A[0] && index[1] - 4 >= A[1]) {
      // corners.push([index[0] - 4, index[1] - 4]);
      // }
      return corners;
    }
    let corners = square(index);
    let possible = [1, 2, 5, 10, 15];
    for (let i = 0; i < random(possible); i++) {
      if (corners !== undefined) return;

      let corner = corners[Math.floor(Math.random() * corners.length)];
      let count = 0;
      while (
        count < 12 && /// size of AVERAGE
        (corner[0] < 0 ||
          corner[1] < 0 ||
          corner[0] >= g.length - 2 ||
          corner[1] >= g[0].length - 2)
      ) {
        corner = corners[Math.floor(Math.random() * corners.length)];
        count++;
      }
      indexes.push(corner);
      corners = square(corner);
    }
  }
  console.log(A);

  stamp(A);
  // g = [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ];
  let path = [];

  let farPoint = [0, 0];
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g.length; j++) {
      if (g[j][i] === 1 && (farPoint[1] < i || farPoint[0] < j)) {
        farPoint = [j, i];
      }
    }
  }

  let stp = [...A];
  let goRight = (index) => (index[1] + 2 <= g.length ? g[index[0]][index[1] + 2] : "no");
  let goUp = (index) => (index[0] - 2 >= 0 ? g[index[0] - 2][index[1]] : "no");
  let goDown = (index) => g[index[0] + 2][index[1]];
  let goLeft = (index) => g[index[0]][index[1] - 2];
  let count = 0;

  function descend(stp) {
    if (stp.toString() === farPoint.toString() || count > 100) return;
    if (goRight(stp) === 1) {
      path.push([stp[0], stp[1] + 2]);
      stp = [stp[0], stp[1] + 2];
    }
    if (goDown(stp) === 1 && goRight(stp) !== 1) {
      path.push([stp[0] + 2, stp[1]]);
      stp = [stp[0] + 2, stp[1]];
    }
    count++;
    descend(stp);
  }

  descend(stp);
  stp = farPoint;

  count = 0;
  function ascend(stp) {
    if (stp.toString() === A.toString() || count > 120) return;
    if (goLeft(stp) === 1) {
      path.push([stp[0], stp[1] - 2]);
      stp = [stp[0], stp[1] - 2];
    }
    if (goUp(stp) === 1 && goLeft(stp) !== 1) {
      path.push([stp[0] - 2, stp[1]]);

      stp = [stp[0] - 2, stp[1]];
    }
    count++;
    ascend(stp);
  }

  ascend(stp);
  path.push(path[0]);
  path.push(path[1]);
  // console.log(path);
  if (count > 299)
    return [
      [2, 6],
      [4, 6],
      [4, 8],
      [6, 8],
      [8, 8],
      [8, 6],
      [6, 6],
      [4, 6],
      [4, 4],
      [2, 4],
      [2, 6],
      [4, 6],
    ];
  else {
    let copy = new Array(path.length); // boost in Safari
    for (var i = 0; i < path.length; ++i) copy[i] = path[i].slice(0);
    let reversed = copy.map((item) => item.reverse());
    let newPath = path.map((item) => [g.length - item[0] - 1, g.length - item[1] - 1]);

    // return random([newPath, reversed, path]);
    return path;
  }
}

function theDrawLR(A, B) {
  let startTime = performance.now();
  function createGrid() {
    let g = [];
    for (let x = 1; x < size.arr + 2; x++) {
      g.push([]);
      for (let y = 0; y < size.arr + 1; y++) {
        g[x - 1].push(0);
      }
    }
    return g;
  }
  let g = createGrid();

  function stamp(index) {
    function square(index) {
      g[index[0]][index[1]] = 1;
      g[index[0] - 2][index[1]] = 1;
      g[index[0]][index[1] + 2] = 1;
      g[index[0] - 2][index[1] + 2] = 1;

      let corners = [
        [index[0] - 2, index[1]],
        [index[0] - 2, index[1] - 2],
        [index[0], index[1] + 2],
        [index[0] - 2, index[1] + 2],
      ];

      return corners;
    }

    let corners = square(index);

    for (let i = 0; i < random([2, 5, 10, 15]); i++) {
      let validCorners = [];

      corners.forEach((item) => {
        if (item[0] - 2 >= 0 && item[1] - 2 >= 0 && item[1] + 2 < g.length) {
          validCorners.push(item);
        }
      });
      //   console.log(validCorners);

      // if (validCorners.length > 0) corners = square(random(validCorners));
      if (validCorners.length > 0) corners = square(random(validCorners));
    }
  }
  stamp(A);
  //console.log("sccnd", g);

  let path = [];
  let byebye = false;
  let farPoint = [0, 0];
  for (let i = 0; i < g.length && byebye === false; i++) {
    for (let j = 0; j < g.length; j++) {
      if (g[i][j] === 1) {
        farPoint[0] = i;
        byebye = true;
      }
      if (g[i][j] === 1 && farPoint[1] < j) {
        farPoint[1] = j;
      }
    }
  }

  let stp = [...A];

  let goRight = (index) => (index[1] + 2 >= 0 ? g[index[0]][index[1] + 2] : "no");
  let goUp = (index) => (index[0] - 2 <= g.length ? g[index[0] - 2][index[1]] : "no");
  let goDown = (index) => (index[0] + 2 <= g.length ? g[index[0] + 2][index[1]] : "no");
  let goLeft = (index) => g[index[0]][index[1] - 2];

  let count = 0;

  function beenThere(stps, doubleo) {
    let been = false;
    path.forEach((item) => {
      if (item.toString() === stps.toString()) been = true;
    });
    if (doubleo === true) {
      if (
        stps[0] - 2 >= 0 &&
        stps[1] - 2 >= 0 &&
        stps[0] + 2 < g.length &&
        stps[1] + 2 < g.length
      ) {
        if (
          (g[stps[0] - 2][stps[1] + 2] === 0 && g[stps[0] + 2][stps[1] - 2] === 0) ||
          (g[stps[0] + 2][stps[1] + 2] === 0 && g[stps[0] - 2][stps[1] - 2] === 0)
        ) {
          been = false;
        }
      }
    }
    return been;
  }

  function descend(stp) {
    if (stp.toString() === farPoint.toString() || count > 245) {
      return;
    }
    if (goRight(stp) === 1 && !beenThere([stp[0], stp[1] + 2])) {
      path.push([stp[0], stp[1] + 2]);
      stp = [stp[0], stp[1] + 2];
    } else if (goUp(stp) === 1 && !beenThere([stp[0] - 2, stp[1]])) {
      path.push([stp[0] - 2, stp[1]]);
      stp = [stp[0] - 2, stp[1]];
    } else if (goLeft(stp) === 1 && !beenThere([stp[0], stp[1] - 2])) {
      path.push([stp[0], stp[1] - 2]);
      stp = [stp[0], stp[1] - 2];
    }
    count++;

    descend(stp);
  }
  descend(stp);

  function alsoBeenThere(stps) {
    let been = false;
    scndpath.forEach((item) => {
      if (item.toString() === stps.toString()) been = true;
    });
    if (
      beenThere(stps) &&
      g[stps[0] - 2][stps[1] - 2] !== 0 &&
      g[stps[0] + 2][stps[1] + 2] !== 0
    ) {
      been = true;
    }
    return been;
  }

  count = 0;
  let scndpath = [];
  stp = farPoint;
  function ascend(stp) {
    if (stp.toString() === A.toString() || count > 245) {
      return;
    } else if (
      goLeft(stp) === 1 &&
      !alsoBeenThere([stp[0], stp[1] - 2]) &&
      !beenThere([stp[0], stp[1] - 2], true)
    ) {
      scndpath.push([stp[0], stp[1] - 2]);
      stp = [stp[0], stp[1] - 2];
    } else if (
      goDown(stp) === 1 &&
      !alsoBeenThere([stp[0] + 2, stp[1]]) &&
      !beenThere([stp[0] + 2, stp[1]], true)
    ) {
      scndpath.push([stp[0] + 2, stp[1]]);
      stp = [stp[0] + 2, stp[1]];
    } else if (
      goRight(stp) === 1 &&
      // !alsoBeenThere([stp[0], stp[1] + 2]) &&
      !beenThere([stp[0], stp[1] + 2], true)
    ) {
      scndpath.push([stp[0], stp[1] + 2]);
      stp = [stp[0], stp[1] + 2];
    }
    count++;
    // console.log(count);
    ascend(stp);
  }
  ascend(stp);

  scndpath.push(path[0]);
  scndpath.push(path[1]);

  let full = path.concat(scndpath);
  let copy = new Array(full.length); // boost in Safari
  for (var i = 0; i < full.length; ++i) copy[i] = full[i].slice(0);
  let reversed = copy.map((item) => item.reverse());

  return random([reversed, full]);
}

function theDraw(A, count) {
  //console.log(g);
  if (count % 2 === 0) {
    let drawn = theDrawRL(A);
    //console.log(drawn, "top");
    return theDrawRL(A);
  } else {
    let drawn = theDrawLR(A);
    // console.log(drawn, "down");
    return drawn;
  }
}
