let invite:string[]=['Asher','Mohib','Arbaz','laila'];//In bando ko bulaya mene

for (let i=0;i<invite.length;i++){
    console.log('Dear '+invite[i]+" Its my Pleasure to invite you to dinner with me!"+'\nThankyou');
    
}
console.log('\n')                          //new line ayege yahan

let absentguest:string[]=['Asher','laila']; //ye dono nahi aye
let newguest:string[]=['Kamran','Imran'];  //inke jaga mene inko bula lia
invite[0]=newguest[0];//asher ki jaga kamran
invite[3]=newguest[1];//laila ki jaga imran

for (let i=0;i<invite.length;i++){
    console.log('Dear '+invite[i]+" Its my Pleasure to invite you to dinner with me!"+'\nThankyou');
}
console.log(`\n${absentguest} is not coming in the dinner.`);

console.log('\nGood News! We find a big table so we invite three more guests.')
invite.unshift('Zia Khan');
invite.splice(3,0,'Sarim');
invite.push('Bilawal Butto');
for(let i=0;i<invite.length;i++){
    console.log('Dear '+invite[i]+" Its my pleasure to invite you!"+'\nThankyou')
}
