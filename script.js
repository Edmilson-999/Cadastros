localStorageKey = "to-do-list-ea"

function newTask()
{
   let input = document.getElementById("input-new-task")

   // validation
   if(!input.value)
   {
    alert("Digite algo para inserir em sua lista")
   }

   else
   {
        // increment to localStorage
    let values = JSON.parse(localSotarage.getItem(localStorageKey) || "[]")
    values.push({
        name: input.value
    })
    localStorage.setItem(localStorageKey,JSON.stringfy(values))
    showValues()
   }
}

function showValues()
{
    let values = JSON.parse(localSotarage.getItem(localStorageKey) || "[]")
    let list = document.getElementById("to-do-list")
    list.innerHTML = ""
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += <li>${values[i]["name"]}</li>   
    } 
}