'use sctrict'
const inputName = document.querySelector('#inputName')
const inpuSurname = document.querySelector('#inpuSurname')
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
    if(!isDataValid(data)){
        showError()
        clearInputs()
        inputName.focus()
        return
    }   
    createTableRowWithNewData(data) 
    clearInputs()
    inputName.focus()
}
function getData(){
    return {
        name: inputName.value,
        surname: inpuSurname.value,
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
    inpuSurname.value = '';
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