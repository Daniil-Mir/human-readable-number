module.exports = function toReadable (number) {

    let digits = [0, 0, 0];
    let i = 0;
    while (number !== 0) {
      digits[i] = (number % 10);
      number = Math.floor(number / 10);
      i++;
    };

    let o = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let t = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let res = '';

    if (digits[2] === 0) { // Нет сотен
      if (digits[1] < 2) { // До второго десятка
      res = o[digits[1] * 10 + digits[0]];
      } else { // От второго десятка
        if (digits[0] === 0) { // Если единиц нет
          res = t[digits[1]];
        } else { // Если единицы есть
          res = t[digits[1]] + ' ' + o[digits[0]];
        };
      };
    } else { // Есть сотни
      if (digits[0] === 0 && digits[1] === 0) { // Нет ни десятков ни единиц
        res = o[digits[2]] + ' hundred';
      } else if (digits[1] < 2) { // До второго десятка
          res = o[digits[2]] + ' hundred' + ' ' + o[digits[1] * 10 + digits[0]];
      } else { // От второго десятка
        if (digits[0] === 0) { // Если единиц нет
          res = o[digits[2]] + ' hundred' + ' ' + t[digits[1]];
        } else { // Если единицы есть
          res = o[digits[2]] + ' hundred' + ' ' + t[digits[1]] + ' ' + o[digits[0]];
        };
      };
    };

    return res;
}
