'use strict';
let tablePlace = document.getElementById('tablePlace')
let newStore = document.getElementById('newStore');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let cookieStores = []
new CookieStore('Seattle', 23, 65, 6.3)
new CookieStore('Tokyo', 3, 24, 1.2)
new CookieStore('Dubai', 11, 38, 3.7)
new CookieStore('Paris', 20, 38, 2.3)
new CookieStore('Lima', 2, 16, 4.6)
function CookieStore(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  cookieStores.push(this);
}
CookieStore.prototype.dailyGeneratedCustomers = function (){
  this.generatedCustomers = []
  this.generatedCookies = []
  this.cookiesTotal = 0
  for(let i = 0; i < 15; i++){
  this.generatedCustomers.push(randomCustomer(this.minCust, this.maxCust))
  this.generatedCookies.push(Math.ceil(this.generatedCustomers[i] * this.avgCookie))
  this.cookiesTotal += this.generatedCookies[i]
  }
}
function randomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let generatedCustomer = Math.floor(Math.random() * (max - min) + min);
  return generatedCustomer
  }
CookieStore.prototype.render = function(){
  let tableElem = document.createElement('tr')
  tablePlace.appendChild(tableElem);
  let storeName = document.createElement('td')
  storeName.textContent = this.name
  tableElem.appendChild(storeName)
  for(let i = 0; i < 15; i++){
  let rowElem = document.createElement('td');
  rowElem.textContent = this.generatedCookies[i]
  tableElem.appendChild(rowElem);
  }
  let totalRow = document.createElement('td')
  totalRow.textContent = this.cookiesTotal
  tableElem.appendChild(totalRow)
}
function tableHeaderRender(){
  let tableElem = document.createElement('tr');
  tablePlace.appendChild(tableElem);
  let cityTitle = document.createElement('td')
  cityTitle.textContent = 'City'
  tableElem.appendChild(cityTitle)
  for(let i = 0; i < hours.length; i++){
  let rowElem = document.createElement('td');
  rowElem.textContent = hours[i]
  tableElem.appendChild(rowElem);
  }
  let totalTitle = document.createElement('td')
  totalTitle.textContent = 'Total Sold'
  tableElem.appendChild(totalTitle)
 }
cookieStores[0].dailyGeneratedCustomers()
cookieStores[1].dailyGeneratedCustomers()
cookieStores[2].dailyGeneratedCustomers()
cookieStores[3].dailyGeneratedCustomers()
cookieStores[4].dailyGeneratedCustomers()
tableHeaderRender()
cookieStores[0].render()
cookieStores[1].render()
cookieStores[2].render()
cookieStores[3].render()
cookieStores[4].render()
let eventCookieStore = 5
newStore.addEventListener('submit', handleSumbit);
function handleSumbit(event){
  event.preventDefault();
  let fullName = event.target.fullName.value;
  let maxCustomers = event.target.maxCustomers.value;
  let minCustomers = event.target.minCustomers.value;
  let avgCookies = event.target.avgCookies.value;
  new CookieStore(fullName, maxCustomers, minCustomers, avgCookies)
  cookieStores[eventCookieStore].dailyGeneratedCustomers();
  let rowCount = tablePlace.rows.length
  tablePlace.deleteRow(rowCount -1);
  cookieStores[eventCookieStore].render()
  tableFooterRender()
  eventCookieStore += 1
}
function tableFooterRender(){
  let tableElem = document.createElement('tr');
  tablePlace.appendChild(tableElem);
  let cityTitle = document.createElement('td')
  cityTitle.textContent = 'Totals'
  tableElem.appendChild(cityTitle)
  let dailyTotals = []
  let hourlyTotal = 0
  for(let x = 0; x < hours.length; x++){
  for(let i = 0; i < cookieStores.length; i++){
   hourlyTotal += cookieStores[i].generatedCookies[x]
  }
  dailyTotals.push(hourlyTotal)
  hourlyTotal = 0
}
  for(let i = 0; i < hours.length; i++){
  let rowElem = document.createElement('td');
  rowElem.textContent = dailyTotals[i]
  tableElem.appendChild(rowElem);
 }
 let allStoresTotal = 0
 for(let i = 0; i < cookieStores.length; i++){
 allStoresTotal += cookieStores[i].cookiesTotal}
 let rowElem = document.createElement('td');
 rowElem.textContent = allStoresTotal
 tableElem.appendChild(rowElem);
};
tableFooterRender()

