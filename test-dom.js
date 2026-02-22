const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => console.error("DOM Error:", err));
virtualConsole.on("jsdomError", (err) => console.error("JSDOM Error:", err));
virtualConsole.on("log", (log) => console.log("Console Log:", log));

JSDOM.fromURL("http://localhost:8080/profiles.html", {
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole
}).then(dom => {
    setTimeout(() => {
        try {
            const input = dom.window.document.getElementById('locationSearch');
            const btn = dom.window.document.getElementById('searchBtn');
            input.value = "The Quad";
            btn.click();
            console.log("Clicked! Container styles:", dom.window.document.getElementById('placeBubbleContainer').style.display);
        } catch (e) {
            console.error(e);
        }
    }, 1000);
});
