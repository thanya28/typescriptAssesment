"use strict";
function coloredText(text, color) {
    const colors = {
        red: '\x1b[31m',
    };
    if (colors[color]) {
        console.log(colors[color] + text + colors.reset);
    }
    else {
        console.log(text);
    }
}
coloredText("This is red text", "red");
