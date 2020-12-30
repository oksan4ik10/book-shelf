"use strict";
import {yearValid} from "./modules/yearValid";
import {readForm} from "./modules/readForm";
import {zeroForm} from "./modules/zeroForm";
import {deleteBook} from "./modules/deleteBook";
import {render} from "./modules/render";



import {editorBooks} from "./modules/editor";

import {addEditorBook} from "./modules/addEditorBook";



const btnAdd = document.getElementById("add"),
        main = document.querySelector("main"),
        formEditor = document.querySelector("form"),
        editorHead = document.getElementById("editor-head"),
        btnZ = document.getElementById("btn-z"),
        btnSave = document.getElementById("btn-save"),
        yearValue = formEditor.querySelector("input[name=year]"),
        mainUl = document.querySelector("main ul");

let eSave; //вспомогательная переменная для удаления обработчика события сохранения


const appData = [{
            img:"./img/Digital-Harry-Potter-1.jpg",
            head:"Гарри Поттер и философский камень",
            author:"Джоан Роулинг",
            year:"1997",
        },
        {
            img:"./img/Digital-Harry-Potter-2.jpg",
            head:"Гарри Поттер и Тайная комната",
            author:"Джоан Роулинг",
            year:"1998",
        }
];  

yearValue.addEventListener("input", ()=>{
    yearValid();
});

render(mainUl, appData);



//замена формы "Добавить книгу"        
btnAdd.addEventListener("click", ()=>{
    zeroForm(formEditor,main,btnSave);    
    editorHead.textContent="Добавить книгу";
    main.classList.add("none");
    formEditor.classList.remove("none");

    btnSave.addEventListener("click",addEditorBook);
});

btnZ.addEventListener("click", (event)=>{
    event.preventDefault();
    zeroForm();

})