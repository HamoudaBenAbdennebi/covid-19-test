var ck = document.querySelectorAll(".c")
var temp = document.getElementById("temp").value
const submited = () =>{
    var pts = 0;
    for(let i = 0 ; i < ck.length ; i++){
        if(ck[i].checked){
            pts += 5
        }
    }
    if(temp<38){
        pts += 0
    }
    else if(temp>38 && temp<42){
        pts += 10
    }else{
        pts += 20
    }
    if(pts>30){
        var state= "vous presenter les symptomes du CODID-19" 
    }
    else if(pts<30 && pts>10){
        var state= "vous presenter un risque de comptamination au CODID-19"
    }else{
        var state = "vous n'avez aucun symptomes liée au CODID-19"
    }
    alert(state)
}

