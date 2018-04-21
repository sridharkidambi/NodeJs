
const users=[{
    id: 101,
    name: 'sridhar',
    age: 35,
    schoolId: 500
},{
    id: 102,
    name: 'kidambi',
    age: 1035,
    schoolId: 501
}];

const grades=[{
schoolId: 500,
marks: 90,
subject: 'english'
},{
schoolId: 500,
marks: 11.0,
subject: 'social'
},
{
    schoolId: 501,
    marks: 50,
    subject: 'maths'
}
];

let getUser = (id) => {
    return new Promise((resolve,reject)=>{
        let user = users.find((user)=>{
            // console.log(user.id);
            // console.log(';;;;;;;;;;;;;;;;;;');
            // console.log(id);
            // console.log(users.id = id);
            return user.id === id;
        });
       if(user){
            resolve(user);
        }else{
            reject(`unable to find the student details   for the id:  ${id}`);
        }

    })
}


let getGrades=(schoolId)=>{
    return new Promise((resolve,reject)=>{
        let gradeList= grades.filter((item)=>{
           return item.schoolId===schoolId;
        })
        if(gradeList.length>0){
            resolve(gradeList);
        }else{
            reject(`unable to find the grade for the school id:  ${schoolId}`);
        }
    });
}

// getUser(101).then((resp)=>{
//     console.log(resp);
// }).catch((err)=>{
//     console.log(err);
// });
// getGrades(500).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e);
// });

let  getstudentsandtheiraverage=(id)=>{
    let user;
getUser(id).then((resp)=>{
        user=resp;
    return getGrades(resp.schoolId);
}

).then((res)=>{
    let average=0;
    average=res.map((item)=> item.marks).reduce((a,b)=>{return a+b;}) /res.length;
    console.log(`The final average is: `+average);
})
.catch((err)=>{
    console.log(err);
});

}

// getstudentsandtheiraverage(101);
// using aysnc and await

let ayncwayofcallig = async (id) => {

    let user =await getUser(id);
    let grades= await getGrades(user.schoolId);
    // console.log(user);
    // console.log(grades);

    let average=0;
    average=grades.map((item)=> item.marks).reduce((a,b)=>{return a+b;}) /grades.length;
    return `The final average is: `+average;
}
console.log('aysnc await way------');
ayncwayofcallig(101).then((res)=>{
    console.log( res);
}).catch((err)=>{
    console.log(err);
});