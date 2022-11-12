window.onload = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");
    // line 1
    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.stroke();
    // line 2
    context.moveTo(0, 400);
    context.lineTo(600, 0);
    context.stroke();
    // rectangle
    context.rect(250, 150, 100, 100);
    context.stroke();
    // circle (centerX, centerY, radius, startingAngle, endingAngle, counterClockwise)
    context.arc(300, 200, 50, 1 * Math.PI, 4 * Math.PI, false);
    context.stroke();
}