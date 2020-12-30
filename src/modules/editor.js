
//функция для редактирования формы
function editorBooks (dataLi) {
    main.classList.add("none");
    main.classList.remove("none");
    editorHead.textContent="Редактирование книги";
    appData.some((elem, item) =>{
      if((dataLi.querySelector("img").getAttribute("src")===elem.img)&&(dataLi.querySelector("h2").textContent===elem.head)){
        formEditor.querySelectorAll("input").forEach((e) => {
            e.value = elem[e.getAttribute("name")];
        });
        eSave = addEditorBook.bind(this, item);
        btnSave.addEventListener("click",eSave, false);
        return elem;
      };
      
    });
};

export {editorBooks};