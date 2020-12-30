//рендер

function render  (mainUl,appData) {
    mainUl.textContent = "";

    appData.forEach((elem) =>{
        const li = document.createElement("li");
        li.innerHTML=`<img src=${elem.img} alt="Harry Potter 2">
                    <div class="about-book">
                        <h2>${elem.head}</h2>
                        <p>${elem.author}</p>
                        <p>${elem.year}</p>
                    </div>
                    <div class="change">
                        <button class="btn-editor">Редактировать</button>
                        <button class="btn-delete">Удалить</button>
                    </div>`
        mainUl.append(li);
    });  
};

export {render};