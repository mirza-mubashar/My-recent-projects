

document.querySelector('form').addEventListener( 'submit', function(event) {
    event.preventDefault();

    let studentName = document.querySelector('#student-name').value;
    let studentAge = document.querySelector('#student-age').value;
    let messageBox = document.querySelector('#submit-message');


    console.log(studentName);
    

    let successNoti = `Dear student ${studentName}! a verification link along with addmission form has bezen sent to you'r email addresss. Check you'r gmail account.`;
    let teenAgeNoti = `Dear student ${studentName}! you entered you'r age as ${studentAge} years. In accordance to xyz University regulations you are not elligible for addmission.`;
    

    if (studentAge <= 18 ){
        messageBox.innerHTML = teenAgeNoti;
        messageBox.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        messageBox.style.color = 'white';
        messageBox.style.margin = '15px 0';
        messageBox.style.padding = '20px';

    }else{
        messageBox.innerHTML = successNoti;
        messageBox.style.backgroundColor = 'lightgreen';
        messageBox.style.color = 'white';
        messageBox.style.margin = '15px 0';
        messageBox.style.padding = '20px';
    }
    
} );
