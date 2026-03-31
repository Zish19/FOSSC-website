const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// The block we want to move is roughly around line 412-485.
// We can use a regex to match the exact comment and the two media queries after it.
// The comment is /* Responsive */
const blockRegex = /\/\* Responsive \*\/\s*@media \(max-width: 900px\) \{[\s\S]*?@media \(max-width: 600px\) \{[\s\S]*?\}\s*\}/;

const match = css.match(blockRegex);
if (match) {
    const block = match[0];
    css = css.replace(block, "");
    css = css + "\n\n" + block + "\n";
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log("Moved responsive block to bottom.");
} else {
    console.log("Could not find the responsive block.");
}
