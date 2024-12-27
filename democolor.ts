function coloredText(text: string, color: string): void {
    const colors: { [key: string]: string } = {
        red: '\x1b[31m',
        reset: '\x1b[0m'
    };

    if (colors[color]) {
        console.log(colors[color] + text + colors.reset);
    } else {
        console.log(text);  
    }
}

coloredText("This is red text", "red");

