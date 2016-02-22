"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    getContextFromHTTP("//voice.ninkigumi.com/templ.html", function (dom) {
        var templdom = dom.cloneNode(true);
        applyJSONLD(getHTMLTemplates(templdom), getJSONLDs(document), applyReview, applyPerson);
    });
});
