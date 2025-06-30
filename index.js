var index = 0
var elem = []
var select1 = document.getElementById("element_1");
var select2 = document.getElementById("element_2");
var select3 = document.getElementById("element_3");
var select4 = document.getElementById("element_4");


var analyst = document.getElementById("analyst");
var element1 = ""
var element2 = ""
var element3 = ""
var element4 = ""

var elem_data = []
class ElementalChart {
    constructor() {
        this.damageTable = new Map();
    }

    // Đăng ký quan hệ giữa nguyên tố
    setRelation(attacker, defender, multiplier) {
        const key = `${attacker}->${defender}`;
        this.damageTable.set(key, multiplier);
    }
    saveId(elem_name) {
        this.damageTable.set(elem_name, index);
        index = index + 1
    }
    getId(elem_name) {
        return this.damageTable.get(elem_name)
    }
    // Tính hệ số sát thương
    getMultiplier(attacker, defender) {
        const key = `${attacker}->${defender}`;
        return this.damageTable.get(key); // Mặc định 1.0 nếu không có trong bảng
    }
}

// 🛠️ Tạo bảng nguyên tố
const elementTable = new ElementalChart();
function addElem(elem_name, resist_table) {
    elem.push(elem_name)
    resist_table.forEach(elem => {
        elementTable.setRelation(elem_name, elem.name, elem.multi)
    });
    elem_data.push({ name: elem_name, table: resist_table })
    elementTable.saveId(elem_name)
}
// console.log(elem_data)
addElem("Normal", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 0.5 }, { name: "Ghost", multi: 0 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])
addElem("Fire", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 0.5 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 2 }, { name: "Ice", multi: 2 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 2 },
    { name: "Rock", multi: 0.5 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 0.5 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 2 }, { name: "Fairy", multi: 1 },
])

addElem("Water", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 2 },
    { name: "Water", multi: 0.5 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 0.5 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 2 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 2 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 0.5 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 1 }, { name: "Fairy", multi: 1 },
])
addElem("Electric", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 2 }, { name: "Electric", multi: 0.5 },
    { name: "Grass", multi: 0.5 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 0 }, { name: "Fly", multi: 2 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 0.5 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 1 }, { name: "Fairy", multi: 1 },
])

addElem("Grass", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 2 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 0.5 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 0.5 },
    { name: "Ground", multi: 2 }, { name: "Fly", multi: 0.5 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 0.5 },
    { name: "Rock", multi: 2 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 0.5 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

addElem("Ice", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 0.5 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 2 }, { name: "Ice", multi: 0.5 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 2 }, { name: "Fly", multi: 2 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 2 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

addElem("Fighting", [
    { name: "Normal", multi: 2 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 2 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 0.5 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 0.5 },
    { name: "Psychic", multi: 0.5 }, { name: "Bug", multi: 0.5 },
    { name: "Rock", multi: 2 }, { name: "Ghost", multi: 0 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 2 },
    { name: "Steel", multi: 2 }, { name: "Fairy", multi: 0.5 },
])

addElem("Poison", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 2 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 0.5 },
    { name: "Ground", multi: 0.5 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 0.5 }, { name: "Ghost", multi: 0.5 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0 }, { name: "Fairy", multi: 2 },
])

addElem("Ground", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 2 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 2 },
    { name: "Grass", multi: 0.5 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 2 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 0 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 0.5 },
    { name: "Rock", multi: 2 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 2 }, { name: "Fairy", multi: 1 },
])

addElem("Fly", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 0.5 },
    { name: "Grass", multi: 2 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 2 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 2 },
    { name: "Rock", multi: 0.5 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

addElem("Psychic", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 2 }, { name: "Poison", multi: 2 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 0.5 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 0 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

addElem("Bug", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 2 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 0.5 }, { name: "Poison", multi: 0.5 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 0.5 },
    { name: "Psychic", multi: 2 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 0.5 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 2 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 0.5 },
])

addElem("Rock", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 2 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 2 },
    { name: "Fighting", multi: 0.5 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 0.5 }, { name: "Fly", multi: 2 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 2 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

addElem("Ghost", [
    { name: "Normal", multi: 0 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 2 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 2 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 0.5 },
    { name: "Steel", multi: 1 }, { name: "Fairy", multi: 1 },
])

addElem("Dragon", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 2 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 0 },
])

addElem("Dark", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 1 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 0.5 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 2 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 2 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 0.5 },
    { name: "Steel", multi: 1 }, { name: "Fairy", multi: 0.5 },
])

addElem("Steel", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 0.5 }, { name: "Electric", multi: 0.5 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 2 },
    { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 2 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 1 }, { name: "Dark", multi: 1 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 2 },
])

addElem("Fairy", [
    { name: "Normal", multi: 1 }, { name: "Fire", multi: 0.5 },
    { name: "Water", multi: 1 }, { name: "Electric", multi: 1 },
    { name: "Grass", multi: 1 }, { name: "Ice", multi: 1 },
    { name: "Fighting", multi: 2 }, { name: "Poison", multi: 0.5 },
    { name: "Ground", multi: 1 }, { name: "Fly", multi: 1 },
    { name: "Psychic", multi: 1 }, { name: "Bug", multi: 1 },
    { name: "Rock", multi: 1 }, { name: "Ghost", multi: 1 },
    { name: "Dragon", multi: 2 }, { name: "Dark", multi: 2 },
    { name: "Steel", multi: 0.5 }, { name: "Fairy", multi: 1 },
])

// addElem("test", [
//     { name: "Normal", multi: 1 },   { name: "Fire", multi: 1 },
//     { name: "Water", multi: 1 },    { name: "Electric", multi: 1 },
//     { name: "Grass", multi: 1 },    { name: "Ice", multi: 1 },
//     { name: "Fighting", multi: 1 }, { name: "Poison", multi: 1 },
//     { name: "Ground", multi: 1 },   { name: "Fly", multi: 1 },
//     { name: "Psychic", multi: 1 },  { name: "Bug", multi: 1 },
//     { name: "Rock", multi: 1 },   { name: "Ghost", multi: 1 },
//     { name: "Dragon", multi: 1 },   { name: "Dark", multi: 1 },
//     { name: "Steel", multi: 1 },  { name: "Fairy", multi: 1 },
// ])

// console.log("Normal vs Normal:", elementTable.getMultiplier("Normal", "Normal"))
// console.log("Normal vs Rock:", elementTable.getMultiplier("Normal", "Rock"))

elem.forEach(elem => {
    let option = document.createElement("option");
    option.value = elem;
    option.textContent = elem;
    select1.appendChild(option);
    let option2 = document.createElement("option");
    option2.value = elem;
    option2.textContent = elem;
    select2.appendChild(option2);
    let option3 = document.createElement("option");
    option3.value = elem;
    option3.textContent = elem;
    select3.appendChild(option3);
    let option4 = document.createElement("option");
    option4.value = elem;
    option4.textContent = elem;
    select4.appendChild(option4);
});

select1.addEventListener("change", function () {
    element1 = select1.value
    console.log(select1.value)
});
select2.addEventListener("change", function () {
    element2 = select2.value
    console.log(select2.value)
});
select3.addEventListener("change", function () {
    element3 = select3.value
    console.log(select3.value)
});
select4.addEventListener("change", function () {
    element4 = select4.value
    console.log(select4.value)
});
analyst.addEventListener("click", function () {
    let id1 = elementTable.getId(element1)
    let id2 = elementTable.getId(element2)
    let id3 = elementTable.getId(element3)
    let id4 = elementTable.getId(element4)
    let row_th = elem_data[0].table
    // const table = document.createElement("table")
    // const thead = document.createElement("thead")
    // const rowth = document.createElement("tr")
    // row_th.forEach(el => {
    //     let th = document.createElement("th")
    //     th.textContent = el.name
    //     rowth.appendChild(th)
    // });
    // thead.appendChild(rowth)
    // table.appendChild(thead);
    // content.appendChild(table)
    console.log(elem_data[id1])
    console.log(elem_data[id2])
    console.log(elem_data[id3])
    console.log(elem_data[id4])
    const title = document.getElementById("analyst_title");
    title.innerText = "Phân tích:"
    const content = document.getElementById("analyst_content");
    content.innerText = ""
    //ATTACK 1
    const div1 = document.createElement("div")
    const attack_title1 = document.createElement("h3")
    attack_title1.innerText = `Tấn công bằng : ${elem_data[id1].name}`
    div1.appendChild(attack_title1)
    const atk_res1 = document.createElement("p")
    atk_res1.innerText = `${elem_data[id3].name}: ${elementTable.getMultiplier(elem_data[id1].name, elem_data[id3].name)}`
    div1.appendChild(atk_res1)
    const atk_res2 = document.createElement("p")
    atk_res2.innerText = `${elem_data[id4].name}: ${elementTable.getMultiplier(elem_data[id1].name, elem_data[id4].name)}`
    div1.appendChild(atk_res2)
    const atk_result1 = document.createElement("p")
    atk_result1.innerText = `Kết quả: ${elementTable.getMultiplier(elem_data[id1].name, elem_data[id3].name) * elementTable.getMultiplier(elem_data[id1].name, elem_data[id4].name)}`
    div1.appendChild(atk_result1)
    content.appendChild(div1)
    //ATTACK 2
    const div2 = document.createElement("div")
    const attack_title2 = document.createElement("h3")
    attack_title2.innerText = `Tấn công bằng : ${elem_data[id2].name}`
    div2.appendChild(attack_title2)
    const atk_res3 = document.createElement("p")
    atk_res3.innerText = `${elem_data[id3].name}: ${elementTable.getMultiplier(elem_data[id2].name, elem_data[id3].name)}`
    div2.appendChild(atk_res3)
    const atk_res4 = document.createElement("p")
    atk_res4.innerText = `${elem_data[id4].name}: ${elementTable.getMultiplier(elem_data[id2].name, elem_data[id4].name)}`
    div2.appendChild(atk_res4)
    const atk_result2 = document.createElement("p")
    atk_result2.innerText = `Kết quả: ${elementTable.getMultiplier(elem_data[id2].name, elem_data[id3].name) * elementTable.getMultiplier(elem_data[id2].name, elem_data[id4].name)}`
    div2.appendChild(atk_result2)
    content.appendChild(div2)
    //DEFEND 1
    const div3 = document.createElement("div")
    const defend1 = document.createElement("h3")
    defend1.innerText = `Phòng thủ với : ${elem_data[id3].name}`
    div3.appendChild(defend1)
    const def_res1 = document.createElement("p")
    def_res1.innerText = `${elem_data[id1].name}: ${elementTable.getMultiplier(elem_data[id3].name, elem_data[id1].name)}`
    div3.appendChild(def_res1)
    const def_res2 = document.createElement("p")
    def_res2.innerText = `${elem_data[id2].name}: ${elementTable.getMultiplier(elem_data[id3].name, elem_data[id2].name)}`
    div3.appendChild(def_res2)
    const def_result1 = document.createElement("p")
    def_result1.innerText = `Kết quả: ${elementTable.getMultiplier(elem_data[id3].name, elem_data[id1].name) * elementTable.getMultiplier(elem_data[id3].name, elem_data[id2].name)}`
    div3.appendChild(def_result1)
    content.appendChild(div3)
    //DEFEND 2
    const div4 = document.createElement("div")
    const defend2 = document.createElement("h3")
    defend2.innerText = `Phòng thủ với : ${elem_data[id4].name}`
    div4.appendChild(defend2)
    const def_res3 = document.createElement("p")
    def_res3.innerText = `${elem_data[id1].name}: ${elementTable.getMultiplier(elem_data[id4].name, elem_data[id1].name)}`
    div4.appendChild(def_res3)
    const def_res4 = document.createElement("p")
    def_res4.innerText = `${elem_data[id2].name}: ${elementTable.getMultiplier(elem_data[id4].name, elem_data[id2].name)}`
    div4.appendChild(def_res4)
    const def_result2 = document.createElement("p")
    def_result2.innerText = `Kết quả: ${elementTable.getMultiplier(elem_data[id4].name, elem_data[id1].name) * elementTable.getMultiplier(elem_data[id4].name, elem_data[id2].name)}`
    div4.appendChild(def_result2)
    content.appendChild(div4)
});
