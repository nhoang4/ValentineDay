var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

// Terminal effect variables
var scanlines = [];
var characters = "01";
var frameNumber = 501;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var bouquetImageLoaded = false;
var bouquetImage = new Image();
bouquetImage.src = "images/bouquet.png";
bouquetImage.onload = function () {
    bouquetImageLoaded = true;
};

// Create scanlines for terminal effect
for (let i = 0; i < canvas.height; i += 2) {
    scanlines.push({ y: i, alpha: Math.random() * 0.1 });
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawMatrixEffect() {
    // Draw semi-transparent beige background to create fade effect
    context.fillStyle = "rgba(245, 236, 217, 0.08)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw random binary digits
    context.fillStyle = "rgba(0, 150, 0, 0.1)";
    context.font = "12px monospace";
    for (let i = 0; i < 50; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        context.fillText(characters[Math.floor(Math.random() * characters.length)], x, y);
    }
}

function drawScanlines() {
    context.strokeStyle = "rgba(0, 200, 0, 0.03)";
    context.lineWidth = 1;
    for (let i = 0; i < canvas.height; i += 2) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
    }
}

function drawTerminalBackground() {
    // Clear fully each frame so previous text does not leave trails.
    context.fillStyle = "#f5ecd9";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw scanlines
    context.strokeStyle = "rgba(0, 200, 0, 0.02)";
    context.lineWidth = 1;
    for (let i = 0; i < canvas.height; i += 3) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawTulipBouquet(alpha) {
    if (!bouquetImageLoaded) {
        return;
    }

    var maxWidth = canvas.width * 0.5;
    var maxHeight = canvas.height * 0.68;
    var widthRatio = maxWidth / bouquetImage.width;
    var heightRatio = maxHeight / bouquetImage.height;
    var scale = Math.min(widthRatio, heightRatio);
    var drawWidth = bouquetImage.width * scale;
    var drawHeight = bouquetImage.height * scale;
    var x = (canvas.width - drawWidth) / 2;
    var y = canvas.height * 0.40 - drawHeight * 0.38;

    context.save();
    context.globalAlpha = Math.min(alpha, 1);
    context.imageSmoothingEnabled = false;
    context.drawImage(bouquetImage, x, y, drawWidth, drawHeight);
    context.restore();
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px 'Courier New', monospace";
    context.textAlign = "center";

    // Keep a very subtle glow so text stays readable without looking neon.
    context.shadowColor = "rgba(0, 80, 180, 0.2)";
    context.shadowBlur = 3;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I can't believe how lucky I am", "to have you in my life."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I can't believe how lucky I am to have you in my life.", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I can't believe how lucky I am", "to have you in my life."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I can't believe how lucky I am to have you in my life.", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1300){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1300 && frameNumber < 1400){
        context.fillStyle = "rgba(0, 150, 255, 1)";
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
    }
    if(frameNumber >= 1400 && frameNumber < 1700){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks(["Out of all the people we've become, us meeting was so incredibly,", "unfathomably unlikely."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1700){
        opacity = 0;
    }
    if(frameNumber > 1700 && frameNumber < 1950){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        context.fillText("and yet, here you are.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1950 && frameNumber < 2200){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        context.fillText("and yet, here you are.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2200){
        opacity = 0;
    }
    if(frameNumber > 2200 && frameNumber < 2450){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["One of my favorite people in the entire world,", "and someone who genuinely means a lot to me."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("One of my favorite people in the entire world, and someone who genuinely means a lot to me.", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2450 && frameNumber < 2700){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["One of my favorite people in the entire world,", "and someone who genuinely means a lot to me."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("One of my favorite people in the entire world, and someone who genuinely means a lot to me.", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2700){
        opacity = 0;
    }
    if(frameNumber > 2700 && frameNumber < 2950){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Thank you for being you,", "and for being part of my life", "in the way you are."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Thank you for being you, and for being part of my life in the way you are.", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2950 && frameNumber < 3200){
        context.fillStyle = `rgba(0, 150, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Thank you for being you,", "and for being part of my life", "in the way you are."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Thank you for being you, and for being part of my life in the way you are.", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    if(frameNumber == 3200){
        secondOpacity = 0;
    }
    if(frameNumber >= 3200 && frameNumber < 3400){
        context.fillStyle = `rgba(0, 150, 255, ${secondOpacity})`;
        context.fillText("I'm really grateful.", canvas.width/2, (canvas.height/2 + 50));
        secondOpacity = secondOpacity + 0.01;
    }
    if(frameNumber >= 3400 && frameNumber < 3600){
        context.fillStyle = `rgba(0, 150, 255, ${secondOpacity})`;
        context.fillText("I'm really grateful.", canvas.width/2, (canvas.height/2 + 50));
        secondOpacity = secondOpacity - 0.01;
    }

    if(frameNumber >= 3700 && frameNumber < 99999){
        drawTulipBouquet(thirdOpacity);
        context.fillStyle = `rgba(0, 150, 255, ${Math.min(thirdOpacity, 1)})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Distance is annoying so I used technology", "to put tulips where you are."], canvas.width / 2, canvas.height * 0.86, fontSize, lineHeight);
        } else {
            context.fillText("Distance is annoying so I used technology to put tulips where you are.", canvas.width/2, canvas.height * 0.86);
        }
        thirdOpacity = thirdOpacity + 0.008;
    }

    // Reset the shadow effect after drawing the text
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function draw() {
    drawTerminalBackground();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.requestAnimationFrame(draw);
