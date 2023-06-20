'use strict'

let globalTotal = 0;

const container = document.getElementById("container");

const hours = ['', "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const article = document.createElement("article");
container.appendChild(article);

const table = document.createElement("table");
article.appendChild(table);
    
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
    this.render();
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
        globalTotal += parseInt(this.cookiesEachHour[i])
    }

    const storeTotal = document.createElement("td");
        storeTotal.textContent = this.totalDailyCookies;
        dataRow.appendChild(storeTotal);
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const LA = new CookieStand('LA', 25, 75, 7.3);

console.log(globalTotal)
//const h4 = document.createElement('h4');
    //h4.textContent = `Total ${this.totalDailyCookies} cookies`;
    //article.appendChild(h4);

//const headerFooter = document.createElement("tr");
//table.appendChild(headerFooter);
    
    //for (let i = 0; i < hours.length; i++) {
        //const Cell = document.createElement("th");
        //Cell.textContent = [i];
        //headerRow.appendChild(Cell);
    //}
    
    //const totalHeader = document.createElement("th");
            //totalHeader.textContent = 'Total';
            //headerRow.appendChild(totalHeader);