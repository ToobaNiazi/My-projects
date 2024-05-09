let student = [
    {
        name : 'tooba',
        age : 25 ,
        reg_num : 1777,
        course : 'python programming',
        fav_pro : ['js','py','php','java'],
        marks : {
            html : 60,
            css : 70,
            js : 80,
            py : 50,
        }

    },
      {
        
        name : 'ali',
        age : 26 ,
        reg_num : 7877,
        course : 'python programming',
        fav_pro : ['js','py','php','java'],
        marks : {
            html : 60,
            css : 70,
            js : 80,
             py : 50, 
        }       
    },
    {
                
        name : 'ahmad',
        age : 25 ,
        reg_num : 7775,
        course : 'python programming',
        fav_pro : ['js','py','php','java'],
        marks : {
            html : 60,
            css : 70,
            js : 80,
           py : 50, 
    }     
    }
]

//task perform
//First step
console.log(student[2].age);
console.log(student[2].reg_num);

//second step
console.log(student[2].fav_pro[0]);
console.log(student[2].fav_pro[3]);
//third step
console.log(student[1].marks.html);
