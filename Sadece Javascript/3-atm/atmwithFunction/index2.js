let alinanBilgiler=bilgileriAl();
let exit=true;
let bakiye=10000;
while(exit){

    if(dogrula(alinanBilgiler)){
        menu();
        let secim=parseInt(prompt("Seçiminizi Giriniz"));
        sc(secim);
    }
    else{
        console.log("bilgileriniz yanlış. Bidaha girmek istiyormusun?");
        let cevap=prompt("evet veya hayır");
        if(cevap!="h"){
            alinanBilgiler=bilgileriAl();
        }
        else{
            cikis();
        }
    }
}
function cikis(){
    console.clear();
    console.log("bay bay hepinıs");
    exit=false;
}
function sc(secim){
    switch(secim){
        case 1:{
            bakiyeGoruntule();
            break;
        }
        case 2:{
            paracek();
            break;
        }
        case 3:{
            parayatir();
            break;
        }
        case 4:{
            cikis();
            break;
        }
        default:{
            console.log("Geçersiz işlem");
        }
    }
}


function parayatir(){
    let yatirilicakTutar=parseInt(prompt("YAtirilicak tutarı giriniz:"));
    if(isNaN(yatirilicakTutar)){
        console.log("yanlış deger girdiniz");
    }
    else{
        bakiye+=yatirilicakTutar;
        console.log(`Güncel bakiyeniz:${bakiye}`);
        confirm();
    }
    
}

function paracek(){
    let cekilecekTutar=parseInt(prompt("Çekilecek tutarı giriniz"));

    if(cekilecekTutar>bakiye){
        console.log("Fakirsin gardaş");
    }
    else if(isNaN(cekilecekTutar)){
        console.log("kardeş iyimisin string girdin");
    }
    else{
        //bakiye=bakiye-cekilecekTutar;
        bakiye-=cekilecekTutar;
        console.log("Güncel bakiyeniz:"+ bakiye);
    }
    confirm();
}

function bakiyeGoruntule(){
    console.clear();
    console.log("bakiyeniz:"+ bakiye);
    
    confirm();
}

function bilgileriAl(){
    let dizi=[];
    let isim=prompt("isminizi girin");
    let sifre=prompt("şifre giriniz");
    dizi.push(isim);
    dizi.push(sifre);
    return dizi;
}

function dogrula(girilenBilgiler){
    if(girilenBilgiler[0]==="a" && girilenBilgiler[1]==="a12"){
        console.log("Bilgileriniz doğru");
        return true;
    }
    else{
        console.log("Bilgileriniz yanlış");
        return false;
    }
}

function menu(){
    console.clear();
    console.log("1.Bakiyeyi görüntüle");
    console.log("2.Para Çek");
    console.log("3. para yatır");
    console.log("4. çıkış");
}


