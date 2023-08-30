const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "China",
    "Japan",
    "Brazil",
    "India",
    "Russia",
    "South Africa",
    "Mexico",
    "Italy",
    "Spain",
    "Turkey",
    "South Korea",
    "Nigeria",
    "Argentina",
    "Saudi Arabia",
  ];
  module.exports = countries;

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(!countries.includes(`Ethiopia`))
{
    countries.push(`Ethiopia`);
}
console.log(countries);

  // Step 1: Slice the first ten countries
  const firstTenCountries = countries.slice(0, 10);
  
  // Step 2: Find the middle country(ies)
  const middleIndex = Math.floor(countries.length / 2);
  const middleCountries =
    countries.length % 2 === 0
      ? [countries[middleIndex - 1], countries[middleIndex]]
      : [countries[middleIndex]];
  
  // Step 3: Divide the countries array into two equal arrays
  const firstHalf = countries.slice(0, middleIndex);
  const secondHalf = countries.slice(middleIndex);
  
  console.log("First Ten Countries:", firstTenCountries);
  console.log("Middle Country(ies):", middleCountries);
  console.log("First Half of Countries:", firstHalf);
  console.log("Second Half of Countries:", secondHalf);
  


