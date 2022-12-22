

    
   
    // let names = [
    //     "Elmar",
    //     "Akwin",
    //     "Rasul",
    //     "Qafar",
    //     "Narmin",
    //     "Nargiz",
    //     "Elmira",
    //     "Rafael",
    //     "Maqsud",
    //     "Sevindik",
    //     "Kanan",
    //     "Kamil",
    //     "Adil",
    //     "Saida",
    //     "Farhad",
    //     "Oruc",
    //     "Zaur"
    // ]
   
    // document.write("Group: 630.20")
    // document.write("<ol>")
    //     for( var i = 0; i < names.length; i++){
    //         document.write("<li>"+ names.sort().reverse()[i] +"</li>") 
    //     }
    // document.write("</ol>")
    

    
    const fruits = ["Banana", "Orange", "Apple"];


    document.getElementById("demo").innerHTML = fruits;

    function myFunction() {
        var dd = document.getElementById("dd").value
        fruits.push(dd);
        
        document.getElementById("demo").innerHTML = fruits;
       
    }