module.exports = {
    title: "帮助文档",
    plugins: ["hide-element","-sharing","search-pro","code","page-toc"],
    pluginsConfig: {
        "hide-element": {
            "elements": [".gitbook-link", ".navigation-prev", ".navigation-next"]
        },
        "page-toc": {
            "selector": ".markdown-section h1, .markdown-section h2, .markdown-section h3",
            "position": "before-first",
            "showByDefault": true,
        }
    },
    styles: {
        "website": "styles/website.css"
    },
}