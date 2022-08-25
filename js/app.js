//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
let fullName = 'Murad Nərimanlı Tərlan'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
let myName = "Hikmet Xidirzade Rasim ";
let letterSpace = myName.split("")
console.log(letterSpace);
//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
let name = myName.slice(0, 6);
console.log(name);
let surname = myName.slice(7, 16)
console.log(surname);
let fatherName = myName.slice(17, 22)
console.log(fatherName);
let changeArr = [surname, name, fatherName]
console.log(changeArr);
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin

console.log(changeArr.join());




let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

var count = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element == 5) {
        count++
    }
}
console.log(`5 reqemi ${count} qeder tekrarlanib`);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

const current = 0;
let sum = arr.reduce((a, b) =>
    a + b,
    current
)
console.log("cem ", sum);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun




//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

let max = Math.max(...arr)
console.log("en boyuk", max);

let countOfMax = 0;
arr.forEach(element => {
    if (element == 7) {
        countOfMax++
    }
});
console.log(`max element ${countOfMax} defe tekrarlanib`);

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

let randomElememt = Math.floor((Math.random() * 10) + 1);

console.log("randoom", randomElememt);

// for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (el == randomElememt) {
//         console.log("eded tekrarlanib");
//     } else {
//         console.log("indi yox");
//     }

// }



if (arr.includes(randomElememt)) {
    console.log("var");
} else {
    console.log("yoxdur");
}



//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

let myNameLetters = "Hikmet";

let spread = myNameLetters.split("")
console.log(spread);

let mycount = 0;

for (let i = 0; i < spread.length; i++) {
    const element = spread[i];
    mycount++
}
console.log(` adimdaki reqem sayi ${mycount} dir`);


var sameNumber = arr.some(element => {
    if (element == mycount) {
        console.log("eynisi var");
    }
})
console.log();

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let findDvided = arr.find(element =>
    element % 3 == 2,

)
console.log(` hemin eded ${findDvided} -dir`)

let indexOfFive = arr.indexOf(findDvided)

console.log(` ededin indexi ${indexOfFive} - dir`);
//11) arraydaki en boyuk reqemin ilk indexini tapin
var biggest = 0;
arr.reduce(function findBiggest(prev, current) {
    biggest = prev < current ? prev : current
})
console.log(`en boyuk eded ${biggest} dir`);
//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin


function countArr(arr, element) {
    var counts = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            counts.push(i);
        }
        //    console.log(counts);
    }
    return counts;
}
console.log("4 un indexleri ", countArr(arr, 4));




//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

let indexes = countArr(arr, 5)
let maxIndex = indexes.reduce((a, b) => {
    return Math.max(a, b)
})
let minIndex = indexes.reduce((a, b) => {
    return Math.min(a, b)
})
console.log("5 in max indexi", maxIndex);
console.log("5 in min indexi", minIndex);


//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin


let fil = arr.filter(el => el > 2)
console.log(fil);
let diffArr = Math.abs(arr.length - fil.length)
console.log("ferq", diffArr);

//15) 7 reqeminin indexleri cemini tapin.

var sumIndex = 0;

arr.forEach((el, i) => {
    if (el == 7) {
        sumIndex += i
        console.log(i);
    }
})
console.log(`7 nin indexinin reqemleri cemi ${sumIndex}`);

/////////////////////////////////////////////////////
let arr2 = [{
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
    {
        name: 'salmelekimsalam',
        key: 14
    }
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

let newArr = arr2.filter((el) => el.name.startsWith("t") && el.name.includes("t"));
console.log(newArr);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let newArrTT = arr2.filter((el) => el.name.startsWith("t") && el.name.endsWith("t"));
console.log(newArrTT);
let countOfT = 0;
for (let i = 0; i < newArrTT.length; i++) {
    if (newArrTT[i] != null) {
        countOfT++
    }
}
console.log("  obyektlerin sayi", countOfT);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let newArrT = arr2.filter((el) => el.name.startsWith("t") && el.name.endsWith("t"));
let cem = 0;
newArrT.forEach(e => {
    cem += e.key
})
console.log("t ile baslayib bitenlerin key cemi", cem);
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
let newArrI = arr2.filter((el) => el.name.endsWith("t"));

let changeNameWSuperdev = newArrI.filter(e => {
    if (newArrI != null) {
        e.name = "superDev"
        return e
    }
})
console.log("yeni name -li arr", changeNameWSuperdev);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

///// array deyisib deye name mecbur '0superDev' olanlarin keyi tapdim////
var key;
var biggestNum = 0;

function getLengthOfLongestElement(arr2) {
    for (var i = 0; i < arr2.length; i++) {
        const el = arr2[i].name
        var element = arr2[i]

        if (el.length > biggestNum) {
            biggestNum = el.length
        }
        if (element.name.length == biggestNum) {
            key = element.key
        }
    }
    console.log(` key  ${key} dur`);
}
getLengthOfLongestElement(arr2);
// 25 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let indexL;
let pow;

function getLengthOfLongestElementInec(arr2) {
    for (var i = 0; i < arr2.length; i++) {
        const el = arr2[i].name
        if (el.length > biggestNum) {
            biggestNum = el.length
        }
    }
    arr2.map((e) => {
        if (e.name.length == biggestNum) {
            indexL = arr2.indexOf(e)
            pow = Math.pow(indexL, 2)
            console.log(` indexin kvadrati  ${pow} dur`);
        }
    })

}
getLengthOfLongestElementInec(arr2);

// 26 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

var arrLenthFour = arr2.filter(
    (arL) => arL.name.length == 4
);
console.log("name nin lengthi 4 olan ", arrLenthFour);

// 27 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
let obj = []

var n = arr2.map((ar) => {
    if (ar.key == key) {
        obj.push(ar.name)
    }
})
console.log('hemin name:', obj.join(), "dir");


// 28 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.


arr2.forEach((e, i) => {
    let word = e.name.split('')
    let increase = 0
    word.forEach((letter) => {
        if (letter.includes("l")) {
            increase++
            if (increase == 2) {
                console.log("obyektler", word);
                console.log("indexler", i);
            }
        }
    })
})
// 29 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


arr2.forEach((e) => {
    let words = e.name.split('')
    let increase = 0
    words.forEach((letter) => {
        if (letter.includes("t")){
            increase++
            if (increase == 2) {
             console.log(words); 
             console.log(e.key);                
            }
        }
    })
})
// 30 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// hamsi yenidi :) //