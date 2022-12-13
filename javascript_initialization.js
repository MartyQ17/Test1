
window.onload = setInterval(clock,1);                                                      //
window.onload = setInterval(calendary,1);                                                  //
function clock(){                                                                          //
    var h = new Date();                                                                    //
    var hh = h.getHours();                                                                 //
    var mm = h.getMinutes();                                                               //
    var ss = h.getSeconds();                                                               //
    var ms = h.getMilliseconds();                                                          //
    parseInt(hh) < 10 ? hh = "0" + hh : null;                                              //
    parseInt(mm) < 10 ? mm = "0" + mm : null;                                              //
    parseInt(ss) < 10 ? ss = "0" + ss : null;                                              //
    parseInt(ms) < 10 ? ms ="0" + ms : null;                                               //
    document.getElementById("time").innerHTML=hh+":"+mm+":"+ss+":"+ms;                     //
}                                                                                          //
function calendary(){                                                                      //
    var d = new Date();                                                                    //
    var day = d.getDate();                                                                 //
    var month = d.getMonth() + 1;                                                          //
    var year = d.getFullYear();                                                            //
    parseInt(day) < 10 ? day = "0" + day : null;                                           //
    parseInt(month) < 10 ? month = "0" + month: null;                                      //
   document.getElementById("calendary").innerHTML=day+"/"+month+"/"+year;
}





