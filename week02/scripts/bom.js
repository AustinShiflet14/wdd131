// heres the revised code
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const li = document.createElement('li');
const deletebutton = document.createElement('button');

deletebutton.textContent = '❌';

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        li.append(deletebutton); 
        list.append(li);

        input.value = ''; 
        input.focus(); 
    } else {
        input.focus();
    }
});

deletebutton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus(); 
});