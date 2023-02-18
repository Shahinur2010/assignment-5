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
  const result = parseFloat(triangleAreaResult.toFixed(2));
  
  const id = document.getElementById('triangle').innerText;

  displayData(id, result);
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
  const result = parseFloat(rectangleAreaResult.toFixed(2));
  
  const id = document.getElementById('rectangle').innerText;

  displayData(id, result);
})

document.getElementById('btn-parallelogram').addEventListener('click', function () {
  serial += 1;
  const parallelogramB = get('parallelogram-b-text');
  const parallelogramH = getId('parallelogram-h-text');

  parallelogramAreaResult = parallelogramB * parallelogramH;
  const result = parseFloat(parallelogramAreaResult.toFixed(2));
  
  const id = document.getElementById('parallelogram').innerText;
  displayData(id, result);
})

document.getElementById('btn-rhombus').addEventListener('click', function () {
  serial += 1;
  const rhombusD1 = get('rhombus-d1-text');
  const rhombusD2 = getId('rhombus-d2-text');

  rhombusAreaResult = 0.5 * rhombusD1 * rhombusD2;
  const result = parseFloat(rhombusAreaResult.toFixed(2));
  
  const id = document.getElementById('rhombus').innerText;

  displayData(id, result);
})

document.getElementById('btn-pentagon').addEventListener('click', function () {
  serial += 1;
  const pentagonP = get('pentagon-p-text');
  const pentagonB = getId('pentagon-b-text');

  pentagonAreaResult = 0.5 * pentagonP * pentagonB;
  const result = parseFloat(pentagonAreaResult.toFixed(2));
  const id = document.getElementById('pentagon').innerText;

  displayData(id, result);
})

document.getElementById("btn-ellipse").addEventListener("click", function () {
  serial += 1;
  const ellipseA = get('ellipse-a-text');
  const ellipseB = getId('ellipse-b-text');

  ellipseAreaResult = 3.14 * ellipseA * ellipseB;
  const result = parseFloat(ellipseAreaResult.toFixed(2));
  const id = document.getElementById('ellipse').innerText;

  displayData(id, result);
});




