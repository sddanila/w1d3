var data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  };

// TASK 1
// List everyone and for each of them, list the names of who they follow and who follows them

// function whoFollows(data){
//     for(var user in data){
//         var person = data[user];
//         var name = data[user].name;
//         var followed = [];

//         for (var i = 0; i < person.follows.length; i++){
//             followed.push(data[person.follows[i]].name);
//         }
//         var followers = followed.join();
//         console.log(name + " follows: " + followers);
//     }


//     // var followedBy = [];
//     // for (var i = 0; i < person.follows.length; i++){
//     //     if (person){
//     //         followedBy.push(person[1]name);
//     //     }
//     // }

//     // var followees = followedBy.join();
// }
// whoFollows(data);

// TASK 2
// Identify who follows the most people
function maxFollows(data){
    var numberOfFollows = [];
    for(var user in data){
        var person = data[user];
        numberOfFollows.push(person.follows.length);
    }
    var max = Math.max(numberOfFollows);
    return person.name + "has the most followers: " + max;
}
console.log(maxFollows(data));


// TASK 3
// Identify who has the most followers

// TASK 4
// Identify who has the most followers over 30

// TASK 5
// Identify who follows the most people over 30

// TASK 6
// List those who follow someone that doesn't follow them back

// TASK 7
//   List everyone and their reach (sum of # of followers and # of followers of followers)