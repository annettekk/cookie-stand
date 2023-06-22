'use strict'

//let globalTotal = 0;

const storeForm = document.getElementById("addStoreForm");

const container = document.getElementById("container");



const hours = ['', "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

let cookieStands = [];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//const article = document.createElement("article");
//container.appendChild(article);

//const table = document.createElement("table");
//article.appendChild(table);
    
const headerRow = document.createElement("tr");
table.appendChild(headerRow);

for (let i = 0; i < hours.length; i++) {
    const Cell = document.createElement("th");
    Cell.textContent = hours[i];
    headerRow.appendChild(Cell);
}

const totalHeader = document.createElement("th");
        totalHeader.textContent = 'Total';
        headerRow.appendChild(totalHeader);

function CookieStand(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.totalDailyCookies = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    //this.render();
    this.pushStands = function() {
      cookieStands.push(this)
    }  
    this.pushStands();
    

  }

CookieStand.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
      }
  };

CookieStand.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
      }
}

CookieStand.prototype.render = function () {
    this.calcCustomersEachHour()
    this.calcCookiesEachHour()

    const dataRow = document.createElement("tr");
    table.appendChild(dataRow);

    const storeNameD = document.createElement("td");
        storeNameD.textContent = this.storeName;
        dataRow.appendChild(storeNameD);

        for (let i = 1; i < hours.length; i++) {
        const Data = document.createElement("td");
        Data.textContent = this.cookiesEachHour[i];
        dataRow.appendChild(Data);
        //globalTotal += parseInt(this.cookiesEachHour[i])
    }

    const storeTotal = document.createElement("td");
        storeTotal.textContent = this.totalDailyCookies;
        dataRow.appendChild(storeTotal);

    //cookieStands.push(this)
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const la = new CookieStand('LA', 25, 75, 7.3);
const cambridge = new CookieStand('Cambridge', 20, 40, 5.1);
const protvino = new CookieStand('Protvino', 5, 15, 2);
const batavia = new CookieStand('Batavia', 1, 10, 4.4)

//console.log(seattle)
//console.log(cookieStands)
//console.log(typeof(cookieStands))
//console.log(typeof(this))



addStoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(event);
  const storeName = event.target.storeName.value;
  const minCustPerHour = event.target.minCustPerHour.value;
  const maxCustPerHour = event.target.maxCustPerHour.value;
  const avgCookiesPerHour = event.target.avgCookiesPerHour.value;

  const newStore = new CookieStand(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour);
  console.log(newStore);
  console.log(cookieStands);

  deleterow('table');

  newStore.render()
  //rendercookieStands();

  const headerFooter = document.createElement("tr");
table.appendChild(headerFooter);
    
const globalTotalHeader = document.createElement("th");
globalTotalHeader.textContent = 'Total';
headerFooter.appendChild(globalTotalHeader);   


for (let i = 1; i < hours.length; i++) {
    const Cell = document.createElement("th");
    let hourTotal = 0;
    for (let j = 0; j < cookieStands.length; j++) {
      hourTotal += cookieStands[j].cookiesEachHour[i];
      Cell.textContent = hourTotal;
      }
    headerFooter.appendChild(Cell);
    }
  
const globalestTotalHeader = document.createElement("th");
let granTotal = 0;
for (let j = 0; j < cookieStands.length; j++) {
  granTotal += cookieStands[j].totalDailyCookies;
}
globalestTotalHeader.textContent = granTotal;
headerFooter.appendChild(globalestTotalHeader);

  addStoreForm.reset();
});

function rendercookieStands() {
  for (let i = 0; i < cookieStands.length; i++) {
    cookieStands[i].render();
  }
}

function deleterow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  table.deleteRow(rowCount -1);
}

rendercookieStands();
console.log(cookieStands)

const headerFooter = document.createElement("tr");
table.appendChild(headerFooter);
    
const globalTotalHeader = document.createElement("th");
globalTotalHeader.textContent = 'Total';
headerFooter.appendChild(globalTotalHeader);   


for (let i = 1; i < hours.length; i++) {
    const Cell = document.createElement("th");
    let hourTotal = 0;
    for (let j = 0; j < cookieStands.length; j++) {
      hourTotal += cookieStands[j].cookiesEachHour[i];
      Cell.textContent = hourTotal;
      }
    headerFooter.appendChild(Cell);
    }
  
const globalestTotalHeader = document.createElement("th");
let granTotal = 0;
for (let j = 0; j < cookieStands.length; j++) {
  granTotal += cookieStands[j].totalDailyCookies;
}
globalestTotalHeader.textContent = granTotal;
headerFooter.appendChild(globalestTotalHeader);