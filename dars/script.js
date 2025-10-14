// console.log("Hello world!");
// const Hello = document.querySelector("#salom");
// const Container = document.querySelector("#div");
// ------------------ text content almashtirish
// Hello.textContent = "Assalomu alaykum";
// ------------------ HTML div ga js da uzgartirish kiritish
// Container.innerHTML = `
// <div>salom hammaga bolalar</div>
// `;
// ------------------ HTML filega div yaratish
// const newDiv = document.createElement("div");
// ------------------ classListlar
// newDiv.classList = "container";
// newDiv.classList.remove("container");
// newDiv.classList.add("another-class");
// newDiv.classList.toggle("visible");
// newDiv.classList.toggle("visible" < 10);
// newDiv.classList.add("foo","bar", "baz")
// newDiv.classList.remove("foo","bar", "baz")

// const Div = document.createElement("div");
// const data=["class", "elements"]
// Div.classList.add(...data)
// Div.classList.replace("foo", "bar");
// console.log(Div);



// ------------------ First elementChild()

// const list=document.getElementById('list')

// list.firstElementChild.textContent="Birinchi listni o'zgartiramiz"

// ------------------ className

// const element = document.getElementById("item");
// element.className = element.className === "active" ? "inactive" : "active";
// console.log(element);

// ------------------ scrollLeft

// const button = document.getElementById("slide");

// button.onclick = () => {
//   document.getElementById("container").scrollLeft += 20;
// };

// ------------------ closest()

// const element= document.getElementById("div-03")

// console.log(element.closest('#div-02'));
// console.log(element.closest('div div'));
// console.log(element.closest('article > div'));
// console.log(element.closest(':not(div)'));

// ------------------ Matches()

// const birds=document.querySelectorAll('li')
// for(const bird of birds){
//   if(bird.matches('.endangered')){
//     console.log(`The ${bird.textContent} is endangered`);
//   }
// }



// --------------------- prepend()

// let div = document.createElement("div");
// let p = document.createElement("p");
// let span = document.createElement("span");
// div.append(p);
// div.prepend(span);

// console.log(div.childNodes); // NodeList [ <span>, <p> ]

// --------------------------- requestFullScreen()

// const video = document.querySelector("video");

// document.addEventListener("keydown", (event) => {
//   // Note that "F" is case-sensitive (uppercase):
//   if (event.key === "Enter" || event.key === "F") {
//     // Check if we're in fullscreen mode
//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//       return;
//     }
//     // Otherwise enter fullscreen mode
//     video.requestFullscreen().catch((err) => {
//       console.error(`Error enabling fullscreen: ${err.message}`);
//     });
//   }
// });
// ----------------------- replaceData()
// const span = document.querySelector("span");
// const textNode = span.nextSibling;

// textNode.replaceData(2, 4, "replace");

// ------------------------- value
// const element = document.querySelector("label");
// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// const attribute = element.attributes[0];
// result.value = attribute.value;

// button.addEventListener("click", () => {
//   attribute.value = "a new value";
//   result.value = attribute.value;
// });



// const data = [
//   { id: 1, name: "Telefon", price: 350, inStock: true },
//   { id: 2, name: "Noutbuk", price: 1200, inStock: true },
//   { id: 3, name: "Planshet", price: 600, inStock: false },
//   { id: 4, name: "Monitor", price: 450, inStock: true },
//   { id: 5, name: "Klaviatura", price: 50, inStock: true },
//   { id: 6, name: "Sichqoncha", price: 25, inStock: false },
//   { id: 7, name: "Printer", price: 300, inStock: true },
//   { id: 8, name: "Kamera", price: 800, inStock: true },
//   { id: 9, name: "Quloqchin", price: 70, inStock: false },
//   { id: 10, name: "Smart Watch", price: 200, inStock: true },
//   { id: 11, name: "Televizor", price: 1500, inStock: true },
//   { id: 12, name: "Router", price: 90, inStock: true },
//   { id: 13, name: "Proyektor", price: 1000, inStock: false },
//   { id: 14, name: "Konditsioner", price: 2000, inStock: true },
//   { id: 15, name: "Gaming Chair", price: 400, inStock: true },
// ];

// const Container = document.querySelector("#div");
// let html = "";
// data.map((sad, i) => {
//   html += `
// <div>
// <h2>${sad.name}</h2>
// <p>${sad.price}</p>
// </div>
//   `;
// });
// Container.innerHTML = html;

// const objData = [
//   "Salom hammaga",
//   2025,
//   true,
//   { id: 1, name: "Telefon", price: 350 },
//   { id: 2, name: "Noutbuk", price: 1200 },
//   "JavaScript oson!",
//   { id: 3, name: "Planshet", price: 600 },
//   false,
//   { id: 4, name: "Monitor", price: 450 },
//   99,
// ];

// const ContainerDiv = document.querySelector("#container");

// let datalar = "";
// objData.map((item) => {
//   if (typeof item === "object" && item !== null) {
//     datalar += `
//       <div>
//         <h2>${item.name}</h2>
//         <p>Narxi: ${item.price} $</p>
//       </div>
//     `;
//   } else {
//     datalar += `<p>${item}</p>`;
//   }
// });

// ContainerDiv.innerHTML = datalar;

// const yosh =prompt("Yoshingizni kiriting")

// if(yosh >= 18){
//   console.log("Sizga bunaqa kinolar kurish mumkin");

// }else{
//   console.log("Siz hali yoshbolasiz iltimos multifilm kuring");

// }

// const bola=19

// const xabar=bola>=18 ? "kirish mumkin" : "kirish mumkin emas"

// console.log(xabar);

// if(Infinity){
//   console.log(true);

// }else{
//   console.log(false);

// }

// let email="Guest@gmail.com"
// let parol = "123456789"

// let  EmailPrompt=prompt("Iltimos saytga kirish uchun mavjud profilengizni kiriting")

// let passwordPrompt=prompt("iltimos parolingizni tasdiqlang")

// if(email === EmailPrompt && parol===passwordPrompt ){
//   alert("xush kelibsiz")
// }else{
//   alert("Oooops! nimadur xato ketdi qayta urining")
// }

// console.log(5 === "5");
// console.log(true == 1);
// console.log(true || false);

// console.log("somithing");
// let num = 123
// let bool=true


// console.log(typeof String(num));
// console.log(typeof String(bool));
// console.log(typeof num.toString());
// console.log(typeof bool.toString());

// let userInfo = parseInt(prompt("hafta kunini kiriting"))

// switch (userInfo) {
//   case 1:
//     alert("dushanba");
//     break;
//   case 2:
//     alert("seshanba");
//     break;
//   case 3:
//     alert("chorshanba");
//     break;
//   case 4:
//     alert("payshanba");
//     break;
//   case 5:
//     alert("juma");
//     break;
//   case 6:
//     alert("shanba");
//     break;
//   case 7:
//     alert("yakshanba");
//     break;

//   default:
//     break;
// }

// funcsion()
// function expression
// const Hello = () => {};
// function hellos() {}
// const greet = function () {};

// const expenseTracker = {
//   balance: 0,
//   expenses: [],

//   addExpense(description, amount) {
//     const expense = {
//       id: crypto.randomUUID(),
//       description,
//       amount,
//       date: new Date().toLocaleTimeString(),
//     };

//     this.expenses.push(expense);
//     this.balance -= amount;
//     console.log(`${description} uchun ${amount} so'm qo'shildi`);
//   },

//   showExpenses() {
//     console.log("Xarajatlar ro'yxati:");

//     for (const expense of this.expenses) {
//       console.log(
//         `${expense.id}: ${expense.description} - ${expense.amount} so'm | vaqt: ${expense.date}`
//       );
//     }
//   },

//   getTotalExpenses() {
//     let total = 0;
//     for (const el of this.expenses) {
//       total += el.amount;
//     }
//     console.log(`\nUmumiy xarajatingiz: ${total} so'm`);
//     console.log(`Sizning joriy balansingiz: ${this.balance} so'm`);
//   },

//   getBeggestExpense() {
//     if (this.expenses.length === 0) return console.log("Xarajatlar yo‘q.");

//     let maxExpense = this.expenses[0];
//     for (const el of this.expenses) {
//       if (el.amount > maxExpense.amount) {
//         maxExpense = el;
//       }
//     }

//     console.log(
//       `Eng katta xarajat: ${maxExpense.description} - ${maxExpense.amount} so'm`
//     );
//   },
// };
