<<<<<<< HEAD
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'ac') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='del'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
=======
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'ac') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='del'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
>>>>>>> ccc15428ea8c62313e3fa1af4d2072b2a139b415
}); 