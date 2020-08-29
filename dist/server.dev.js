"use strict";

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function main() {
  var favoriteFood;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          favoriteFood = process.env.FAVORITE_FOOD;

        case 1:
          if (!true) {
            _context.next = 7;
            break;
          }

          console.log("My favorite food is ".concat(favoriteFood));
          _context.next = 5;
          return regeneratorRuntime.awrap(sleep(5000));

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();