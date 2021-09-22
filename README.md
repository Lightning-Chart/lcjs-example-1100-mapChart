# Map Chart

![Map Chart](mapChart.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.


## Description

Very simple overview of MapChart feature.

A `MapChart` is created by selecting one of the 9 available _Map types_:

- `MapTypes.World`
- `MapTypes.Europe`
- `MapTypes.Africa`
- `MapTypes.Asia`
- `MapTypes.NorthAmerica`
- `MapTypes.SouthAmerica`
- `MapTypes.Australia`
- `MapTypes.USA`
- `MapTypes.Canada`

This example showcases `MapTypes.World`, but you can try the other ones by simply editing this one part in the live editor:

```js
const mapChart = lightningChart().Map({
  type: MapTypes.World, // <--- Select MapType HERE
});
```

Next examples cover extended configuration, API usage and real life scenarios.


## API Links

* [Map chart]
* [Map types]
* [Radial gradient fill]
* [Color RGBA]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

© Arction Ltd 2009-2020. All rights reserved.


[Map chart]: https://www.arction.com/lightningchart-js-api-documentation/v3.1.0/classes/mapchart.html
[Map types]: https://www.arction.com/lightningchart-js-api-documentation/v3.1.0/globals.html#maptypes
[Radial gradient fill]: https://www.arction.com/lightningchart-js-api-documentation/v3.1.0/classes/radialgradientfill.html
[Color RGBA]: https://www.arction.com/lightningchart-js-api-documentation/v3.1.0/globals.html#colorrgba

