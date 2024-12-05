const topBarCenterText = `KN6ZDY - DM13LL`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/KN6ZDY", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#4.48/37.98/-116.39",
    "1",
    "R",
  ],
  //["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://www.accuweather.com/en/us/temecula/92590/weather-radar/337272",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://www.accuweather.com/en/us/temecula/92590/weather-forecast/337272",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-115.07,37.01,1137",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KNKX_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "SATELLITE PAC",
    "https://cdn.star.nesdis.noaa.gov/GOES18/GLM/CONUS/EXTENT3/GOES18-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "SATELLITE PSW",
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/psw/GEOCOLOR/GOES18-PSW-GEOCOLOR-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ca.png",
  ],
  //["YOUTUBE EXAMPLE", "iframe|https://www.youtube.com/embed/fzPFaXAV_2Y?autoplay=1&mute=1"],
  //[
  //  "WEBSITE EXAMPLE",
  //  "iframe|https://globe.adsbexchange.com/?airport=YYZ",
  //["Grid Square Locator",
  //  "iframe|https://www.levinecentral.com/ham/grid_square.php",
  //],
  //["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  [
    "RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  ["Solar WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"],
  ["HF PROPAGATION",
      "https://www.hamqsl.com/solar101vhf.php"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
//const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800,30400,60700,60900,10800];
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800];
