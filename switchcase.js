function getGrade(marks){
var grade = 90;
switch(true){    // if grade is 80 or greater
    case grade >= 80:
          return "A"
    break;
    case grade >=70:
        return "B";
        break;
        case grade >=60:
            return "c";
            break;
            case grade >=50:
                return "D"
                break;
                case grade >=40:
                    return "E"
                    break;
                    default:
                        return "F"
}
}
console.log(getGrade());
