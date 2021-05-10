function main(){
			
    var name = document.getElementById('name').value;
    var rno = document.getElementById('rno').value;

    var sn1 = document.getElementById('sn1').value;

    var sm1 = document.getElementById('sm1').value;
    
    var sn2 = document.getElementById('sn2').value;
    var sm2 = document.getElementById('sm2').value;
    
    var sn3 = document.getElementById('sn3').value;
    var sm3 = document.getElementById('sm3').value;
    
    var sn4 = document.getElementById('sn4').value;
    var sm4 = document.getElementById('sm4').value;
    
    var sn5 = document.getElementById('sn5').value;
    var sm5 = document.getElementById('sm5').value;
    
    var total = (sm1*1)+(sm2*1)+(sm3*1)+(sm4*1)+(sm5*1);
    
    var percent = (total/500)*100;
    
    percent = percent.toFixed(2);//fix to 2 decimal places
    var percentage = percent+"%";
    if(percent>=90){
        var grade = 'A';
    }else if(percent>=80){
        var grade = 'B';
    }else if(percent>=70){
        var grade = 'C';
    }else if(percent>=60){
        var grade = 'D';
    }else if(percent>=51){
        var grade = 'E';
    }else if(percent<=50){
        var grade = 'F';
    }
    
    
    document.getElementById("namehere").innerHTML=name;
    
    document.getElementById("rnohere").innerHTML=rno;
    
    document.getElementById("sn1here").innerHTML=sn1;
    document.getElementById("sn2here").innerHTML=sn2;
    document.getElementById("sn3here").innerHTML=sn3;
    document.getElementById("sn4here").innerHTML=sn4;
    document.getElementById("sn5here").innerHTML=sn5;
    
    document.getElementById("sm1here").innerHTML=sm1;
    document.getElementById("sm2here").innerHTML=sm2;
    document.getElementById("sm3here").innerHTML=sm3;
    document.getElementById("sm4here").innerHTML=sm4;
    document.getElementById("sm5here").innerHTML=sm5;
    
    document.getElementById("totalhere").innerHTML=total;
    document.getElementById("percentagehere").innerHTML=percentage;
    document.getElementById("gradehere").innerHTML=grade;
}