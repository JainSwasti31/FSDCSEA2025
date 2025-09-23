const student={
    name:"Ram",
    age:20,
    branch:"CSE-A",
    language:[{
        lang1:"Java",
        lang2:"Python"
    },
    {
        database1:"mysql",
        database2:"oracle",
        database3:"Mongodb"
    },
    {
        framework1:"Hibernate",
        framework2:"Spring"
    }]
}

student.college="ABES Engineering College";
console.log(student)
// console.log(student.language[2].framework1);
// console.log(student["language"][0])

delete(student.name)
console.log(student);
