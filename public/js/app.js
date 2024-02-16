let btns = document.querySelectorAll("buttons");

for( btn of btns){
    btn.addEventListener(click,()=>{
        console.log("button was clicked");
    });
}