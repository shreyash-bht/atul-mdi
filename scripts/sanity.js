const fs = require("fs");
const h = fs.readFileSync(".next/server/app/index.html", "utf8");
const checks = {
  title: h.includes("Atul&#x27;s Mukta Driving Instructor"),
  orderServicesBeforeVideo: h.indexOf('id="services"') < h.indexOf('id="testimonial"'),
  orderVideoBeforeWhy: h.indexOf('id="testimonial"') < h.indexOf('id="why"'),
  telLink: h.includes("tel:+918208214348"),
  waLink: h.includes("wa.me/918208214348"),
  mapIframe: /www\.google\.com\/maps\?q=.*output=embed/.test(h),
  directionsLink: h.includes("maps.app.goo.gl/4xDWrFf1nqAcs3tn9"),
  datePlaceholder: h.includes("When do you want to start"),
  trafficLightOrder:
    h.indexOf("tl-bulb green") < h.indexOf("tl-bulb yellow") &&
    h.indexOf("tl-bulb yellow") < h.indexOf("tl-bulb red"),
  mobileBar: h.includes("mobile-cta"),
  noEmailLeftover: !h.includes("example.com"),
  noOldMapTextLink: !h.includes("View on Google Maps"),
};
console.log(JSON.stringify(checks, null, 2));
const fail = Object.entries(checks).filter(([, v]) => !v);
process.exitCode = fail.length ? 1 : 0;
