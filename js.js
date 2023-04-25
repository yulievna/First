const plus = document.getElementById("+")
const minus = document.getElementById("-")
const num = document.getElementById("id")
let plusInterval
let minInterval
plus.addEventListener("mousedown",
()=>{
    plusInterval = setInterval(()=>{
        num.innerText =  parseInt(num.innerText) + 1 
    },150)
})
plus.addEventListener("mouseup",
()=>{
    clearInterval(plusInterval)
})
minus.addEventListener("click",
()=>{
    num.innerText =  parseInt(num.innerText) - 1 
})
minus.addEventListener("mousedown",
()=>{
    minInterval = setInterval(()=>{
        num.innerText =  parseInt(num.innerText) - 1 
    },150)
})
console.log(12);

minus.addEventListener("mouseup",
()=>{
    clearInterval(minInterval)
})
plus.addEventListener("click",
()=>{
    num.innerText =  parseInt(num.innerText) + 1 
})

const sort = document.getElementById("sort")
const inf = document.getElementById("inf")
const res = document.getElementById("res")
sort.addEventListener("click",
()=>{
    let needAge = parseInt(num.innerText)
    let massiv = inf.value.split("\n")
    massiv.forEach(person => {
        let personAge = parseInt(person.split("-")[1])
        if(needAge == personAge){
            res.value = res.value + person + "\n"
        }
        
    });
})
