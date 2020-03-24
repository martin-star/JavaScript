"use script";



const companies = [
  { name: "Company-one", category: "Finace", start: 1981, end: 2003 },

  { name: "Company-two", category: "Retail", start: 1992, end: 2008 },

  { name: "Company-three", category: "Auto", start: 1999, end: 2007 },

  { name: "Company-four", category: "Retail", start: 1989, end: 2010 },

  { name: "Company-five", category: "Technology", start: 2009, end: 2014 },

  { name: "Company-six", category: "Finance", start: 1987, end: 2010 },

  { name: "Company-seven", category: "Auto", start: 1986, end: 1996 },

  { name: "Company-heigth", category: "Technology", start: 2011, end: 2016 },

  { name: "Company-nine", category: "Retail", start: 1981, end: 1989 }
];

console.log(companies);

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

//*forEach

companies.forEach(function(company) {
  console.log(company.name);
});

//*filter

// let canDrink=[];
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i]>=18){
//         canDrink.push(ages[i]);
//     }

// }
// console.log(canDrink)

const canDrink = ages.filter(age => age >= 18);
console.log(canDrink);

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
console.log(retailCompanies);

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start <= 1990
);

const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

console.log(lastedTenYears);

//*map
const companyName = companies.map(function(company) {
  return company.name;
});

const test = companies.map(
  company => `${company.name} [${company.start}-${company.end}]`
);
console.log(test);

//*sort

const sortedCompanies = companies.sort((company1, company2) =>
  company1.start > company2.start ? 1 : -1
);
console.log(sortedCompanies);

const sortedAges = ages.sort((age1, age2) =>
  age1 > age2 ? 1 : -1
);
console.log(sortedAges);
//*reduce

const ageSum = ages.reduce((total,age) => total + age, 0);
console.log(ageSum)

