console.log("Menüden bir seçim yapınız");
let bakiye=10000;
let giris=true;

while(giris){
    console.clear();
    console.log("1- Para Yükle");
    console.log("2- Bakiye Görüntüle");
    console.log("3- Aklımdan bir sayı tuttum. Giriş=1000tl");
    console.log("4- 3'lü sayı oyunu. Giriş=2000tl");
    console.log("5- Ördeği vur. Giriş=3000tl");
    console.log("6- Amiral battı. Giriş=4000tl");
    console.log("7- Çıkış");
    
    let secim=parseInt(prompt("Seçiminizi giriniz:"));
    menu(secim);
}

function menu(p1){
    

    switch(p1){
        case 1:{
            console.clear();
            paraYukle();
            confirm("Para Yüklendi");
            break;
        }
        case 2:{
            console.clear();
            console.log(`Bakiyeniz:${bakiye}`);
            confirm("Bakiye Görüntülendi");
            break;
        }
        case 3:{
            console.clear();
            if(bakiye>=1000){
                bakiye=bakiye-1000;
                aklimdanBirSayi();
            }
            else{
                console.log("Bakiyeniz yeterli değil.");
            }
            confirm("Oyun Bitti");
            break;
        }
        case 4:{
            console.clear();
            if(bakiye>=2000){
                bakiye=bakiye-2000;
                ucluSayi();
            }
            else{
                console.log("Bakiyeniz yeterli değil.");
            }
            confirm("Oyun Bitti");
            break;
        }
        case 5:{
            console.clear();
            if(bakiye>=3000){
                bakiye=bakiye-3000;
                ordegiVur();
            }
            else{
                console.log("Bakiyeniz yeterli değil.");
            }
            confirm("Oyun Bitti");
            break;
        }
        case 6:{
            console.clear();
            if(bakiye>=4000){
                bakiye=bakiye-4000;
                amiral();
            }
            else{
                console.log("Bakiyeniz yeterli değil.");
            }
            confirm("Oyun Bitti");
            break;
        }
        case 7:{
            console.clear();
            console.log("Çıkışınız gerçekleşti.");
            giris=false;
            break;
        }
        default :{
            console.clear();
            console.log("Yanlış bir değer girdiniz");
        }
    }
}

function paraYukle(){
    let y=parseInt(prompt("Ne kadar paran var?Sökül hepsini!!!"));
    bakiye=bakiye+y;
    console.log("Güncel Bakiye:"+bakiye);
}

function aklimdanBirSayi(){
   
    console.log("Aklımdan 0 ile 9 arasında bir sayı tuttum bakalım bilecek misin? 3 hakkın var");
    let rast=Math.floor(Math.random() * 10)
    for(let i=0;i<3;i++){
        let girilen=parseInt(prompt("Tahmininizi giriniz"));
        if(girilen===rast && i===0){
            bakiye=bakiye+3000;
            console.log("Tebrikler tekte bildin 3000tl kazandın");
            break;
        }
        else if(girilen===rast && i===1){
            bakiye=bakiye+2000;
            console.log("Tebrikler ikincide bildin 2000tl kazandın");
            break;
        }
        else if(girilen===rast && i===2){
            bakiye=bakiye+1000;
            console.log("Tebrikler üçüncüde bildin 1000tl kazandın");
            break;
        }
        else{
            if(i==2){
                console.log("Son hakkınıda kaybettin. Hiç bişey kazanamadın");
                console.log("Tuttuğum sayı:"+rast);
                break;
            }
            else{
                console.log("olmadı be dostum tekrar dene");
            }
        }
    }
}

function ucluSayi(){
    console.log("Aklımdan 3 basamaklı bir sayı tuttum bakalım bilebilecekmisin. Tek hakkın var. Ve bir basamak bilsende kafi");
    let rast=Math.floor(Math.random() * 1000);
    //console.log(rast);
    let girilen=parseInt(prompt("Tahmininizi giriniz"));
    
    if(girilen%10===rast%10){
        console.log("Tebrikler birler basamığını bildin");
        bakiye=bakiye+2000;
        console.log(`Güncel bakiye:${bakiye} oldu.`);
    }
    else{
        console.log("Birler basamağını bilemedin");
    }
    let girilenOnlar=Math.floor((girilen%100)/10);
    
    let rastOnlar=Math.floor((rast%100)/10);
    
    if(girilenOnlar===rastOnlar){
        console.log("Tebrikler onlar basamağını buldun.");
        bakiye=bakiye+2000;
        console.log(`Güncel bakiye:${bakiye} oldu.`);
    }
    else{
        console.log("Onlar basamağını bilemedin");
    }
    let girilenYuzler=Math.floor(girilen/100);
    let rastYuzler=Math.floor(rast/100);
    
    if(girilenYuzler===rastYuzler){
        console.log("Tebrikler yüzler basamğını buldun");
        bakiye=bakiye+2000;
        console.log(`Güncel bakiye:${bakiye} oldu.`);
    }
    else{
        console.log("Yüzler basamağını bilemedin");
    }
}

function ordegiVur(){
    console.log("Ördek 4 gölden birine kaçtı acaba hangisine? ");
    let rast=Math.floor(Math.random() * 4)+1;
    //console.log(rast);
    let girilenGol=parseInt(prompt("Hangi gölde"));
    if(rast===girilenGol){
        console.log("Ördeğin kaçtığı gölü buldun. ördeğe benzer bişey görüyorsun neresinden vurmak istersin?");
        console.log("1- Başından");
        console.log("2- Gövdesinden");
        console.log("3- Acıdım vurmayacağım");
        let vur=parseInt(prompt("Neresinden"));
        if(vur!=3){
            let rast2=Math.floor(Math.random() * 10);
            //console.log(rast2);
            if(rast2>5){
                console.log("İsabet ettiremedin... Ördek kaçtı ");
            }
            else if(rast2>3){
                console.log("Görüdüğün şey ördek değilmiş taşı vurmuşsun");
            }
            else{
                console.log("Tebrikler ördeği vurdun");
                bakiye=bakiye+10000;
                console.log(`Güncel bakiye:${bakiye} oldu.`);
            }
        }
        if(vur===3){
            console.log("Afferim ödeğin yaşamasına izin verdin");
        }
       
    }
    else{
        console.log("Yanlış göl dostum bidaha ki sefere");
    }
}

function amiral(){
    console.log("Düşmanın 3 savaş gemisi Ege'de 8 bölgeye dağıldı. Onlar seni bulmadan onları bul ve yok et.");
    
    let gemi1=Math.floor(Math.random() * 8)+1;
    let gemi2=Math.floor(Math.random() * 8)+1;
    let gemi3=Math.floor(Math.random() * 8)+1;
    let gemiSayisi=3;
    console.log(gemi1,gemi2,gemi3);
    console.log("Senin savaş gemin hangi bölgeye yerleşsin.");
    let yerles=parseInt(prompt("1-8"));
    let don=true;
    while(don){
        let atis=parseInt(prompt("Nereye atış yapacaksın?"));
        if(atis===gemi1){
            console.log("Tebrikler asker düşmanın bir gemisini batırdın");
            gemiSayisi--;
            gemi1=-1;
        }
        else if(atis===gemi2){
            console.log("Tebrikler asker düşmanın bir gemisini batırdın");
            gemiSayisi--;
            gemi2=-1;
        }
        else if(atis===gemi3){
            console.log("Tebrikler asker düşmanın bir gemisini batırdın");
            gemiSayisi--;
            gemi3=-1;
        }
        else{
            console.log("Ateş açılan bölgede herhangi bir düşman gemisi yok!!!");
        }
        for(let i=0;i<gemiSayisi;i++){
            let pcAtisi=Math.floor(Math.random() * 8)+1;
            
            if(pcAtisi===yerles){
                console.log(`Düşman ${pcAtisi} bölgesine ateş açarak seni vurdu. Kaybettin...`);
                don=false;
                break;
            }
            else{
                console.log(`Düşman ${pcAtisi} bölgesine ateş açtı.`);
            }
        }
        if(gemiSayisi===0){
            console.log("Tebrikler Ege'yi bir kez daha yunana mezar yaptın.");
            bakiye=bakiye+20000;
            console.log(`Güncel bakiye:${bakiye} oldu.`);
            don=false;
        }
    }
}