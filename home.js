var echipa1=0;


var echipa2=0;
var victorii1 = 0;
var victorii2 = 0;
var egal1= 0;
var egal2 = 0;
var lose1 = 0;
var lose2 = 0;

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function probs(){
    //loc1
    if(document.getElementById("p51").checked){
        echipa1=1000;
    }
    else if(document.getElementById("m51").checked){
        echipa1=750;
    }
    else if(document.getElementById("u51").checked){
        echipa1=500;
    }

    //loc2
    if(document.getElementById("p52").checked){
        echipa2=1000;
    }
    else if(document.getElementById("m52").checked){
        echipa2=750;
    }
    else if(document.getElementById("u52").checked){
        echipa2=500;
    }
        document.getElementById("ne1").innerHTML = String(document.getElementById("numeechipa").value);
        //meci11
        if(document.getElementById("v1").checked){
            var meci1 = echipa1 + 100;
            victorii1++;
            
        
        }else if(document.getElementById("e1").checked){
            var meci1 = echipa1;
            egal1++;
      
        }else if(document.getElementById("l1").checked){
            var meci1 = echipa1-100;
            lose1++;
        

        }
        //meci21
        if(document.getElementById("v2").checked){
            var meci2 = meci1 + 125;
            victorii1++;
  
       
        
        }else if(document.getElementById("e2").checked){
            var meci2 = meci1;
            egal1++;
     
        }else if(document.getElementById("l2").checked){
            var meci2 = meci1-150;
            lose1++;
           
          
        }
        //meci31
        if(document.getElementById("v3").checked){
            var meci3 = meci2 + 150;
            victorii1++;
    
       
        
        }else if(document.getElementById("e3").checked){
            var meci3 = meci2;
            egal1++;
            
        }else if(document.getElementById("l3").checked){
            var meci3 = echipa1-200;
            lose1++;
        

        }
        //meci41
        if(document.getElementById("v4").checked){
            var meci4 = meci3 + 175;
            victorii1++;
            
       
        
        }else if(document.getElementById("e4").checked){
            var meci4 = meci3;
            egal1++;
           
        }else if(document.getElementById("l4").checked){
            var meci4 = meci3-250;
            lose1++;
    

        }
        //meci51
        if(document.getElementById("v5").checked){
            var meci5 = meci4 + 200;
            victorii1++;
   
       
        
        }else if(document.getElementById("e5").checked){
            var meci5 = meci4;
            egal1++;;
      
        }else if(document.getElementById("l5").checked){
            var meci5 = meci4-300;
            lose1++;
       

        }
        console.log("victorii1: " + victorii1);
        console.log("egal1: " + egal1);
        console.log("lose1: " + lose1);
        console.log("coeficient echipa: " + meci5);

        var probechipa1v = victorii1/5;
        var probechipa1e = egal1/5;
        var probechipa1l = lose1/5;
        
        var sezon1v = document.getElementById("vr").value;
        var sezon1e = document.getElementById("er").value;
        var sezon1l = document.getElementById("lr").value;
        var cota = document.getElementById("cota1").value;

        var score5 = (meci5*probechipa1v)+(meci5*probechipa1e)+(meci5*probechipa1l);  
        var meciurijucate = sezon1v+ sezon1e+sezon1l;      
        
        var probsez1v=sezon1v/meciurijucate;
        var probsez1e=sezon1e/meciurijucate;
        var probsez1l=sezon1l/meciurijucate;

        var scoresez = (meci5*probsez1v)+(meci5*probsez1e)+(meci5*probsez1l);

         var scorfinal = (score5+scoresez)/cota;
         
         console.log("scor echipa 1: "+ scorfinal.toFixed(4));

        //echipa2
        document.getElementById("ne2").innerHTML = String(document.getElementById("numeechipa1").value);
        //meci11
        if(document.getElementById("v12").checked){
            var meci12 = echipa2 + 100;
            victorii2++;
            
        
        }else if(document.getElementById("e12").checked){
            var meci12 = echipa2;
            egal2++;
      
        }else if(document.getElementById("l12").checked){
            var meci12 = echipa2-100;
            lose2++;
        

        }
        //meci21
        if(document.getElementById("v22").checked){
            var meci22 = meci12 + 125;
            victorii2++;
  
       
        
        }else if(document.getElementById("e22").checked){
            var meci22 = meci12;
            egal2++;
     
        }else if(document.getElementById("l22").checked){
            var meci22 = meci12-150;
            lose2++;
           
          
        }
        //meci31
        if(document.getElementById("v32").checked){
            var meci32 = meci22 + 150;
            victorii2++;
    
       
        
        }else if(document.getElementById("e32").checked){
            var meci32 = meci22;
            egal2++;
            
        }else if(document.getElementById("l32").checked){
            var meci32 = meci22-200;
            lose2++;
        

        }
        //meci41
        if(document.getElementById("v42").checked){
            var meci42 = meci32 + 175;
            victorii2++;
            
       
        
        }else if(document.getElementById("e42").checked){
            var meci42 = meci32;
            egal2++;
           
        }else if(document.getElementById("l42").checked){
            var meci42 = meci32-250;
            lose2++;
    

        }
        //meci51
        if(document.getElementById("v52").checked){
            var meci52 = meci42 + 200;
            victorii2++;
   
       
        
        }else if(document.getElementById("e52").checked){
            var meci52 = meci42;
            egal2++;;
      
        }else if(document.getElementById("l52").checked){
            var meci52 = meci42-300;
            lose2++;
       

        }
        console.log("victorii1: " + victorii2);
        console.log("egal1: " + egal2);
        console.log("lose1: " + lose2);
        console.log("coeficient echipa: " + meci52);

        var probechipa2v = victorii2/5;
        var probechipa2e = egal2/5;
        var probechipa2l = lose2/5;
        
        var sezon2v = document.getElementById("vr2").value;
        var sezon2e = document.getElementById("er2").value;
        var sezon2l = document.getElementById("lr2").value;
        var cota2 = document.getElementById("cota2").value;

        var score52 = (meci52*probechipa2v)+(meci52*probechipa2e)+(meci5*probechipa2l);  
        var meciurijucate2 = sezon2v + sezon2e + sezon2l;      
        
        var probsez2v=sezon2v/meciurijucate2;
        var probsez2e=sezon2e/meciurijucate2;
        var probsez2l=sezon2l/meciurijucate2;

        var scoresez2 = (meci5*probsez2v)+(meci5*probsez2e)+(meci5*probsez2l);

         var scorfinal2 = (score52+scoresez2)/cota2;
         
         console.log("scor echipa 2: "+ scorfinal2.toFixed(4));
       


    document.getElementById("vi1").innerHTML=victorii1;
    document.getElementById("eg1").innerHTML=egal1;
    document.getElementById("in1").innerHTML=lose1;
    document.getElementById("vi2").innerHTML=victorii2;
    document.getElementById("eg2").innerHTML=egal2;
    document.getElementById("in2").innerHTML=lose2;

    document.getElementById("scor1").innerHTML=scorfinal.toFixed(2);
    document.getElementById("scor2").innerHTML=scorfinal2.toFixed(2);
    
    

        if( scorfinal>scorfinal2){
            document.getElementById("echip").innerHTML=document.getElementById("numeechipa").value;
            var diferenta = scorfinal-scorfinal2;
            if(diferenta >= 150){
                document.getElementById("risc").innerHTML="Mic";
               document.getElementById("risc").style.color="green";
                
            }
            else if(diferenta >= 51 && diferenta<=149){
                document.getElementById("risc").innerHTML= "Mediu";
                document.getElementById("risc").style.color="yellow";
            }
            else if(diferenta <= 50){
                document.getElementById("risc").innerHTML="Mare";
                document.getElementById("risc").style.color="red";
            }
        }
        else if(scorfinal===scorfinal2){
            document.getElementById("echip").innerHTML="Niciuna";
            document.getElementById("risc").innerHTML= "Mare";
            document.getElementById("risc").style.color="red";
        }

        else if(scorfinal<scorfinal2){
            document.getElementById("echip").innerHTML=document.getElementById("numeechipa1").value;
            var diferenta = scorfinal2-scorfinal;
            if(diferenta >= 150){
                document.getElementById("risc").innerHTML= "Mic";
                document.getElementById("risc").style.color="green";
            }
            else if(diferenta >= 51 && diferenta<=149){
                document.getElementById("risc").innerHTML= "Mediu";
                document.getElementById("risc").style.color="yellow";
            }
            else if(diferenta <= 50){
                document.getElementById("risc").innerHTML= "Mare";
                document.getElementById("risc").style.color="red";
            }
        }


        
        $("#rezz").fadeIn(1200);
        $('.echipa1').fadeOut(200);
        $('.echipa').fadeOut(200);
        $('.butoane').fadeOut(200);
        
        

}
