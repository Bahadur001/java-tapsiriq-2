let nom1 = +prompt("Bir eded girin:");
if (isNaN(nom1)) {
    console.log("Girilen  bir eded deyil.");
} 
else{
    state = false 
    for(let i=0;i<nom1;i++){
        if (nom1 % i == 0 && i != 1 && i != nom1){
            console.log('bu eded murekkeb ededdi')  
            state = true
        }
    }
    if(state == false){
        console.log('bu eded sadedi')
    }
}







  let girileneded = +prompt("Bir eded girin:");
  let cemi = 0;
 
  for (let i = 1; i < girileneded; i++) {
      if (girileneded % i === 0) {
          cemi += i;
      }
 }
 
 if (cemi === girileneded) {
     console.log(girileneded + " mükəmməldir.");
 } else {
     console.log(girileneded + " mükəmməl deyil.");
  }


function mukəmmələdədlər(baslanğic, bitiş) {
    for (let nom2 = baslanğic; nom2 <= bitiş; nom2++) {
        let toplam = 0;
        for (let bölən = 1; bölən < nom2; bölən++) {
            if (nom2 % bölən === 0) {
                toplam += bölən;
            }
        }
        if (toplam === nom2) {
            console.log(nom2 + " mükəmməl ədəddir.");
        }
    }
}

let birincieded = parseInt(prompt("birinci ededi girin:"));
let axirincieded = parseInt(prompt("axirinci ededi girin:"));

console.log(birincieded + " ile " + axirincieded + " arasındaki mükemmel ededler:");
mukəmmələdədlər(birincieded, axirincieded );


function sadeededler(birinci, axirinci) {
    for (let sayi = birinci; sayi <= axirinci; sayi++) {
        let bölenSayisi = 0;
        for (let bölen = 1; bölen <= sayi; bölen++) {
            if (sayi % bölen === 0) {
                bölenSayisi++;
            }
        }
        if (bölenSayisi === 2) {
            console.log(sayi + " sade ededdir.");
        }
    }
}

let birinciededd = parseInt(prompt("birinci ededi gir:"));
let axirinciededd = parseInt(prompt("axirinci ededi gir:"));

console.log(birinciededd + " ile " + axirinciededd + " arasındaki sade ededler");
sadeededler(birinciededd, axirinciededd);


function sonu7ilebitenler(baslangicc, bitiss) {
    for (let nom5 = baslangicc; nom5 <= bitiss; nom5++) {
        if (nom5 % 10 === 7) {
            console.log(nom5);
        }
    }
}

let ilk = parseInt(prompt("Birinci ededi girin:"));
let son = parseInt(prompt("axirinci ededi girin:"));

console.log(ilk + " ile " + son + " arasındaki sonu 7 ile biten ededler:");
sonu7ilebitenler(ilk, son);