var Visibility = false;
  function SaveTheTasks() {
    var type = document.getElementById("SearchCategoryType").value;
    var todo = document.getElementById("ToDoTxt").value;
  }
  
  if(type == ""){
    alert("Please select a category type!");
    return;
  }
  
  var storage = JSON.parse(localStore.getItem('ToDoList'));
  var lengtharray = storage.length;
  
  storage[lengtharray] = type;
  storage[lengtharray + 1] = todo;
  localStorage.setItem('ToDoList', JSON.stringify(storage));
  type = "";
  loadTasks();
  clearTask();
  
  function loadTasks(){
    var storage = JSON.parse(localStorage.getItem('ToDoList'));
    
    if(!storage){
      storage = [];
      localStorage.setItem('ToDoList', JSON.stringify(storage));
    }
    
    var areaDisplay = document.getElementById("areaDisplay");
    var currentFilter = document.getElementById("SearchCategoryType").value;
    var innerDiv = "";
    
    for(var i = storage.length - 1; i >= 0; i = i - 2){
      if(currentFilter == storage[i-1] || currentFilter == ""){
        var todoColor = 'F7000';
        switch(storage[i-1]){
          case 'Work':
            todoColor = 'F7000';
            break;
          case 'Shopping':
            todoColor = 'F7000';
            break;
          case 'Miscellaneous':
            todoColor = 'F7000';
            break;
          default:
            todoColor = 'F7000';
            break;
        }
        innerDiv += "<insert html/css stuff here.. style background>" + todoColor + "<more design stuff.. add in when design done>"
      }
    }
    
    if(innerDiv != undefined){
      areaDisplay.innerHTML = innerDiv;
    }
    else{
      areaDisplay.innerHTML = "";
    }
  }
  
  function clearTask(){
    var todo = document.getElementById("ToDoTxt");
    todo.value = '';
  }
  
  function removeThing(itemId){
    var storage = JSON.parse(localStorage.getItem('ToDoList'));
    storage.splice(itemId - 1, 2);
    localStorage.setItem('ToDoList', JSON.stringify(storage));
    loadTasks();
  }
  
  onload = function(){
    loadTasks();
    ShowHideForm();
  }
