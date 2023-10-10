
let crop_name= document.getElementById("crop-name");
let buttonx= document.getElementById("butt")
let serch_input= document.querySelector("[name=search]")


// let _name= "Haryana";
var x;
let y;

serch_input.addEventListener("keyup", function(e){
    x=e.currentTarget.value
})

buttonx.addEventListener("click", function(){
    
    crop_name.innerHTML=x;
    // console.log(x);
    const userLogin =  User.findOne({ name: "Haryana" },(error,data)=>{
        if(error){
          console.log(error);
        }else{
          res.json({ message: "found" });
        //   soiltype= data.soil;
          console.log(data);
        }
      });

   

})



function fun(e){
    y=e.id;
    // console.log(e.id);
    
}








