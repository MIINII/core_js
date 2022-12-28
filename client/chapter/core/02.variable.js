/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

let admin;
let name;

name = 'jm';

admin = name;

console.log(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'miinii';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let eachProductPrice; // 내답
let calcProductQuantity; // 범쌤답

// - 구매 제품 가격의 총 합
let productSum; // 내답
let totalProductPrcie; // 범쌤

// - 1년 기준 일(day)자 수
// const dayOfYear; // 내답
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부
let isPurchase; // 내답
let isPayment;

let hasClassName; // boolean에서도 저렇게 쓰임~

// - 구매 결제 내역
let isPurchaseHistory; // 내답
let paymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = 'APPLE';

// - 오늘의 운세
let forturneToday;

// - 상품 정보
const productInfo = '짜잔';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fullfilled, resolved 응답 성공
// rejected 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULLFILED = 'api/fullfilled';
const REJECTED = 'api/rejected';

/** Lexical Environment */

var nickName = 'miinii';
let nickName2 = 'miinii'; // Temporal Dead Zone
