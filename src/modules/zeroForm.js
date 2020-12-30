 //обнуление данных с формы после нажатия на кнопки
 

 function zeroForm  (formEditor,main,btnSave,eSave,addEditorBook) {
    formEditor.querySelectorAll("input").forEach((item) => {
        item.value="";
    });
    main.classList.remove("none");
    formEditor.classList.add("none");
    btnSave.removeEventListener("click", eSave);
    btnSave.removeEventListener("click", addEditorBook);
 };

 export {zeroForm};