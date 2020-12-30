

//функция для удаления книги
function deleteBook  (dataLi) {
    appData.some((elem, item) =>{
        if((dataLi.querySelector("img").getAttribute("src")===elem.img)&&(dataLi.querySelector("h2").textContent===elem.head)){
            appData.splice(item,1);
            return elem;
        }
      
    });
    render();
};

export {deleteBook};