// A list of Easy JS code Challenge Solution


// Task 1: 
// Complete the simpleArraySum function below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers
// 
// Hint:    Sample Input                Sample Output
//      [1, 2, 3, 4, 10, 11]                31

function simpleArraySum(ar) {
    return ar.reduce((acc, total) => acc + total)
}


// Task 2:
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// compareTriplets has the following parameter(s):
// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating

// Hint     Sample Input            Sample Output
//          [ 5, 6, 7 ]               [ 1, 1 ]
//          [ 3, 6, 10 ]

function compareTriplets(a, b) {
    let score = [0,0];
    for(let i = 0; i < a.length; i++){
      if( a[i] > b[i]) {
          score[0]++;
      } else if ( a[i] != b[i]) {
          score[1]++;
      }
    }
    return score
}


// Task 3:
// Complete the aVeryBigSum function below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):
// int ar[n]: an array of integers 

// Hint                     Sample Input                                       Sample Output
//  [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]                5000000015

function aVeryBigSum(ar) {
    return ar.reduce((a, b) => a + b)
}