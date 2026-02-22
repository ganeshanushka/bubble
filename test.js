const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('profiles.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => {
    console.error("DOM Error:", err);
});
virtualConsole.on("jsdomError", (err) => {
    console.error("JSDOM Error:", err);
});
virtualConsole.on("log", (log) => {
    console.log("Console Log:", log);
});

const dom = new JSDOM(html, { runScripts: "dangerously", virtualConsole });

setTimeout(() => {
    try {
        const input = dom.window.document.getElementById('locationSearch');
        const btn = dom.window.document.getElementById('searchBtn');
        input.value = "The Quad";
        btn.click();
        console.log("Clicked! Checking display of placeBubbleContainer:", dom.window.document.getElementById('placeBubbleContainer').style.display);
    } catch(e) {
        console.error("Simulation error:", e);
    }
}, 500);
