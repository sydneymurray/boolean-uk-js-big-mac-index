/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

const USBigMac = 5.66;

const UKBigMac = 5.99;

const impliedPP = USBigMac / UKBigMac;

const USDToGBP = 1.39;

const BigMacIndexUK = (((USDToGBP - impliedPP) / impliedPP) * 100).toFixed(2);

console.log("UK Big MAC index " + BigMacIndexUK);

/* Swiss //////////////////////////////// */
const swissBigMac = 52.88;
const swissimpliedPP = USBigMac / swissBigMac;
const USDToswiss = 0.12;
const BigMacIndexswiss = (((USDToswiss - swissimpliedPP) / swissimpliedPP) * 100).toFixed(2);
console.log("Swiss Big MAC index " + BigMacIndexswiss);

/* Russia //////////////////////////////// */
const russianBigMac = 135;
const russianimpliedPP = USBigMac / russianBigMac;
const USDTorussian = 0.013;
const BigMacIndexrussian = (((USDTorussian - russianimpliedPP) / russianimpliedPP) * 100).toFixed(2);
console.log("Russian Big MAC index " + BigMacIndexrussian);

/* Azerbaijan //////////////////////////////// */
const azerBigMac = 3.95;
const azerimpliedPP = USBigMac / azerBigMac;
const USDToazer = 0.59;
const BigMacIndexazer = (((USDToazer - azerimpliedPP) / azerimpliedPP) * 100).toFixed(2);
console.log("Azerbaijan Big MAC index " + BigMacIndexazer);

/* Turkey //////////////////////////////// */
const turkeyBigMac = 14.99;
const turkeyimpliedPP = USBigMac / turkeyBigMac;
const USDToturkey = 0.12;
const BigMacIndexturkey = (((USDToturkey - turkeyimpliedPP) / turkeyimpliedPP) * 100).toFixed(2);
console.log("Turkish Big MAC index " + BigMacIndexturkey);

/* Brazil //////////////////////////////// */
const canadaBigMac = 6.77;
const canadaimpliedPP = USBigMac / canadaBigMac;
const USDTocanada = 0.81;
const BigMacIndexcanada = (((USDTocanada - canadaimpliedPP) / canadaimpliedPP) * 100).toFixed(2);
console.log("Canadian Big MAC index " + BigMacIndexcanada);
