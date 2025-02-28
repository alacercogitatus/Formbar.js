let HTMLParser = require('node-html-parser');
let fs = require('fs');
let h = fs.readFileSync("sev.html");
let root = HTMLParser.parse(h.toString());
let labels = root.querySelectorAll('a.ActionListContent span.ActionListItem-label').map((el) => `${el.textContent}`.trim().replaceAll('\n',''))
let values = root.querySelectorAll('a.ActionListContent span.Counter').map((el) => `${el.textContent}`.trim().replaceAll('\n',''))
let js = labels.map((el, idx) => {
    return {"label": el, "value": values[idx]}
}).reduce((p, c) => {
    let color = "lightgrey"
    if (c.value > 6){
        color = "red"
    } else if (c.value > 4){
        color = "orange"
    } else if (c.value > 2){
        color="yellow"
    } else{
        color = "green"
    }
    let labe = c.label.toLowerCase(), o = {"message": c.value, "label": c.label, color: color, namedLogo: "dependabot"};
    let f = fs.openSync(`dependabot-${labe}.json`, 'w')
    p[labe] = c.value
    fs.writeSync(f, JSON.stringify(o))
    return p
}, {});
