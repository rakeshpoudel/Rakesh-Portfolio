const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const description= document.getElementById('description');



function showError(input, message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

function checkEmail(input){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(reg.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}
function checkRequired(inputArr){
    inputArr.forEach(function(input){
    if (input.value.trim() === ''){
        showError(input, `${getfieldName(input)} is required`);
    } else{
        showSuccess(input);
    }
});
}


function getfieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) 
{
    e.preventDefault();

    checkRequired([username, email]);
    checkLength(username, 3, 15);
    checkEmail(email);
});

function checkLength(input, min, max){
    if (input.value.length < min){
        showError(
            input,
            `${getfieldName(input)} must be at least ${min} characters`
        );
    }else if (input.value.length > max){
        showError(
            input,
            `${getfieldName(input)} must be less than ${max} characters`
        );
    } else{
        showSuccess(input);
    }
}
