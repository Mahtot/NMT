//Returing fibonacci numbers
// console.log(0,1)

//   for(let temp=0, i=1,j=1;j<30; temp=i, i=j,j=temp+i)
//             console.log(j);

// var temp=0, i=1, j=temp+i;
// while (j<30){
//     console.log(j);
//     temp=i;
//     i=j;
//     j=temp+i;
// }
//console.log(~0000)
// function launch() {
//     return new Promise(function(resolve, reject) {
//     console.log("Lift off!");
//     setTimeout(function() {
//     resolve(console.log("In orbit!"));
//     }, 2*1000); // a very fast rocket indeed
//     });
//     }
// const array=['I','wish','you','were','here','I','missed','you!']
// function countdown(sec){
//     return new Promise(function(resolve,reject){
//         for(let i=sec;i>=0;i--){
//             setTimeout(function(){
//                 if(i===13) {
//                     return reject(new Error("DEFINITELY NOT COUNTING THAT"));
//                 }
//                 if(i>0) console.log(i===0?"GO!":`${array[sec-i]}--`)
//                 else{
//                resolve(console.log("GO!")
//                 );}
//             },(sec-i)*1000);
//         }
//     })
// }
// let p=countdown(array.length);
// p.then(launch)
// p.then(function() {
//     console.log("I love you!");
//     });
//     p.catch(function(err) {
//     console.log("countdown experienced an error: " + err.message);
//     });
function promise(arr){
    return new Promise(function(resolve,reject){
        const array=arr;
        for (let i=0;i<array.length;i++){
        //    setInterval(function(){

          
            setTimeout(function(){
            //   document.getElementById('feeling').innerHTML=array[i];
            console.log(array[i]);
            if(i===array.length-1) resolve(console.log("Wow, I did it!"));
               if(i==15) return reject(console.log(`I hate ${i}`))
            },(i)*1000)
        // },000)
        }
        

    })
}
// const prom= promise(['i','love','you!','):'])
// prom.then(done,
//     function(err){
//         console.log("I am Sorry!:(")
//     });
// prom.catch(function(err){
//     console.log("I am Sorry!:(")
// })
function done(){
    return new Promise(function(resolve,reject){
        resolve(
            setTimeout(function(){
               
              console.log("Ow my God i cant believe i confessed my feelings for you!((::")
            
        },0*1000))})
    }
    // const html = `simg alt='A "simple" simghjj example.'>` +
    // `<img alt="Don't abuse it!">`;
    // const matches = html.match(/\bsimg[a-z]{3}\B/g);
    // console.log(matches)
    // function printDOM(node, prefix) {
    //     console.log(prefix + node.nodeName);
    //     for(let i=0; i<node.childNodes.length; i++) {
    //     printDOM(node.childNodes[i], prefix + '\t');
    //     }
    //     }
    //     printDOM(document, '');
//     const http=require('http');
//     http.createServer((req,res)=> {
//         console.log(`${req.method} ${req.url}`);
// res.end('Hello world!');
//     }).listen(1400)

const obj=[0,1,2];
Object.freeze(obj)
obj[3]=5;
console.log(obj)
// console.log(Object.getOwnPropertyDescriptor(obj,'name'))