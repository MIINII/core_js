/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;

console.log(YEAR);
console.log(String(YEAR));

// undefined, null -> 'undefined', 'null'
console.log(String(undefined));

// boolean → 'true : 1' || 'false : 0'
let isKind = true;
console.log(String(isKind));
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// null

// boolean
let cutie = true;
console.log(cutie * 1);
console.log(+cutie);

// string
let num = '           123      ';
console.log(num * 1);

// numeric string
let width = '320px';
console.log(parseInt(width, 10)); // parseInt(width, 10진수)
console.log(parseFloat(width, 10)); // parseFloat : 부동소수점까지..

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' → false
// 위에 나열한 것 이외의 것들
console.log(Boolean('0'));
console.log(!!null);
