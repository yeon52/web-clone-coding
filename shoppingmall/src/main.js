
//Fetch이용해서 json 파일 받아오기
function loadItems(){
    return fetch('data/data.json')
    .then(res=> res.json())
    .then(json=>json.items)
}

//받아온 파일을 리스트로 만들어서 innerHTML을 통해 HTML에 동적으로 데이터 넣어주기
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item,items.indexOf(item))).join('');
}

//받은 데이터를 html 리스트로 만들기
function createHTMLString(item, index){
    return `
    <li class="item i${index}">
        <img src="${item.img}" alt="${item.type}" class="item__thumnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
      `;
}

//이렇게 하면 누를때 마다 데이터셋을 새로 계속 만들기 때문에 비효율적일 수 있음.
// function onButtonClick(event, items){
//     const dataset = event.target.dataset;
//     const key = dataset.key;
//     const value = dataset.value;
//     console.log(dataset);
//     if(key == null || value == null){
//         return;
//     }

//     displayItems(items.filter(item => item[key]===value));
// }

//위의 방법 대신 데이터는 한번만 받아오고 경우에 따라 visible, invisible을 통해 필터링 할 수 있음.

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if(key == null || value == null){
        return;
    }
    items.forEach(item => {
        const element = document.querySelector(`.i${items.indexOf(item)}`)
        if (item[key] === value){
            element.classList.remove('invisible');
        } else {
            element.classList.add('invisible');
        }
    });

}


function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click',()=>displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event,items));
}

//main
loadItems()
.then(items=>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log)