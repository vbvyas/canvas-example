function draw() {
  var canvas = document.getElementById('cv');
  var context = canvas.getContext('2d');

  // line
  context.beginPath();
  context.moveTo(100, 500);
  context.lineTo(450, 50);
  context.stroke();

  // rectangle
  context.beginPath();
  // (x, y) - top left and (width, height)
  context.rect(100, 100, 400, 300);
  context.fillStyle = 'rgba(200, 255, 200, 0.5)';
  context.fill();
  // line style
  context.lineWidth = 2;
  context.strokeStyle = '#554E9A';
  context.stroke();

  // overlapping rectangles
  if (canvas.getContext) {
    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(10, 10, 55, 50);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 55, 50);
  }

  // circle
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 70;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'teal';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = '#333333';
  context.stroke();

  // Bezier curve
  context.beginPath();
  // starting point
  context.moveTo(200, 100);
  // controlPoint1.{x, y}, controlPoint2.{x, y}, endingPoint.{x, y}
  context.bezierCurveTo(150, 10, 400, 10, 400, 200);
  context.lineWidth = 1;
  context.strokeStyle = 'orange';
  context.stroke();
  
  // Quadratic curve
  context.beginPath();
  // starting point
  context.moveTo(300, 300);
  // controlPoint.{x, y}, endingPoint.{x, y}
  context.quadraticCurveTo(400, 0, 500, 200);
  context.lineWidth = 1;
  context.strokeStyle = '#123456';
  context.stroke();
}
