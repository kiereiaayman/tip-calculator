var tip,bill,people;
var total_pp, tip_pp;
var tip, bill, people;
var total_pp, tip_pp;

function result(){
    bill = parseFloat(document.getElementById("bill").value);
    people = parseInt(document.getElementById("people").value);
    console.log(bill,people)
    tip_pp = (bill*tip/100)/people;
    total_pp = (bill/people) + tip_pp;
    console.log(tip_pp,total_pp)
    if(isNaN(tip_pp) && isNaN(total_pp)){
        document.getElementById('tip').innerHTML='$0.00';
        document.getElementById('total').innerHTML='$0.00';
    }else{
        document.getElementById('tip').innerHTML=`$${tip_pp}`;
        document.getElementById('total').innerHTML=`$${total_pp}`;
    }
    
}

function clear(){
    const nodeList = document.querySelectorAll(".grid-item-clicked");
    nodeList.forEach(button=>{
        button.classList.remove('grid-item-clicked')
        button.classList.add('grid-item')
    })
}



document.getElementById("5").addEventListener("click",()=>{
    clear();
    document.getElementById('5').classList.add('grid-item-clicked')
    document.getElementById('custom').value='';
    tip=document.getElementById('5').value
    result()
    console.log(tip)
})
document.getElementById("10").addEventListener("click",()=>{
    clear();
    document.getElementById('10').classList.add('grid-item-clicked')
    document.getElementById('custom').value='';
    tip=document.getElementById('10').value
    result()
    console.log(tip)
})
document.getElementById("15").addEventListener("click",()=>{
    clear();
    document.getElementById('15').classList.add('grid-item-clicked')
    document.getElementById('custom').value='';
    tip=document.getElementById('15').value
    result()
    console.log(tip)
})
document.getElementById("25").addEventListener("click",()=>{
    clear();
    document.getElementById('25').classList.add('grid-item-clicked')
    document.getElementById('custom').value='';
    tip=document.getElementById('25').value
    result()
    console.log(tip)
})
document.getElementById("50").addEventListener("click",()=>{
    clear();
    document.getElementById('50').classList.add('grid-item-clicked')
    document.getElementById('custom').value='';
    tip=document.getElementById('50').value
    result()
    console.log(tip)
})
document.getElementById("custom").addEventListener("input",()=>{
    clear();
    tip=document.getElementById('custom').value
    result()
    console.log(tip)
})

document.getElementById("people").addEventListener('input',result)

document.getElementById("bill").addEventListener('input',result)

function error(){
    if(document.getElementById('people').value == ''){
        document.getElementById('people').classList.remove('people')
        document.getElementById('people').classList.add('people-error')
        document.getElementById('error').classList.remove('message')
        document.getElementById('error').classList.add('message-active')
    }else{
        document.getElementById('people').classList.remove('people-error')
        document.getElementById('people').classList.add('people')
        document.getElementById('error').classList.remove('message-active')
        document.getElementById('error').classList.add('message')
    }
}

document.getElementById("bill").addEventListener('input',error)

document.getElementById('people').addEventListener('input',error)
 

document.getElementById('reset').addEventListener('click',()=>{
    clear();
    document.getElementById('bill').value='';
    document.getElementById('custom').value='';
    document.getElementById('people').value='';
    document.getElementById('total').innerHTML='$0.00';
    document.getElementById('tip').innerHTML='$0.00';

})




