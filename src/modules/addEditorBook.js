
//добавление+сохранение
function addEditorBook (i,appData, formEditor, main, render, zeroForm,addEditorBook,eSave, btnSave ) {
    event.preventDefault();
    const newObj = readForm(formEditor);
    if (!newObj) {
        alert("Литература не позднее 2017 года или есть пустые поля");
        return;
    };
    if (typeof(i) === "number") appData[i] = newObj;
    else appData.push(newObj);

    main.classList.remove("none");
    formEditor.classList.add("none");
    render  (mainUl,appData)
    zeroForm  (formEditor,main,btnSave,eSave,addEditorBook)  
};

export {addEditorBook};