let isim="adnan";
let sifre=12345;
let bakiye=10000;
let yanit="e";
let giris=0;
let userName;
let password;


while(yanit==="e" || yanit==="E"){
    if(giris==0){
        userName=prompt("Kullanıcı isminizi giriniz:");
        password=parseInt(prompt("Şifrenizi giriniz:"));
    }
    if(isim===userName && sifre===password){
        giris=1;
        console.log("1-Bakiye Görüntüle");
        console.log("2-Para Yatır");
        console.log("3-Para Çek");
        console.log("4-Çıkış");
        let secim=parseInt(prompt("Seçiminizi giriniz:"));
        switch(secim){
            case 1:{
                console.clear();
                console.log(`Bakiyeniz:${bakiye}'dir.`);
                break;
            }
            case 2:{
                console.clear();
                console.log(`Yatırmak istediğiniz miktarı giriniz:`);
                let miktar=parseInt(prompt("Yatırılacak Miktar"));
                bakiye=bakiye+miktar;
                console.log("Yeni Bakiyeniz:"+bakiye);
                break;
            }
            case 3:{
                console.clear();
                console.log(`Çekmek istediğiniz tutarı giriniz:`);
                let cekilecek=parseInt(prompt("Çekilecek tutar"));
                if(cekilecek>bakiye){
                    console.log("Bu miktar için fakirsin. Bu kadar paran yok");
                }
                else if(cekilecek<0){
                    console.log("Eksi miktar çekemezsin matematik hocan kimdi");
                }
                else{
                    bakiye=bakiye-cekilecek;
                    console.log("Kalan Bakiye:"+bakiye);
                }
                break;
            }
            case 4:{
                console.clear();
                console.log("Çıkış başarılı.");
                yanit="n";
                break;
            }
            default:{
                console.clear();
                console.log("EKSİK VEYA YANLIŞ BİR BİLGİ GİRDİNİZ.");
            }
        }
    }
    else{
        console.clear();
        console.log("Kullanıcı isminiz veya şifreniz yanlış. Tekrar denemek için e giriniz...");
        yanit=prompt("Tekrar denemek için e çıkıç için h");
        if(yanit=="h" || yanit=="H"){
            console.log("Çıkış gerçekleştirildi");
        }
    }
}
