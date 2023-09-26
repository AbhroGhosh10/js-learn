const marvelHeros=["Thor","Ironman","Spiderman"];
const dcHeros=["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3])
// console.log(marvelHeros[3][1]);

// const allHero=marvelHeros.concat(dcHeros);
// console.log(allHero);

const all_heros=[...marvelHeros,...dcHeros]
// console.log(all_heros);

// const another_array=[1,2,3,[4,5,6],7,[,6,7,[,78,9]]]
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("abhro"))
// console.log(Array.from("abhro"));
// console.log(Array.from({name:"abhro"}));//interesting thing 

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));