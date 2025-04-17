
let cnt =0;

function func(){

    cnt++;
    console.log(cnt);
    setTimeout(func, 1000);
    
}
func(cnt);


