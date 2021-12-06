"use strict";

var starRanks = document.querySelectorAll(".review_summary-rank");

var _loop = function _loop(sri) {
  starRanks[sri].addEventListener("mouseover", function () {
    for (var fi = 0; fi < starRanks.length; fi++) {
      if (fi != sri) {
        starRanks[fi].classList.add("faded");
      } else {
        starRanks[fi].classList.remove("faded");
      }
    }
  });
  starRanks[sri].addEventListener("mouseout", function () {
    for (var fi = 0; fi < starRanks.length; fi++) {
      starRanks[fi].classList.remove("faded");
    }
  });
};

for (var sri = 0; sri < starRanks.length; sri++) {
  _loop(sri);
}

var revImgs = document.querySelectorAll(".review_summary-imagesImg");

var _loop2 = function _loop2(rii) {
  revImgs[rii].addEventListener("mouseover", function () {
    for (var fi = 0; fi < revImgs.length; fi++) {
      if (fi != rii) {
        revImgs[fi].classList.add("faded");
      } else {
        revImgs[fi].classList.remove("faded");
      }
    }
  });
  revImgs[rii].addEventListener("mouseout", function () {
    for (var fi = 0; fi < revImgs.length; fi++) {
      revImgs[fi].classList.remove("faded");
    }
  });
};

for (var rii = 0; rii < revImgs.length; rii++) {
  _loop2(rii);
}
//# sourceMappingURL=main.js.map
