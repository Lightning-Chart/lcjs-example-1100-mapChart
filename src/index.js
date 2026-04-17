window.lcjsSmallView = window.devicePixelRatio >= 2
/*
 * LightningChart JS example that showcases Map Chart feature.
 *
 * Next examples cover extended configuration, API usage and real life scenarios.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, MapTypes, Themes } = lcjs

const mapChart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).Map({
    theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    return t && window.lcjsSmallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.lcjsSmallView ? lcjs.htmlTextRenderer : undefined,
    type: MapTypes.World,
})
