console.log('mail ok')
//Prendo gli elementi dal DOM
const button=document.getElementById('button');
const result=document.getElementById('email-result');
// Array emails
const emailLog= ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com','topolino@gmail.com'];

button.addEventListener('click',function (){
    const mail=document.getElementById('email');
    console.log(mail.value);
    let isValid=false;
    let userEmail='';
    for(let i=0 ; i<emailLog.length ; i++){
        userEmail=emailLog[i];
        if(mail.value === userEmail){
            isValid=true;
        }
 }
    if(isValid === true){
        result.innerText='Email valida';
    }else{
        result.innerText='Email non valida';
    }
    
})
