let todos = [
    "Take Jim to the hair salon",
    "Drop off wedding invitation at mailbox",
    "Pick up the cake",
    "Call the caterers",
    "Schedule the flower delivery",
    "Dry Clean the Suits"
  ];
  
  function renderTodoApp() {
   
    let app = document.getElementById("app")
    document.body.append(app)
  
    let headerThree = document.createElement("h3")
    headerThree.innerHTML = "Todo List"
    app.append(headerThree)
  
    let todoList = document.createElement("ul")
    app.append(todoList)
  
    for (let i = 0; i < todos.length; i++) {
      let listedItems = document.createElement("li")
      listedItems.innerHTML = todos[i]
      listedItems.className = "list-item"
      todoList.append(listedItems)
    }
  }
  
  renderTodoApp();