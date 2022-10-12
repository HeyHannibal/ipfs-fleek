/// CIRCLE PATTERNS
function dualColor(pointObj) {
  fill(randomCircleColor());
  circle(pointObj.x, pointObj.y, (radius + 20) * 0.9);
  fill(randomCircleColor());
  circle(pointObj.x, pointObj.y, radius - radius / 2);
}
function innerOutline(pointObj) {
  push();
  fill(pllt.hlt1);
  circle(pointObj.x, pointObj.y, radius + 40);
  stroke(pllt.line);
  strokeWeight(10);
  circle(pointObj.x, pointObj.y, radius - 60);
  pop();
}
function outlineAndSmall(pointObj) {
  push();
  stroke(pllt.line);
  strokeWeight(10);
  fill("#ffffff00");
  circle(pointObj.x, pointObj.y, radius - 40);
  pop();
  fill(pllt.hlt1);
  circle(pointObj.x, pointObj.y, radius - 120);
}

function circles(pointObj) {
  push();
  strokeWeight(0);
  if (chances(2, 1)) {
    dualColor(pointObj);
  } else if (chances(2, 1)) {
    innerOutline(pointObj);
  } else if (chances(10, 0)) {
    outlineAndSmall(pointObj);
  }
  pop();
}

function centerCircles() {
  strokeWeight(2);
  g.forEach((point, index) => {
    if (index % 2 > 0)
      g[index].forEach((pointObj, indx) => {
        if (indx % 2 > 0) {
          fill("#262525");
          if (g.length === 5 && (indx > 3 || index > 3)) return;
          if (chances(5, 20)) circles(pointObj);
        }
      });
  });
}

function topCircles() {
  strokeWeight(2);
  g.forEach((point, index) => {
    if (index % 2 > 0)
      g[index].forEach((pointObj, indx) => {
        if (indx % 2 > 0) {
          if (g.length === 5 && (indx > 3 || index > 3)) return;
          overCircles(pointObj);
        }
      });
  });
}

function bigOne(pointObj) {
  push();
  fill(pllt.line);
  let sizes = [radius * 1.7, radius * 1.5];
  console.log(sizes);
  circle(pointObj.x, pointObj.y, random(sizes));

  pop();
}
function theEye(pointObj) {
  push();
  fill(pllt.line);
  let sizes = [radius * 1.6, radius * 1.5];
  let size = random(sizes);
  circle(pointObj.x, pointObj.y, size);
  fill("#f0f0f000");
  strokeWeight(7);
  stroke(pllt.hlt1);
  circle(pointObj.x, pointObj.y, size - random([radius * 0.4, radius * 0.2]));

  pop();
}
function overCircles(pointObj) {
  push();
  strokeWeight(0);
  if (chances(1, 25)) bigOne(pointObj);
  else if (chances(4, 30)) theEye(pointObj);
  pop();
}
