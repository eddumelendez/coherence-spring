var toctitle = document.getElementById('toctitle');
var path = window.location.pathname;
if (toctitle != null) {
    var oldtoc = toctitle.nextElementSibling;
    var newtoc = document.createElement('div');
    newtoc.setAttribute('id', 'tocbot');
    newtoc.setAttribute('class', 'js-toc desktop-toc');
    oldtoc.setAttribute('class', 'mobile-toc');
    oldtoc.parentNode.appendChild(newtoc);
    tocbot.init({
        contentSelector: '#content',
        headingSelector: 'h1, h2, h3, h4, h5',
        positionFixedSelector: 'body',
        fixedSidebarOffset: 90,
        smoothScroll: false
    });
    if (!path.endsWith("index.html") && !path.endsWith("/")) {
        var link = document.createElement("a");
        if (document.getElementById('index-link')) {
          indexLinkElement = document.querySelector('#index-link > p > a');
          linkHref = indexLinkElement.getAttribute("href");
          link.setAttribute("href", linkHref);
        } else {
          link.setAttribute("href", "index.html");
        }
        link.innerHTML = "<span><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> Back to index";
        var block = document.createElement("div");
        block.setAttribute('class', 'back-action');
        block.appendChild(link);
        var toc = document.getElementById('toc');
        var next = document.getElementById('toctitle').nextElementSibling;
        toc.insertBefore(block, next);
    }
}

var headerHtml = '<div id="header-spring">\n' +
    '<h1>\n' +
    `
    <svg width="100%" height="100%" viewBox="0 0 2443 384" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M471.136,134.549c-9.12,17.692 -13.68,38.295 -13.68,61.811c-0,23.515 4.56,44.119 13.68,61.811c9.121,17.691 22.197,31.372 39.23,41.042c17.032,9.67 37.086,14.505 60.162,14.505c18.022,-0 34.175,-3.516 48.46,-10.549c14.285,-7.033 25.823,-16.923 34.614,-29.669c8.791,-12.747 14.065,-27.472 15.823,-44.174l-49.448,-0c-2.857,13.186 -8.846,23.57 -17.966,31.152c-9.121,7.582 -20.494,11.373 -34.12,11.373c-18.461,0 -33.076,-6.977 -43.844,-20.933c-10.769,-13.955 -16.154,-32.141 -16.154,-54.558c0,-22.637 5.385,-40.878 16.154,-54.723c10.768,-13.846 25.383,-20.769 43.844,-20.769c13.626,0 24.999,3.791 34.12,11.373c9.12,7.583 15.109,17.967 17.966,31.153l49.448,0c-1.758,-16.703 -7.032,-31.427 -15.823,-44.174c-8.791,-12.747 -20.329,-22.636 -34.614,-29.669c-14.285,-7.033 -30.438,-10.549 -48.46,-10.549c-23.076,-0 -43.13,4.835 -60.162,14.505c-17.033,9.67 -30.109,23.35 -39.23,41.042Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M723.654,303.004c13.516,7.143 29.175,10.714 46.976,10.714c17.802,-0 33.461,-3.571 46.977,-10.714c13.515,-7.143 23.955,-17.252 31.317,-30.328c7.362,-13.077 11.044,-28.296 11.044,-45.658c-0,-17.142 -3.682,-32.306 -11.044,-45.493c-7.362,-13.186 -17.802,-23.35 -31.317,-30.493c-13.516,-7.143 -29.175,-10.714 -46.977,-10.714c-17.801,0 -33.46,3.571 -46.976,10.714c-13.516,7.143 -23.955,17.307 -31.317,30.493c-7.363,13.187 -11.044,28.351 -11.044,45.493c0,17.142 3.681,32.306 11.044,45.493c7.362,13.186 17.801,23.35 31.317,30.493Zm77.799,-40.713c-7.582,9.011 -17.856,13.516 -30.823,13.516c-12.746,0 -22.911,-4.505 -30.493,-13.516c-7.582,-9.01 -11.373,-20.768 -11.373,-35.273c-0,-14.505 3.791,-26.263 11.373,-35.273c7.582,-9.011 17.747,-13.516 30.493,-13.516c12.967,-0 23.241,4.505 30.823,13.516c7.582,9.01 11.373,20.768 11.373,35.273c0,14.505 -3.791,26.263 -11.373,35.273Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1024.96,158.779c-12.857,-12.307 -29.284,-18.461 -49.284,-18.461c-20.878,0 -37.581,7.582 -50.108,22.746l0,-82.084l-46.481,-0l-0,230.76l46.481,-0l0,-87.03c0,-14.505 3.352,-25.823 10.055,-33.954c6.703,-8.132 15.988,-12.198 27.856,-12.198c11.428,0 19.999,3.682 25.713,11.044c5.714,7.362 8.571,18.076 8.571,32.142l0,89.996l46.482,-0l0,-91.974c0,-28.351 -6.428,-48.68 -19.285,-60.987Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1071.11,181.36c-7.142,13.077 -10.714,28.406 -10.714,45.988c0,17.362 3.681,32.581 11.044,45.657c7.362,13.077 17.911,23.131 31.647,30.164c13.736,7.033 30.054,10.549 48.954,10.549c14.505,-0 27.362,-2.582 38.57,-7.747c11.208,-5.165 20.219,-12.252 27.032,-21.263c6.813,-9.011 11.098,-19.12 12.857,-30.328l-45.823,-0c-1.978,7.911 -6.099,13.9 -12.362,17.966c-6.263,4.066 -14.12,6.099 -23.571,6.099c-11.867,-0 -21.207,-3.517 -28.02,-10.549c-6.813,-7.033 -10.769,-16.703 -11.868,-29.01l-0,-1.319l122.962,0c0.879,-4.615 1.319,-9.89 1.319,-15.823c-0.22,-16.483 -4.011,-30.823 -11.373,-43.021c-7.363,-12.197 -17.582,-21.647 -30.659,-28.35c-13.076,-6.703 -28.185,-10.055 -45.327,-10.055c-16.923,0 -31.812,3.571 -44.669,10.714c-12.857,7.143 -22.856,17.252 -29.999,30.328Zm115.545,25.879l-76.81,-0c1.319,-9.89 5.439,-17.747 12.362,-23.571c6.923,-5.824 15.439,-8.736 25.549,-8.736c10.549,0 19.284,2.802 26.207,8.406c6.923,5.605 11.154,13.571 12.692,23.901Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1355.11,142.296l-7.912,0c-12.527,0 -22.526,2.143 -29.999,6.428c-7.472,4.286 -13.735,10.604 -18.79,18.956l-4.286,-25.384l-42.196,0l0,169.444l46.482,-0l-0,-83.074c-0,-13.626 3.077,-24.394 9.23,-32.306c6.154,-7.912 15.824,-11.868 29.01,-11.868l18.461,0l0,-42.196Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1367.81,181.36c-7.143,13.077 -10.714,28.406 -10.714,45.988c0,17.362 3.681,32.581 11.044,45.657c7.362,13.077 17.911,23.131 31.647,30.164c13.735,7.033 30.053,10.549 48.954,10.549c14.505,-0 27.361,-2.582 38.57,-7.747c11.208,-5.165 20.219,-12.252 27.032,-21.263c6.813,-9.011 11.098,-19.12 12.856,-30.328l-45.822,-0c-1.978,7.911 -6.099,13.9 -12.362,17.966c-6.264,4.066 -14.121,6.099 -23.571,6.099c-11.867,-0 -21.208,-3.517 -28.021,-10.549c-6.813,-7.033 -10.768,-16.703 -11.867,-29.01l-0,-1.319l122.962,0c0.879,-4.615 1.319,-9.89 1.319,-15.823c-0.22,-16.483 -4.011,-30.823 -11.374,-43.021c-7.362,-12.197 -17.581,-21.647 -30.658,-28.35c-13.076,-6.703 -28.185,-10.055 -45.328,-10.055c-16.922,0 -31.812,3.571 -44.668,10.714c-12.857,7.143 -22.857,17.252 -29.999,30.328Zm115.545,25.879l-76.81,-0c1.318,-9.89 5.439,-17.747 12.362,-23.571c6.923,-5.824 15.439,-8.736 25.548,-8.736c10.549,0 19.285,2.802 26.208,8.406c6.923,5.605 11.153,13.571 12.692,23.901Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1694.66,158.779c-12.746,-12.307 -29.01,-18.461 -48.789,-18.461c-12.307,0 -22.636,2.033 -30.988,6.099c-8.351,4.066 -15.494,9.725 -21.428,16.977l-4.285,-21.098l-40.548,0l0,169.444l46.482,-0l-0,-86.7c-0,-14.725 3.296,-26.153 9.889,-34.284c6.594,-8.132 15.934,-12.198 28.021,-12.198c22.857,0 34.285,14.615 34.285,43.845l-0,89.337l46.481,-0l0,-91.974c0,-28.351 -6.373,-48.68 -19.12,-60.987Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1873.17,296.081c14.395,-11.758 23.131,-27.966 26.208,-48.624l-47.801,-0c-1.758,8.791 -5.659,15.713 -11.703,20.768c-6.043,5.055 -13.57,7.582 -22.581,7.582c-12.088,0 -21.758,-4.505 -29.01,-13.516c-7.252,-9.01 -10.879,-20.768 -10.879,-35.273c0,-14.505 3.627,-26.263 10.879,-35.273c7.252,-9.011 16.922,-13.516 29.01,-13.516c8.791,-0 16.153,2.472 22.087,7.417c5.934,4.945 9.89,11.593 11.868,19.944l48.13,0c-3.297,-20.438 -12.088,-36.427 -26.373,-47.965c-14.285,-11.538 -32.746,-17.307 -55.382,-17.307c-17.582,0 -33.021,3.571 -46.317,10.714c-13.297,7.143 -23.516,17.252 -30.658,30.328c-7.143,13.077 -10.714,28.296 -10.714,45.658c-0,17.142 3.571,32.306 10.714,45.493c7.142,13.186 17.307,23.35 30.493,30.493c13.186,7.143 28.57,10.714 46.152,10.714c22.856,-0 41.482,-5.879 55.877,-17.637Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M1919.65,181.36c-7.143,13.077 -10.714,28.406 -10.714,45.988c-0,17.362 3.681,32.581 11.043,45.657c7.363,13.077 17.912,23.131 31.647,30.164c13.736,7.033 30.054,10.549 48.954,10.549c14.505,-0 27.362,-2.582 38.57,-7.747c11.209,-5.165 20.219,-12.252 27.032,-21.263c6.813,-9.011 11.099,-19.12 12.857,-30.328l-45.822,-0c-1.978,7.911 -6.099,13.9 -12.363,17.966c-6.263,4.066 -14.12,6.099 -23.57,6.099c-11.868,-0 -21.208,-3.517 -28.021,-10.549c-6.813,-7.033 -10.769,-16.703 -11.868,-29.01l0,-1.319l122.963,0c0.879,-4.615 1.318,-9.89 1.318,-15.823c-0.22,-16.483 -4.011,-30.823 -11.373,-43.021c-7.362,-12.197 -17.582,-21.647 -30.658,-28.35c-13.077,-6.703 -28.186,-10.055 -45.328,-10.055c-16.922,0 -31.812,3.571 -44.669,10.714c-12.856,7.143 -22.856,17.252 -29.998,30.328Zm115.545,25.879l-76.811,-0c1.319,-9.89 5.44,-17.747 12.362,-23.571c6.923,-5.824 15.439,-8.736 25.549,-8.736c10.549,0 19.285,2.802 26.208,8.406c6.922,5.605 11.153,13.571 12.692,23.901Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M2166.93,182.45c-6.593,13.025 -9.889,27.981 -9.889,44.865c-0,17.046 3.296,32.042 9.889,44.987c6.593,12.945 16.001,22.995 28.222,30.151c12.222,7.156 26.373,10.734 42.454,10.734c18.814,0 34.453,-5.065 46.916,-15.196c12.462,-10.131 20.302,-23.961 23.518,-41.489l-20.986,0c-3.216,11.9 -9.166,21.106 -17.849,27.619c-8.684,6.513 -19.539,9.769 -32.564,9.769c-11.578,0 -21.79,-2.814 -30.634,-8.442c-8.845,-5.629 -15.639,-13.508 -20.383,-23.639c-4.744,-10.131 -7.115,-21.629 -7.115,-34.494c-0,-13.025 2.371,-24.563 7.115,-34.614c4.744,-10.05 11.538,-17.89 20.383,-23.518c8.844,-5.628 19.056,-8.442 30.634,-8.442c12.865,-0 23.759,3.296 32.684,9.889c8.925,6.594 14.915,15.76 17.971,27.499l20.985,-0c-3.216,-17.528 -11.136,-31.358 -23.759,-41.489c-12.624,-10.131 -28.262,-15.196 -46.916,-15.196c-16.081,-0 -30.232,3.578 -42.454,10.734c-12.221,7.156 -21.629,17.246 -28.222,30.272Z" style="fill:#fb013d;fill-rule:nonzero;"/><path d="M2332.16,142.891l0,168.849l110.717,-0l-0,-19.297l-89.731,-0l-0,-56.926l72.122,-0l0,-19.297l-72.122,-0l-0,-54.032l86.595,-0l0,-19.297l-107.581,-0Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><g><g><g><path d="M165,3.437l-120.417,69.584l0,45.833l132.5,-76.667l132.5,76.667l0,-45.833l-120.416,-69.584c-7.5,-4.583 -16.667,-4.583 -24.167,0Z" style="fill:#fb013d;fill-rule:nonzero;"/></g></g></g><g><path d="M240,251.354c-1.667,-2.083 -3.75,-4.167 -5.833,-5.417c-3.75,-2.916 -7.917,-5 -12.084,-6.666c0,-0 -75.416,-31.667 -78.333,-32.917c-80.833,-35.417 19.167,-46.25 27.083,-46.667c20.417,-0.833 34.584,1.25 35,1.25c7.917,0 14.584,-6.666 14.584,-14.583c-0,-7.5 -5.834,-13.75 -12.917,-14.583c-3.333,-0.417 -7.5,-0.834 -10.417,-1.25c-8.75,-0.834 -17.916,-1.25 -26.666,-0.834c-17.917,0.417 -35.417,3.334 -53.334,9.167c-8.75,2.917 -17.5,6.667 -25.833,12.917c-4.167,3.333 -8.333,6.666 -12.083,12.083c-1.667,2.5 -3.334,5.833 -4.167,9.583c-0.833,3.75 -1.25,7.917 -0.417,11.667c0.834,3.75 2.084,7.083 4.167,10c1.667,2.917 3.75,5 5.833,7.083c4.167,4.167 7.917,6.25 12.917,9.167c9.167,5 78.75,31.25 79.583,31.667c74.584,25.833 38.75,32.5 24.167,35.833c-0.417,0 -0.833,0 -1.25,0.417c-1.25,0.416 -2.5,0.416 -3.75,0.833c-5.833,0.833 -20.417,1.667 -20.833,1.667c-3.334,-0 -5.834,2.5 -5.834,5.833c0,3.333 2.5,5.833 5.834,5.833c0.416,0 18.333,0 26.666,-1.25c7.917,-1.25 16.25,-2.916 24.167,-6.25c4.167,-1.666 7.917,-3.75 11.667,-7.5c2.083,-1.666 3.75,-4.166 5,-7.083c1.25,-2.917 1.666,-6.667 1.25,-10c-0.834,-5 -2.5,-7.917 -4.167,-10Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M202.5,218.021c0,1.666 1.25,2.916 2.917,2.916c1.666,0 2.916,-1.25 2.916,-2.916c0,-1.667 -1.25,-2.917 -2.916,-2.917c-1.667,0.417 -2.917,1.667 -2.917,2.917Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M194.583,221.771c0,1.25 0.834,2.083 2.084,2.083c1.25,0 2.083,-0.833 2.083,-2.083c0,-1.25 -0.833,-2.084 -2.083,-2.084c-1.25,0 -2.084,0.834 -2.084,2.084Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M153.75,239.271c0,-0.834 -0.833,-2.084 -2.083,-2.084c-0.834,0 -2.084,0.834 -2.084,2.084c0,0.833 0.834,2.083 2.084,2.083c1.25,0 2.083,-0.833 2.083,-2.083Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M142.5,240.521c-2.083,-0 -3.333,1.666 -3.333,3.333c-0,2.083 1.666,3.333 3.333,3.333c2.083,0 3.333,-1.666 3.333,-3.333c0,-2.083 -1.25,-3.333 -3.333,-3.333Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M135.417,248.854c-0,-2.083 -1.667,-3.333 -3.334,-3.333c-2.083,-0 -3.333,1.666 -3.333,3.333c0,2.083 1.667,3.333 3.333,3.333c1.667,0.417 3.334,-1.25 3.334,-3.333Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M124.583,256.771c0,-2.084 -1.666,-3.334 -3.333,-3.334c-2.083,0 -3.333,1.667 -3.333,3.334c-0,1.666 1.666,3.333 3.333,3.333c1.667,0 3.333,-1.25 3.333,-3.333Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M121.25,266.354c-2.083,0 -3.75,1.667 -3.75,3.75c0,2.083 1.667,3.75 3.75,3.75c2.083,0 3.75,-1.667 3.75,-3.75c0,-2.083 -1.667,-3.75 -3.75,-3.75Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M132.917,273.854c-2.917,0 -5,2.083 -5,5c-0,2.917 2.083,5 5,5c2.916,0 5,-2.083 5,-5c-0,-2.917 -2.084,-5 -5,-5Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><circle cx="147.5" cy="283.437" r="5" style="fill:#fb013d;"/></g><g><path d="M215,211.771c-2.083,-0 -3.75,1.666 -3.75,3.75c0,2.083 1.667,3.75 3.75,3.75c2.083,-0 3.75,-1.667 3.75,-3.75c0,-2.084 -1.667,-3.75 -3.75,-3.75Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><circle cx="230" cy="210.104" r="6.667" style="fill:#fb013d;"/></g><g><path d="M251.667,192.187c-5,0 -8.75,3.75 -8.75,8.75c-0,5 3.75,8.75 8.75,8.75c5,0 8.75,-3.75 8.75,-8.75c-0,-4.583 -4.167,-8.75 -8.75,-8.75Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M269.167,169.271c-6.25,-0 -11.25,5 -11.25,11.25c-0,6.25 5,11.25 11.25,11.25c6.25,-0 11.25,-5 11.25,-11.25c-0,-6.25 -5,-11.25 -11.25,-11.25Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M243.75,168.854c7.083,0 12.917,-5.833 12.917,-12.917c-0,-7.083 -5.834,-12.916 -12.917,-12.916c-7.083,-0 -12.917,5.833 -12.917,12.916c0,7.084 5.834,12.917 12.917,12.917Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><circle cx="161.25" cy="285.521" r="5" style="fill:#fb013d;"/></g><g><path d="M354.167,292.187l-0,-139.166l-37.5,-21.667l-0,152.917l-132.084,77.083l37.5,21.667l120.417,-69.584c7.083,-4.583 11.667,-12.5 11.667,-21.25Z" style="fill:#fb013d;fill-rule:nonzero;"/></g><g><path d="M0,292.187l0,-139.166l37.5,-21.667l0,152.917l132.5,76.666l-37.5,21.667l-120.417,-69.583c-7.5,-4.167 -12.083,-12.084 -12.083,-20.834Z" style="fill:#fb013d;fill-rule:nonzero;"/></g></g></svg>
    ` +
    '\n' +
    '</h1>\n' +
    '</div>';

var header = document.createElement("div");
header.innerHTML = headerHtml;
document.body.insertBefore(header, document.body.firstChild);