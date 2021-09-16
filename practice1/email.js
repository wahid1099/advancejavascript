const emailverify=()=>{
    const emailtext=document.getElementById('email');
    const errormsg=document.getElementById('email-msg');
    const emailvalue=emailtext.value;
    const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailvalue.match(re)){
        errormsg.style.color='green';
        errormsg.innerText='Success';
    }else{
        errormsg.style.color='red';
        errormsg.innerText='Failed';
    }
}