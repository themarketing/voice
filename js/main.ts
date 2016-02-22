"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    getContextFromHTTP("//voice.ninkigumi.com/templ.html", (dom) => {
        let templdom = dom.cloneNode(true);
        applyJSONLD(getHTMLTemplates(templdom), getJSONLDs(document), applyReview, applyPerson);
    });
});
