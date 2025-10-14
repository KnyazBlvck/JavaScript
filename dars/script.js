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
