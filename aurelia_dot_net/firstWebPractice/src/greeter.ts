interface Person {
   firstName : string;
   lastName : string;
}

class Student {
   fullName: string;
   constructor(public firstName, public middleInitial, public lastName){
      this.fullName = firstName + " " + middleInitial + " " + lastName;
   }
}
function greeter(person : Person){
   return "hello " + person.firstName;
}

var user = new Student("Rodrigo", "" , "Aguirre");
document.body.innerHTML = greeter(user);