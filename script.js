let inputData = document.querySelector("input[type='text']");
let array = [];




function addSave(){
        let value = document.getElementById("next").value;
    if(value != ""){
        array.push(value);
        document.getElementById("next").value = "";
        todoApp();
    }};


inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){   
         addSave();
  }
});



document.getElementById("addBtn").addEventListener("click", addSave);


async function rool(){
  try{
      let response = await fetch("https://rn-todo-app-c27d4.firebaseio.com/todos.json");
      let data = await response.json();
     console.log(data);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];    
            array.push(element.title);      
            console.log(element.title);    
        }
    }     
     todoApp();
  }
  catch(e){
      console.log(e);
  }
}

rool();



function todoApp(){
  let container = document.querySelector(".root");
  container.innerHTML = "";
  let i = 1;
  array.forEach(element => {
      let elemTim = document.createElement("div");
      elemTim.id = "press" + i;
      elemTim.className = "pass";
      let elemText = document.createElement("span");
      elemText.innerHTML = element;
      elemTim.appendChild(elemText);
      container.appendChild(elemTim);
      i++;
  });
}

todoApp();


document.getElementById('search').onkeyup = function(){
    document.getElementById('root').innerHTML = '';
    let less = this.value.length;
    if(less>0){
        for(let i=0;i<array.length;i++){
            let sir = array[i].split('').slice(0,less).join('');
            if(sir==this.value){
                document.getElementById('root').innerHTML+=array[i]+'<br/>';
            }
        }
    } /*else {
      document.getElementById('root').innerHTML = todoApp();
    }*/
};


function flexStyle() {
    let style = document.createElement('style');
    style.innerHTML = `
      
      button:hover {
        background-color: green;
        cursor: pointer;
        color: white;
      }
    `;
    document.head.appendChild(style);
  }
  
  flexStyle();

