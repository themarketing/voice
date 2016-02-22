"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    getContextFromHTTP("//voice.ninkigumi.com/templ.html", (dom) => {
        getTextFromHTTP("//voice.ninkigumi.com/organization/family1st/sitemap.txt", (text) => {
            text.split(/\r\n|\r|\n/).map((url) => {
                let templdom = dom.cloneNode(true);
                getContextFromHTTP(url, (jsonlddom) => {
                    applyJSONLD(getHTMLTemplates(templdom), getJSONLDs(jsonlddom), applyReview, applyPerson);
                });
            });
        });
    });
});
