const list = [
    {
        id: "조*채"   ,
        university :  "부산여대"   ,
        department : "호텔외식조리학과"
    },
    {
        id: "백*서"   ,
        university :  "부산여대"   ,
        department : "호텔외식조리학과"
    },
    {
        id: "최*연"   ,
        university :  "부산여대"   ,
        department : "사회복지학과"
    },
    {
        id: "박*연"   ,
        university :  "동의과학대"   ,
        department : "응급구조과"
    },
    {
        id: "박*진"   ,
        university :  "동의대"   ,
        department : "보육가정상담학과"
    },
    {
        id: "박*은"   ,
        university :  "동의과학대"   ,
        department : "간호학과"
    },
    {
        id: "김*은"   ,
        university :  "동의대"   ,
        department : "국제관광경영학과"
    },
    {
        id: "이*민"   ,
        university :  "동의대"   ,
        department : "보육가정상담학과"
    },
    {
        id: "박*지"   ,
        university :  "동의과학대"   ,
        department : "방사선과"
    },
    {
        id: "손*환"   ,
        university :  "동의과학대"   ,
        department : "공간정보지적과"
    },
]



const rank = [0,1,2,3,4,5,6,7,8,9];
rand = 0
num = 0
names = ""
universitys = ""
departments = ""
function go_random(){
    let a = rank.length;
    rand = Math.floor(Math.random()*a); //0~9
    num = rank[rand];

    names = list[num].id;
    universitys = list[num].university;
    departments = list[num].department;
    console.log(list[num].id);
    rank.splice(rank.indexOf(num),1);
}

const ones = document.querySelector("#one");
const twos = document.querySelector("#two");
const threes = document.querySelector("#three");

const fsts = document.querySelector("#one_st")

const ssts = document.querySelector("#two_ed")
const ssts1 = document.querySelector("#two_ed1")

const tsts = document.querySelector("#three_rd")
const tsts1 = document.querySelector("#three_rd1")
const tsts2 = document.querySelector("#three_rd2")

stop1=true

function one_event(event){
    event.preventDefault();
    clearInterval(past1);
    go_random();
    fsts.innerText = `${names}\n${universitys}\n${departments}`;
}

function two_event(event){
    event.preventDefault();
    go_random();
    console.log(ssts.value)
    if(ssts.value == undefined){
        clearInterval(past2);
        ssts.innerText = `${names}\n${universitys}\n${departments}`;
        ssts.value=true
        
    }else{
        clearInterval(past2_1);
        ssts1.innerText = `${names}\n${universitys}\n${departments}`;
    }
}

function three_event(event){
    event.preventDefault();
    go_random();
    if(tsts.value == undefined){
        clearInterval(past3);
        tsts.innerText = `${names}\n${universitys}\n${departments}`;
        tsts.value=true
    }else if(tsts1.value == undefined){
        clearInterval(past3_1);
        tsts1.innerText = `${names}\n${universitys}\n${departments}`;
        tsts1.value=true
    }else{
        clearInterval(past3_2);
        tsts2.innerText = `${names}\n${universitys}\n${departments}`;
    }
}



randomId=""
randomUniversity=""
randomDepartment=""
getNumber=0

function getRandom1(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    fsts.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom2(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom2_1(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts1.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_1(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts1.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_2(getNumber){
    getNumber = Math.floor(Math.random()*10);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts2.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

// function deleyOne(event){
//     event.preventDefault();
//     console.log(list[getNumber].id)
//     setInterval(getRandom,50);
// }

let past1 = setInterval(getRandom1,50);
let past2 = setInterval(getRandom2,50);
let past2_1 = setInterval(getRandom2_1,50);
let past3 = setInterval(getRandom3,50);
let past3_1 = setInterval(getRandom3_1,50);
let past3_2 = setInterval(getRandom3_2,50);



ones.addEventListener("submit", one_event);
twos.addEventListener("submit", two_event);
threes.addEventListener("submit", three_event);
