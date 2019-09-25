window.onload=()=>{
    $("#click").click((e)=>{
        console.log("clicked");
        $.get("/click", (res) =>{
            console.log(res);
        })
    });
};