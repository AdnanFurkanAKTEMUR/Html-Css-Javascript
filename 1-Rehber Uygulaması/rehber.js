class Kisi{
    constructor(ad,soyad,email){
        this.ad=ad;
        this.soyad=soyad;
        this.email=email;
    }
}

class Util{
    static bosAlanKontrolEt(...alanlar){
        let sonuc=true;
        alanlar.forEach(alan=>{
            if(alan.length===0){
                sonuc=false;
                return false;
            }
        })
        return sonuc;
    }
    static emialKontrol(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
}

class Ekran{
    constructor(){
        this.ad=document.getElementById('ad');
        this.soyad=document.getElementById('soyad');
        this.email=document.getElementById('email');
        this.form=document.getElementById('form-rehber');
        this.form.addEventListener('submit',this.kaydetGuncelle.bind(this));
        this.kaydetVeGuncelle=document.querySelector('.kaydetVeGuncelle');
        this.kisiListesi=document.querySelector('.kisiListesi');
        this.kisiListesi.addEventListener('click',this.guncelleVeyaSil.bind(this));
        this.secilenSatir=undefined;
        this.depo=new Depo();
        this.kisileriEkranaYazdir();
    }
    bilgiOlustur(mesaj,durum){
        const olusturulanBilgi=document.querySelector('.bilgi');
        olusturulanBilgi.textContent=mesaj;
        
        if(durum){
            olusturulanBilgi.classList.add('bilgi--success');
        }
        else{
            olusturulanBilgi.classList.add('bilgi--error');
        }
        
        setTimeout(function(){
            olusturulanBilgi.className='bilgi';
        },2000);
    }
    kisileriEkranaYazdir(){
        this.depo.tumKisiler.forEach(kisi=>{
            this.kisiyiEkranaEkle(kisi);
            });
    }

    guncelleVeyaSil(e){
        const tiklanan=e.target;
        
        if(e.target.classList.contains('btn--delete')){
            this.secilenSatir=tiklanan.parentElement.parentElement;
            this.kisiyiEkrandanSil();
        }
        else if(e.target.classList.contains('btn--edit')){
            this.secilenSatir=tiklanan.parentElement.parentElement;
            this.kaydetVeGuncelle.value='Güncelle';
            this.ad.value=this.secilenSatir.cells[0].textContent;
            this.soyad.value=this.secilenSatir.cells[1].textContent;
            this.email.value=this.secilenSatir.cells[2].textContent;
        }

    }

    kisiyiGuncelle(kisi){
        this.secilenSatir.cells[0].textContent=kisi.ad;
        this.secilenSatir.cells[1].textContent=kisi.soyad;
        this.secilenSatir.cells[2].textContent=kisi.email;

        this.depo.kisiGuncelle(kisi,this.secilenSatir.cells[2].textContent);
        this.temizle();
        this.secilenSatir=undefined;
        this.kaydetVeGuncelle.value='Kaydet';
    }

    kisiyiEkrandanSil(){
        this.secilenSatir.remove();
        const silinecekMail=this.secilenSatir.cells[2].textContent;
        this.depo.kisiSil(silinecekMail);
        this.bilgiOlustur('Başarı ile Silindi',false);
    }
    kisiyiEkranaEkle(kisi){
        const olusturulanTr=document.createElement('tr');
        olusturulanTr.innerHTML=`<td>${kisi.ad}</td>
        <td>${kisi.soyad}</td>
        <td>${kisi.email}</td>
        <td>
            <button class="btn btn--edit"><i class="far fa-edit"></i></button>
            <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
        </td>`;
        this.kisiListesi.appendChild(olusturulanTr);
        
        this.temizle();
    }
    temizle(){
        this.ad.value='';
        this.soyad.value='';
        this.email.value='';
    }

    kaydetGuncelle(e){
        e.preventDefault();
        
        const kisi=new Kisi(this.ad.value,this.soyad.value,this.email.value);
        const sonuc=Util.bosAlanKontrolEt(kisi.ad,kisi.soyad,kisi.email);
        const emailGecerlimi=Util.emialKontrol(kisi.email)

        if(sonuc){
            if(!emailGecerlimi){
                this.bilgiOlustur('Geçerli bir mail yazın.',false);
                return;
            }
            if(this.secilenSatir){
                this.kisiyiGuncelle(kisi);
            }
            else{
                const sonuc=this.depo.kisiEkle(kisi);
                if(sonuc){
                    this.kisiyiEkranaEkle(kisi);
                    this.bilgiOlustur('Başarı ile Eklendi',true);
                }
                else{
                    this.bilgiOlustur('Bu mail Kullanımda',false);
                }
                
            }
            
        }
        else{
            this.bilgiOlustur('Boş alanları doldurunuz',false);
        }

        
    }
}

class Depo{
    constructor(){
        this.tumKisiler=this.kisileriGetir();
    }
    emailEssizmi(mail){
        const sonuc=this.tumKisiler.find(kisi=>{
            return kisi.email===mail
        });
        if(sonuc){
            return false;
        }
        else{
            return true;
        }
    }
    kisileriGetir(){
        let tumKisilerLocal;
        if(localStorage.getItem('tumKisiler')===null){
            tumKisilerLocal=[];
        }else{
            tumKisilerLocal=JSON.parse(localStorage.getItem('tumKisiler'));
        }
        
        return tumKisilerLocal;
    }
    kisiEkle(kisi){
        if(this.emailEssizmi(kisi.email)){
            this.tumKisiler.push(kisi);
            localStorage.setItem('tumKisiler',JSON.stringify(this.tumKisiler));
            return true;
        }
        else{
            return false;
        }
    }
    kisiSil(mail){
        this.tumKisiler.forEach((kisi,index)=>{
            if(kisi.email===mail){
                this.tumKisiler.splice(index,1);
            }
        });
        localStorage.setItem('tumKisiler',JSON.stringify(this.tumKisiler));
    }
    kisiGuncelle(guncellenecekKisi,mail){

        if(this.emailEssizmi(guncellenecekKisi.email)){
            this.tumKisiler.forEach((kisi,index)=>{
                if(kisi.email===mail){
                    this.tumKisiler[index]=guncellenecekKisi;
                    localStorage.setItem('tumKisiler',JSON.stringify(this.tumKisiler));
                    return true;
                }
            });
            
        }
        else{
            return false;
        }

        
    }
}

document.addEventListener('DOMContentLoaded',function(e){
    const ekran=new Ekran();    
});