function changeBook(zeroForm,editorHead,main,btnSave, formEditor,eSave,){
    zeroForm();    
    editorHead.textContent="Добавить книгу";
    main.classList.add("none");
    formEditor.classList.remove("none");
    btnSave.addEventListener("click",addEditorBook);
}

export {changeBook};
