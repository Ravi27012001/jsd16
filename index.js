console.log("working...");
const StudentPrototypes = {
    calcAge(){
        console.log(2022-this.bYear);
    },
    initialise(fname,lname,bYear){
this.fname = fname;
this.lname = lname;
this.bYear = bYear;
}
}

const honey = Object.create(StudentPrototypes);
console.log(honey);
honey.initialise("honey","tambi",1995);
console.log(honey);
honey.calcAge();


const personPrototype = Object.create(StudentPrototypes);
console.log(personPrototype);
personPrototype.initialiseOne = function(fname,lname,bYear,course){
    StudentPrototypes.initialise.call(this, fname, lname,bYear);
    this.course = course ;
    // this.fname = fname ;
    // this.lname = lname ;
    // this.bYear = bYear ;
    // this.course = course ;

}
personPrototype.introduce = function(){
    console.log(`My name is ${this.fname} ${this.lname} and my course is ${this.course}`);

}
const jay = Object.create(personPrototype);
console.log(jay);
jay.initialiseOne("jay","dubey",1986,"CSE");
console.log(jay);
jay.calcAge();
jay.introduce();


console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);

// Closures - closures is not something that we create manually or expliticity .it happens automatically in certain situation which we need to recognise.. 
// Closures make a function remember all the variable that existed at the function birthlace initially.
// any function always has access to the variable envourenment of the execution context in which the function was created.

const ticketbooking = function(){
    let passengerCount = 0;
    console.log( "yes ");
    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`);

    }
}
 const bookie = ticketbooking();
bookie();
bookie();
 bookie();
 console.dir(bookie);