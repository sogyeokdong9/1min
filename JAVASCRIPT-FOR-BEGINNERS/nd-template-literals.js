// @ts-check

/** @global */
/** @type { {name: string, age: number, country: string[]} } */
const person = {
  name: 'John',
  age: 34,
  country: ['United States', 'Canada', 'France', 'Germany']
}

// const getCountry = () => {
//   let country = person.country.length;
//   let result = '';

//   if (country === 1) {
//     return person.country.join();
//   } else if (country === 2) {
//     return person.country.join(' and ');
//   } else if (country >= 3) {
//     result += person.country.slice(0, country - 1).join(', ');
//     console.log(result);
//     result += ', and ';
//     result += person.country.slice(-1);
//     return result;
//   } else {
//     return 'No nationality.'
//   }
// }

// console.log(getCountry());

/**
 * Returns a message based on nationality.
 * If you do have not a nationality, → No nationality.
 * If you have one nationality, → nation
 * If you have two nationalities, → nation and nation
 * If you have more than three nationalities → nation, nation, ... and nation
 * @param {number} country - person.country.length
 * @returns {String}
 */
function getCountryMap(country) {
  /** @type { {0: string, 1: string, 2: string} } */
  const countries = {
    0: 'No nationality.',
    1: person.country.join(),
    2: person.country.join(' and '),
  };
  /** @type {string} */
  const multinational = person.country.slice(0, country - 1).join(', ') + ' and ' + person.country.slice(-1);
  return countries[country] ?? multinational;
}

/** @type {string} */
const info = `
User name is ${person.name}.
He is ${person.age} years old.
He is from ${ getCountryMap(person.country.length) }.
`

console.log(info);

