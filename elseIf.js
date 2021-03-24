function getGrade(marks){
    var grade = 90;
    if (grade>=80) {
        return "A";
    }
    else if (grade >=70){
        return "B";
    }
    else if (grade >=60){
        return "c";
    }
    else if (grade >=50){
        return "D";
    }
    else if (grade >=40)
    return "E";
    
    else{
     return "F";
    }
}
console.log(getGrade());

     