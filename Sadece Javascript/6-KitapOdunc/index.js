// Kitap ödünç uygulaması
let alinanIsimVeSifre=bilgileriAl();

let kutuphane=["a","b","c","d","e"];
let kullanicininKitaplari=[];

let exit=true;
while(exit){
    if(dogrula(alinanIsimVeSifre)){
        menu();
        let secim=parseInt(prompt("Seçiminizi giriniz:"));
        sw(secim);
    }
    else{
        console.log("Şifreniz yanlış tekrar girmek isterminiz e vya h");
        let secim=prompt("seçiminiz");
        if(secim!="h"){
            alinanIsimVeSifre=bilgileriAl();
        }
        else{
            cikis();
        }
       
    }
}

function sw(gelenParametre){
    switch(gelenParametre){
        case 1:{
            oduncAl();
            confirm();
            break;
        }
        case 2:{
            geriVer();
            confirm();
            break;
        }
        case 3:{
            cikis();
            confirm();
            break;
        }
        default :{
            console.log("geçersiz işlem");
            confirm();
            break;
        }
    }
}

function geriVer(){
    kullanicininKitaplari.forEach((item,index)=>{
        console.log((index+1)+" "+item);
    });
    let secim=prompt("İade etmek istediğiniz kitabı veriniz");
    let buul=kullanicininKitaplari.includes(secim);
    if(buul){
        kutuphane.push(secim);
        kullanicininKitaplari=kullanicininKitaplari.filter((item)=>{
            return item!=secim;
        });
        console.log(kutuphane);
        console.log(kullanicininKitaplari);
    }
    else{
        console.log("Benim böyle kitabım yok");
    }

}


function cikis(){
    console.log("Cikiş");
    exit=false;
}

function oduncAl(){
    
    for(let i=0;i<kutuphane.length;i++){
        console.log((i+1)+". "+kutuphane[i])
    }
    let secim=prompt("Seçmek istediğiniz kitabı giriniz");
    
    let buul=kutuphane.includes(secim);
    if(kutuphane.length===0){
        alert("kardeş soydun la");
    }
    else{
        if(buul){
            kutuphane=kutuphane.filter((item)=>{
                return item!=secim;
            });
            kullanicininKitaplari.push(secim);
            console.log(kutuphane);
            console.log(kullanicininKitaplari);
        }
        else{
            console.log("başka yere bak gardaşım");
        }
    }
    
}

function bilgileriAl(){
    let dizi=[];
    dizi.push(prompt("İsminizi Giriniz"));
    dizi.push(prompt("Şifreiniz giriniz"));
    return dizi;
}
function menu(){
    console.clear();
    console.log("1. Ödünç al");
    console.log("2. Ödünç alınan kitabı geri ver");
    console.log("3. Çıkış");
}



function dogrula(param){
    if(param[0]==="a" && param[1]==="a12"){
       
        return true;
    }
    else{
        return false;
    }
}
