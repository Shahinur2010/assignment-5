document.getElementById('btn-blog').addEventListener('click', function () {
  window.location.href = 'my-blogs.html';
})

let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function () {
  serial += 1;
  const triangleB = document.getElementById('field-b').value;
  const triangleH = document.getElementById('field-h').value;
  if (
    triangleB == "" ||
    triangleH == "" ||
    triangleB <= 0 ||
    triangleH <= 0 ||
    isNaN(triangleB) ||
    isNaN(triangleH)
  ) {
    return alert("please enter any valid number");
  }

  triangleAreaResult = 0.5 * triangleB * triangleH;
  const triangle = parseFloat(triangleAreaResult.toFixed(2));
  
  console.log( triangle);
})

document.getElementById('btn-rectangle').addEventListener('click', function () {
  serial += 1;
  const rectangleW = document.getElementById('field-w').value;
  const rectangleL = document.getElementById('field-l').value;

  if (
    rectangleW == "" ||
    rectangleL == "" ||
    rectangleW <= 0 ||
    rectangleL <= 0 ||
    isNaN(rectangleW) ||
    isNaN(rectangleL)
  ) {
    return alert("please enter any valid number");
  }

  rectangleAreaResult = rectangleW * rectangleL;
  const rectangle = parseFloat(rectangleAreaResult.toFixed(2));
  
  console.log( rectangle);
  
})

document.getElementById('btn-parallelogram').addEventListener('click', function () {
  serial += 1;
  const parallelogramB = document.getElementById('parallelogram-b-text').innerText;
  const parallelogramH = document.getElementById('parallelogram-h-text').innerText;

  parallelogramAreaResult = parallelogramB * parallelogramH;
  const parallelogram = parseFloat(parallelogramAreaResult.toFixed(2));
  
  console.log( parallelogram);
})

document.getElementById('btn-rhombus').addEventListener('click', function () {
  serial += 1;
  const rhombusD1 = document.getElementById('rhombus-d1-text').innerText;
  const rhombusD2 = document.getElementById('rhombus-d2-text').innerText;

  rhombusAreaResult = 0.5 * rhombusD1 * rhombusD2;
  const rhombus = parseFloat(rhombusAreaResult.toFixed(2));
  
  console.log( rhombus);
})

document.getElementById('btn-pentagon').addEventListener('click', function () {
  serial += 1;
  const pentagonP = document.getElementById('pentagon-p-text').innerText;
  const pentagonB = document.getElementById('pentagon-b-text').innerText;

  pentagonAreaResult = 0.5 * pentagonP * pentagonB;
  const pentagon = parseFloat(pentagonAreaResult.toFixed(2));
  
  console.log( pentagon);
  
})

document.getElementById("btn-ellipse").addEventListener("click", function () {
  serial += 1;
  const ellipseA = document.getElementById('ellipse-a-text').innerText;
  const ellipseB = document.getElementById('ellipse-b-text').innerText;

  ellipseAreaResult = 3.14 * ellipseA * ellipseB;
  const ellipse = parseFloat(ellipseAreaResult.toFixed(2));
  
  console.log( ellipse);

});

