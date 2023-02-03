var NewKey = document.getElementById("Key");
var NewValue = document.getElementById("Value");
var NewExpired = document.getElementById("Expired");
var listWarapper = document.getElementById("list-wrapper");
var addButton=document.getElementById("add-btn");
var output = document.getElementById("output");

function renderList () {
    let listContent='';
    todoList.forEach(function callback(todo, index)  {
    listContent += `

    <div id="output" class="output bg-white flex items-center justify-center h-14 mt-2 mb-2 rounded-xl p-4 border-black border-2">
        <div class="input-Key w-1/4 ml-3 mr-3">
            <div>${todo.NewKey}</div>
        </div>
        <div class="input-Value w-1/4 ml-3 mr-3">
            <div>${todo.NewValue}</div>
        </div>
        <div class="input-Expired w-fit ml-3 mr-3">
            <div>Set expired</div>
            <input type="button" id="${index}" class="h-10 w-16 bg-red-700 rounded-xl text-cyan-50" value="Delete" onclick="remove('${todo.id}')">
        </div>
    </div>
    `
    });
    //listEle.innerHTML = listContent;
}
addButton.addEventListener("click", () =>{
    renderList();
    let pareDate = NewExpired.value.split("-"); //need to parse Date and get each value

    let cookie = NewKey.value + "=" + NewValue.value + "; expires=" + new Date(pareDate[0], pareDate[1], pareDate[2]).toUTCString();
    console.log(cookie);
    document.cookie = cookie; 
});

(function restoreData_Cookie() {
    let pareCookie=document.cookie.split("; ");
    console.log(pareCookie)
    for(let x of pareCookie){
        NewKey.value=x.split("=")[0];
        NewValue.value=x.split("=")[1];
        renderList();
        console.log(x);
    } //expected a lot of error...
})();

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function deleteRow(currentNode) {
    let parent = currentNode.parentNode;
    deleteCookie(parent.id);            
    parent.remove();
}
