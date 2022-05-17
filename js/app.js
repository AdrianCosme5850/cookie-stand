'use strict';
let citySection = document.getElementById('cityTotals')
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesTotal: 0,
  dailyGeneratedCustomers: function() {
    this.hourlyCustomer = randomCustomer(this.minCust, this.maxCust, this.avgCookie)
    console.log(this.hourlyCustomer)
    this.cookiesTotal += this.hourlyCustomer[1]
    return this.hourlyCustomer
  },
  render: function(){
    let uListElem = document.createElement('ul')
    uListElem.textContent = this.name 
    citySection.appendChild(uListElem)
    for(let i = 0; i < 15; i++){
    let listItem = document.createElement('li')
    listItem.textContent = hours[i] + ': ' + this.dailyGeneratedCustomers()[1] + ' cookies sold.'
    uListElem.appendChild(listItem)
    }
    let totalListElem = document.createElement('li')
    totalListElem.textContent = 'Cookies Total: ' + this.cookiesTotal
    uListElem.appendChild(totalListElem)
   }
}
function randomCustomer(min, max, avgCook) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let generatedCustomer = Math.floor(Math.random() * (max - min) + min);
  let generatedCookies = Math.ceil(generatedCustomer * avgCook)
  return [generatedCustomer, generatedCookies]
}
seattle.dailyGeneratedCustomers()
seattle.render()

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesTotal: 0,
  dailyGeneratedCustomers: function() {
    this.hourlyCustomer = randomCustomer(this.minCust, this.maxCust, this.avgCookie)
    console.log(this.hourlyCustomer)
    this.cookiesTotal += this.hourlyCustomer[1]
    return this.hourlyCustomer
  },
  render: function(){
    let uListElem = document.createElement('ul')
    uListElem.textContent = this.name 
    citySection.appendChild(uListElem)
    for(let i = 0; i < 15; i++){
    let listItem = document.createElement('li')
    listItem.textContent =  hours[i] + ': ' + this.dailyGeneratedCustomers()[1] + ' cookies sold.'
    uListElem.appendChild(listItem)
    }
    let totalListElem = document.createElement('li')
    totalListElem.textContent = 'Cookies Total: ' + this.cookiesTotal
    uListElem.appendChild(totalListElem)
   }
}
tokyo.dailyGeneratedCustomers()
tokyo.render()

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesTotal: 0,
  dailyGeneratedCustomers: function() {
    this.hourlyCustomer = randomCustomer(this.minCust, this.maxCust, this.avgCookie)
    console.log(this.hourlyCustomer)
    this.cookiesTotal += this.hourlyCustomer[1]
    return this.hourlyCustomer
  },
  render: function(){
    let uListElem = document.createElement('ul')
    uListElem.textContent = this.name 
    citySection.appendChild(uListElem)
    for(let i = 0; i < 15; i++){
    let listItem = document.createElement('li')
    listItem.textContent =  hours[i] + ': ' + this.dailyGeneratedCustomers()[1] + ' cookies sold.'
    uListElem.appendChild(listItem)
    }
    let totalListElem = document.createElement('li')
    totalListElem.textContent = 'Cookies Total: ' + this.cookiesTotal
    uListElem.appendChild(totalListElem)
   }
}
dubai.dailyGeneratedCustomers()
dubai.render()

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesTotal: 0,
  dailyGeneratedCustomers: function() {
    this.hourlyCustomer = randomCustomer(this.minCust, this.maxCust, this.avgCookie)
    console.log(this.hourlyCustomer)
    this.cookiesTotal += this.hourlyCustomer[1]
    return this.hourlyCustomer
  },
  render: function(){
    let uListElem = document.createElement('ul')
    uListElem.textContent = this.name 
    citySection.appendChild(uListElem)
    for(let i = 0; i < 15; i++){
    let listItem = document.createElement('li')
    listItem.textContent =  hours[i] + ': ' + this.dailyGeneratedCustomers()[1] + ' cookies sold.'
    uListElem.appendChild(listItem)
    }
    let totalListElem = document.createElement('li')
    totalListElem.textContent = 'Cookies Total: ' + this.cookiesTotal
    uListElem.appendChild(totalListElem)
   }
}
paris.dailyGeneratedCustomers()
paris.render()

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesTotal: 0,
  dailyGeneratedCustomers: function() {
    this.hourlyCustomer = randomCustomer(this.minCust, this.maxCust, this.avgCookie)
    console.log(this.hourlyCustomer)
    this.cookiesTotal += this.hourlyCustomer[1]
    return this.hourlyCustomer
  },
  render: function(){
    let uListElem = document.createElement('ul')
    uListElem.textContent = this.name 
    citySection.appendChild(uListElem)
    for(let i = 0; i < 15; i++){
    let listItem = document.createElement('li')
    listItem.textContent =  hours[i] + ': ' + this.dailyGeneratedCustomers()[1] + ' cookies sold.'
    uListElem.appendChild(listItem)
    }
    let totalListElem = document.createElement('li')
    totalListElem.textContent = 'Cookies Total: ' + this.cookiesTotal
    uListElem.appendChild(totalListElem)
   }
}
lima.dailyGeneratedCustomers()
lima.render()