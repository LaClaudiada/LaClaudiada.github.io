// first we upload the data 

var data = [{"Year":1880,"Temperature":-0.19},{"Year":1881,"Temperature":-0.11},{"Year":1882,"Temperature":-0.12},{"Year":1883,"Temperature":-0.2},{"Year":1884,"Temperature":-0.3},{"Year":1885,"Temperature":-0.32},{"Year":1886,"Temperature":-0.33},{"Year":1887,"Temperature":-0.36},{"Year":1888,"Temperature":-0.18},{"Year":1889,"Temperature":-0.11},{"Year":1890,"Temperature":-0.37},{"Year":1891,"Temperature":-0.24},{"Year":1892,"Temperature":-0.27},{"Year":1893,"Temperature":-0.32},{"Year":1894,"Temperature":-0.32},{"Year":1895,"Temperature":-0.23},{"Year":1896,"Temperature":-0.12},{"Year":1897,"Temperature":-0.12},{"Year":1898,"Temperature":-0.28},{"Year":1899,"Temperature":-0.19},{"Year":1900,"Temperature":-0.09},{"Year":1901,"Temperature":-0.16},{"Year":1902,"Temperature":-0.3},{"Year":1903,"Temperature":-0.39},{"Year":1904,"Temperature":-0.49},{"Year":1905,"Temperature":-0.28},{"Year":1906,"Temperature":-0.23},{"Year":1907,"Temperature":-0.4},{"Year":1908,"Temperature":-0.44},{"Year":1909,"Temperature":-0.48},{"Year":1910,"Temperature":-0.43},{"Year":1911,"Temperature":-0.43},{"Year":1912,"Temperature":-0.36},{"Year":1913,"Temperature":-0.36},{"Year":1914,"Temperature":-0.16},{"Year":1915,"Temperature":-0.12},{"Year":1916,"Temperature":-0.33},{"Year":1917,"Temperature":-0.44},{"Year":1918,"Temperature":-0.28},{"Year":1919,"Temperature":-0.27},{"Year":1920,"Temperature":-0.26},{"Year":1921,"Temperature":-0.18},{"Year":1922,"Temperature":-0.27},{"Year":1923,"Temperature":-0.25},{"Year":1924,"Temperature":-0.25},{"Year":1925,"Temperature":-0.21},{"Year":1926,"Temperature":-0.09},{"Year":1927,"Temperature":-0.21},{"Year":1928,"Temperature":-0.19},{"Year":1929,"Temperature":-0.35},{"Year":1930,"Temperature":-0.15},{"Year":1931,"Temperature":-0.1},{"Year":1932,"Temperature":-0.17},{"Year":1933,"Temperature":-0.3},{"Year":1934,"Temperature":-0.14},{"Year":1935,"Temperature":-0.21},{"Year":1936,"Temperature":-0.16},{"Year":1937,"Temperature":-0.04},{"Year":1938,"Temperature":-0.04},{"Year":1939,"Temperature":-0.03},{"Year":1940,"Temperature":0.11},{"Year":1941,"Temperature":0.18},{"Year":1942,"Temperature":0.05},{"Year":1943,"Temperature":0.07},{"Year":1944,"Temperature":0.2},{"Year":1945,"Temperature":0.08},{"Year":1946,"Temperature":-0.07},{"Year":1947,"Temperature":-0.04},{"Year":1948,"Temperature":-0.11},{"Year":1949,"Temperature":-0.11},{"Year":1950,"Temperature":-0.18},{"Year":1951,"Temperature":-0.07},{"Year":1952,"Temperature":0.01},{"Year":1953,"Temperature":0.07},{"Year":1954,"Temperature":-0.15},{"Year":1955,"Temperature":-0.14},{"Year":1956,"Temperature":-0.21},{"Year":1957,"Temperature":0.04},{"Year":1958,"Temperature":0.07},{"Year":1959,"Temperature":0.03},{"Year":1960,"Temperature":-0.02},{"Year":1961,"Temperature":0.05},{"Year":1962,"Temperature":0.04},{"Year":1963,"Temperature":0.07},{"Year":1964,"Temperature":-0.2},{"Year":1965,"Temperature":-0.1},{"Year":1966,"Temperature":-0.05},{"Year":1967,"Temperature":-0.02},{"Year":1968,"Temperature":-0.07},{"Year":1969,"Temperature":0.07},{"Year":1970,"Temperature":0.03},{"Year":1971,"Temperature":-0.09},{"Year":1972,"Temperature":0.01},{"Year":1973,"Temperature":0.16},{"Year":1974,"Temperature":-0.08},{"Year":1975,"Temperature":-0.02},{"Year":1976,"Temperature":-0.11},{"Year":1977,"Temperature":0.17},{"Year":1978,"Temperature":0.06},{"Year":1979,"Temperature":0.16},{"Year":1980,"Temperature":0.27},{"Year":1981,"Temperature":0.33},{"Year":1982,"Temperature":0.13},{"Year":1983,"Temperature":0.31},{"Year":1984,"Temperature":0.16},{"Year":1985,"Temperature":0.12},{"Year":1986,"Temperature":0.18},{"Year":1987,"Temperature":0.33},{"Year":1988,"Temperature":0.41},{"Year":1989,"Temperature":0.28},{"Year":1990,"Temperature":0.44},{"Year":1991,"Temperature":0.41},{"Year":1992,"Temperature":0.22},{"Year":1993,"Temperature":0.24},{"Year":1994,"Temperature":0.31},{"Year":1995,"Temperature":0.45},{"Year":1996,"Temperature":0.34},{"Year":1997,"Temperature":0.47},{"Year":1998,"Temperature":0.62},{"Year":1999,"Temperature":0.4},{"Year":2000,"Temperature":0.4},{"Year":2001,"Temperature":0.53},{"Year":2002,"Temperature":0.62},{"Year":2003,"Temperature":0.61},{"Year":2004,"Temperature":0.53},{"Year":2005,"Temperature":0.67},{"Year":2006,"Temperature":0.62},{"Year":2007,"Temperature":0.64},{"Year":2008,"Temperature":0.52},{"Year":2009,"Temperature":0.63},{"Year":2010,"Temperature":0.7},{"Year":2011,"Temperature":0.59},{"Year":2012,"Temperature":0.62},{"Year":2013,"Temperature":0.65},{"Year":2014,"Temperature":0.73},{"Year":2015,"Temperature":0.87},{"Year":2016,"Temperature":0.99},{"Year":2017,"Temperature":0.91},{"Year":2018,"Temperature":0.83}];

//check we have 139 years of data

console.log(data.length);

// Select the chart container so we can start adding new elements to it

var container = document.querySelector('.chart');

// start a loop to add one new element per entry

data.forEach(function(entry){

//elements are always added in tow stpes
  
  var stripe = document.createElement('div');
container.appendChild(stripe);
  
// give the new element a class

 stripe.className = 'stripe';

//now, let's give the element the right colour
  
  var color='';
  
//dark blue: temperature is under -0.5
//light blue: temperature is under -0.25
//grey: temperature is between -0.25 and -0.25
//light red: temperature is above 0.25
//dark red: temperature is above 0.5
  
var colorScale = chroma.scale('RdBu').domain([1,-1]);
color = colorScale(entry.Temperature);
  
stripe.style['background-color'] = color;
//stripe.innerHTML = entry.Year;
  
});