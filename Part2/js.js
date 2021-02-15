/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log("Lab. Please write the code requested at the //TODO markers.");

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  timestamp: 1515784140,
  iss_position: {
    latitude: "49.2167",
    longitude: "100.5363",
  },
  message: "success",
};

// TODO Extract the latitude value, and log it to the console.
const {
  iss_position: { latitude },
} = iss_location;
console.log(JSON.stringify(latitude));
// TODO Extract the longitude value, and log it to the console.
const {
  iss_position: { longitude },
} = iss_location;
console.log(JSON.stringify(longitude));
/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
  AUD: 1.5417,
  BGN: 1.9558,
  BRL: 3.8959,
  CAD: 1.5194,
};

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787;
console.log(rates);
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
// 1Euro = 1.56AUD
var euro = 100;
for (const key in rates) {
  if (rates.hasOwnProperty(key)) {
    const element = rates[key];
    let val = euro / element;
    console.log(`the exchange rate from object is ${val}`);
    let total = Math.trunc(val / 1.54);
    console.log(
      `equivalent value in Australian Dollars (AUD) is $${total} \n\``
    );
  }
}

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let arr = [];
for (const key in rates) {
  //enumerable
  arr.push(rates[key]);
}
let max = Math.max(...arr);
console.log(max);
// let highest = arr.reduce((acc, el) => {});
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" },
];

// TODO print Gary Oldman's cat's name
let catName = cats_and_owners[1].cat;
console.log(catName);
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let obj = { name: "Taylor Swift", cat: "Meredith" };
cats_and_owners.push(obj);
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach((el) => {
  console.log(el);
});
/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

let nobel_prize_winners_2017 = {
  prizes: [
    //array
    {
      //OBJECT 0
      year: "2017",
      category: "physics",
      laureates: [
        {
          //embedded Object inside array
          id: "941",
          firstname: "Rainer",
          surname: "Weiss",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "2",
        },
        {
          id: "942",
          firstname: "Barry C.",
          surname: "Barish",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
        {
          id: "943",
          firstname: "Kip S.",
          surname: "Thorne",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
      ],
    },
    {
      //OBJECT 1
      year: "2017",
      category: "chemistry",
      laureates: [
        {
          //embedded Object inside array
          id: "944",
          firstname: "Jacques",
          surname: "Dubochet",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "945",
          firstname: "Joachim",
          surname: "Frank",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "946",
          firstname: "Richard",
          surname: "Henderson",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
      ],
    },
    {
      //OBJECT 2
      year: "2017",
      category: "medicine",
      laureates: [
        {
          //embedded Object inside array
          id: "938",
          firstname: "Jeffrey C.",
          surname: "Hall",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "939",
          firstname: "Michael",
          surname: "Rosbash",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "940",
          firstname: "Michael W.",
          surname: "Young",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
      ],
    },
    {
      //OBJECT 3
      year: "2017",
      category: "literature",
      laureates: [
        {
          //embedded Object inside array
          id: "947",
          firstname: "Kazuo",
          surname: "Ishiguro",
          motivation:
            '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
          share: "1",
        },
      ],
    },
    {
      //OBJECT 4
      year: "2017",
      category: "peace",
      laureates: [
        //
        {
          //embedded Object inside array
          //
          id: "948",
          firstname: "International Campaign to Abolish Nuclear Weapons (ICAN)",
          motivation:
            '"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons"',
          share: "1",
          surname: "",
        },
      ],
    },
    {
      //OBJECT 5
      year: "2017",
      category: "economics",
      laureates: [
        {
          //embedded Object inside array
          id: "949",
          firstname: "Richard H.",
          surname: "Thaler",
          motivation: '"for his contributions to behavioural economics"',
          share: "1",
        },
      ],
    },
  ],
};
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let price = nobel_prize_winners_2017.prizes;
console.log(price);
for (i in price) {
  let id_List = price[i].laureates;
  for (let i = 0; i < id_List.length; i++) {
    console.log(id_List[i].id);
  }
}

// price.forEach((el) => {
//   let list = el.laureates;
//   for (const key in list) {
//     if (list.hasOwnProperty(key)) {
//       const element = list[key];

//       console.log(element["id"]);
//     }
//   }
// });

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
for (prop in price) {
  console.log(price[prop].category);
}
// TODO write code to print the total number of prize categories
let total = 0;
for (let i = 0; i < price.length; i++) {
  total += i;
  console.log(price[i].category, total);
}
// TODO write code to count the total number of laureates from 2017.
let count = 0;
for (let i = 0; i < price.length; i++) {
  let lauratesTotal = price[i].laureates;
  let arr = [...lauratesTotal];
  for (prop in arr) {
    count++;
    console.log(arr, count);
  }
}
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
