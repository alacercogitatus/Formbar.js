let HTMLParser = require('node-html-parser');
let fs = require('fs');
let h = fs.readFileSync("sev.html");
let root = HTMLParser.parse(h.toString());
let labels = root.querySelectorAll('a.ActionListContent span.ActionListItem-label').map((el) => `${el.textContent}`.trim().replaceAll('\n',''))
let values = root.querySelectorAll('a.ActionListContent span.Counter').map((el) => `${el.textContent}`.trim().replaceAll('\n',''))
let js = labels.map((el, idx) => {
    return {"label": el, "value": values[idx]}
}).reduce((p, c) => {
    p[c.label.toLowerCase()] = c.value
    return p
}, {});
let f = fs.openSync("dependabot.json", 'w')
fs.writeSync(f, JSON.stringify(js))