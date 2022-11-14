window.onload = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");
    const mainRed = '#ae3a3a';
    // line 1
    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.strokeStyle = mainRed;
    context.stroke();
    // line 2
    context.moveTo(0, 400);
    context.lineTo(600, 0);
    context.stroke();
    // rectangle
    /*
    context.beginPath();
    context.rect(250, 150, 100, 100);
    context.lineWidth = 10;
    context.strokeStyle = 'blue';
    context.stroke();
    // circle (centerX, centerY, radius, startingAngle, endingAngle, counterClockwise)
    context.beginPath();
    context.arc(300, 200, 50, 1 * Math.PI, 4 * Math.PI, false);
    context.fillStyle = mainRed;
    context.fill();
    */
    // text
    const text = 'My cat is such a chonker';
    context.font = '30px Shrikhand';
    context.lineWidth = 10;
    context.strokeStyle = 'blue'
    context.fillText(text, (115), 100);
    // -------------------------------------------------------------------------------------
    // Animations
    let x = 800;
    let y = 0;
    const draw = () => {
        context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.rect(x, y, 100, 100);
        context.lineWidth = 10;
        context.strokeStyle = 'blue';
        context.stroke();
        // circle (centerX, centerY, radius, startingAngle, endingAngle, counterClockwise)
        context.beginPath();
        context.arc(x + 50, y + 50, 50, 1 * Math.PI, 4 * Math.PI, false);
        context.fillStyle = mainRed;
        context.fill();

        x += (100 - x) / 10;
        if (x < 101) {
            x = 800;
        }
    }

    setInterval(draw, 50);
}


