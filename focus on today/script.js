console.log('_____working_____');

let checks = document.querySelectorAll('.checks');
checks.forEach( (check)=>{
    check.addEventListener( 'click', (e)=>{
        check.parentElement.classList.toggle('completed')
    } )
} )

// console.log(checks.textCont);
