//чтение данных из формы - done
function readForm (form) {
    let body={},
    test = true;
    const formData = new FormData(form);
        formData.forEach((val, key) => {
            if(key === "year" || val==="" ){
                if ( (+val>2017) || val==="" ){
                    test = false;
                    return test;
                }
            }
            body[key] = val;
    });
    if (test) return body;
    return test;
 };

 export {readForm};