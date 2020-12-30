
//валидация для года
function yearValid (){
    event.target.value = event.target.value.replace(/\D/,"");

}
    
export {yearValid};