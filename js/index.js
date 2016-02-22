"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    getContextFromHTTP("//voice.ninkigumi.com/templ.html", function (dom) {
        getTextFromHTTP("//voice.ninkigumi.com/organization/family1st/sitemap.txt", function (text) {
            text.split(/\r\n|\r|\n/).map(function (url) {
                var templdom = dom.cloneNode(true);
                getContextFromHTTP(url, function (jsonlddom) {
                    applyJSONLD(getHTMLTemplates(templdom), getJSONLDs(jsonlddom), applyReview, applyPerson);
                });
            });
        });
    });
});
