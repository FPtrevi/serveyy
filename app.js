const list = [
    {
        name: "조현채"   ,
        university :  "부산여대"   ,
        department : "호텔외식조리학과"
    },
    {
        name: "백인서"   ,
        university :  "부산여대"   ,
        department : "호텔외식조리학과"
    },
    {
        name: "최수연"   ,
        university :  "부산여대"   ,
        department : "사회복지학과"
    },
    {
        name: "박소연"   ,
        university :  "동의과학대"   ,
        department : "응급구조과"
    },
    {
        name: "박유진"   ,
        university :  "동의대"   ,
        department : "보육가정상담학과"
    },
    {
        name: "박지은"   ,
        university :  "동의과학대"   ,
        department : "간호학과"
    },
    {
        name: "김상은"   ,
        university :  "동의대"   ,
        department : "국제관광경영학과"
    },
    {
        name: "이창민"   ,
        university :  "동의대"   ,
        department : "보육가정상담학과"
    },
    {
        name: "박민지"   ,
        university :  "동의과학대"   ,
        department : "방사선과"
    },
    {
        name: "손용환"   ,
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
    names = list[num].name
    universitys = list[num].university
    departments = list[num].department
    console.log(list[num].name);
    rank.splice(rank.indexOf(num),1);
}

// if(){
//     rank.push(rand)
// }

// console.log(rand)

// console.log(list[rand].name, list[rand].department)

const ones = document.querySelector("#one");
const twos = document.querySelector("#two");
const threes = document.querySelector("#three");

const fsts = document.querySelector("#one_st")

const ssts = document.querySelector("#two_ed")
const ssts1 = document.querySelector("#two_ed1")

const tsts = document.querySelector("#three_rd")
const tsts1 = document.querySelector("#three_rd1")
const tsts2 = document.querySelector("#three_rd2")

const check = ""


function one_event(event){
    event.preventDefault();
    go_random();
    fsts.innerText = `${names}\n${universitys}\n${departments}`;
}

function two_event(event){
    event.preventDefault();
    go_random();
    console.log(ssts.value)
    if(ssts.value == undefined){
        ssts.innerText = `${names}\n${universitys}\n${departments}`;
        ssts.value=true
    }else{
        ssts1.innerText = `${names}\n${universitys}\n${departments}`;
    }
}

function three_event(event){
    event.preventDefault();
    go_random();
    if(tsts.value == undefined){
        tsts.innerText = `${names}\n${universitys}\n${departments}`;
        tsts.value=true
    }else if(tsts1.value == undefined){
        tsts1.innerText = `${names}\n${universitys}\n${departments}`;
        tsts1.value=true
    }else{
        tsts2.innerText = `${names}\n${universitys}\n${departments}`;
    }
}

ones.addEventListener("submit", one_event);
twos.addEventListener("submit", two_event);
threes.addEventListener("submit", three_event);