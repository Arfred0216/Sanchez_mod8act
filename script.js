let year;

function name(){
         let fullName = prompt("Please enter your full name:");
                

                document.getElementById("fname").textContent = fullName;
        }

   name();

    function UserN(){
         let username = prompt("Please enter your username:");
                

                document.getElementById("username").innerHTML = username;
        }

   UserN();

function gender(){
	let gender;
        let getGender = confirm("What is your gender" + '\n' + "Press OK if you are male" + '\n' +  "Cancel if you are female");

        // If the user agrees to share their personal information
        if (getGender) {
            gender = "M";

            alert("Your profile gender is set to MALE");

        }
        else {
        gender = "F";
        alert("Your profile gender is set to FEMALE");
        }

       document.getElementById("gender").innerHTML = gender;



    }

    gender();

    function DS(){
     description = prompt("Please type a brief description of yourself");
                
	   document.getElementById("desc").innerHTML = description;

    }

    DS();



  

   function YR(){
         year = prompt("Please enter your Birthyear:");
                
                document.getElementById("year").innerHTML = year;
        }

   YR();

   

   function Ag(){
    
                let currentYear = 2023;
                let age = currentYear - year;
                document.getElementById("age").innerHTML = age;
        }

   Ag();




  function Pp(){


        let Change = confirm("Do you want to use a custom profile picture?");

        // If the user agrees to share their personal information
        if (Change) {
            let pic = prompt("Please enter the file namee of the picture: (Ex. wow.jpg)");
            
            document.getElementById("ppic").src = pic;

        }

         }
        Pp();



