'use sctrict'
const inputName = document.querySelector('#inputName')
const inputSurname = document.querySelector('#inputSurname')
const inputPhone = document.querySelector('#inputPhone')
const submitBtn = document.querySelector('#submitButton')
const submitTr = document.querySelector('#submit-tr')
const table = document.querySelector('#table')

table.addEventListener('keyup', onEnterClick)
submitBtn.addEventListener('click', onButtonClick)
inputName.focus()

function onEnterClick(e){
    if(e.key === 'Enter') submitBtn.click()
}
function onButtonClick(){
    const data = getData()
    clearInputs()
    inputName.focus()
    if(!isDataValid(data)){
        showError()
        return
    }   
    createTableRowWithNewData(data) 
}
function getData(){
    return {
        name: inputName.value,
        surname: inputSurname.value,
        phone: inputPhone.value
    }
}
function isDataValid(data){
    return isNotEmpty(data.name) && isNotEmpty(data.surname) && isNumber(data.phone)
}
function createTableRowWithNewData(data){
    const HTMLTemplate = `
    <tr class='new TR'>
        <td class="main-table__td">
            <span>${data.name}</span>
        </td>
        <td class="main-table__td">
            <span>${data.surname}</span>
        </td>
        <td class="main-table__td">
            <span>${data.phone}</span>
        </td>
    </tr>
    `
    submitTr.insertAdjacentHTML('beforebegin', HTMLTemplate)
}
function clearInputs(){
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = '';
}
function showError(){
    alert('Введенные данные не валидны!')
}
function isNotEmpty (value){
    return value.trim()
}
function isNumber (value){
    return !isNaN(value) && isNotEmpty(value)
}