const BaseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".drop select");
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swap = document.querySelector("#swap-icon");



for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "INR"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "USD"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change" ,(evt)=>{
        updateFlag(evt.target);
    });
}

swap.addEventListener("click", () => {
    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    // update flags for both after swapping
    updateFlag(fromCurr);
    updateFlag(toCurr);
});

const updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amtValue = Number(amount.value);
    console.log(amtValue);
    if(amtValue === "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";
    }
    //console.log(fromCurr.value,toCurr.value);
    const URL = `${BaseUrl}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let from = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();
    let excRate = data[from][to];
    let finalAmount = parseFloat((amtValue * excRate).toFixed(4));
    //console.log(`${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

const updateFlag =(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchangeRate();

});


window.addEventListener("load", () => {
    updateExchangeRate();
});

