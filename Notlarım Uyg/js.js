const yeniGorev=document.querySelector('.input-gorev');
const yeniGorevEkleBtn=document.querySelector('.btn-gorev-ekle');
const gorevListesi=document.querySelector('.gorev-listesi');


yeniGorevEkleBtn.addEventListener('click',gorevEkle);

function gorevEkle(e){
    e.preventDefault();
    //div olusturma
    const gorevDiv=document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li
    const li=document.createElement('li');
    li.classList.add('gorev-tanim');
    li.innerText=yeniGorev.value;
    gorevDiv.appendChild(li);

    
    

    //tamamlandı butonu ekle
    const gorevTm=document.createElement('button');
    gorevTm.classList.add('gorev-btn');
    gorevTm.classList.add('gorev-btn-tamamlandi');
    gorevTm.innerHTML='<i class="far fa-check-square"><i>';
    gorevDiv.appendChild(gorevTm);

    //gorevsil
    const gorevSil=document.createElement('button');
    gorevSil.classList.add('gorev-btn');
    gorevSil.classList.add('gorev-btn-sil');
    gorevSil.innerHTML='<i class="far fa-trash-alt"><i>';
    gorevDiv.appendChild(gorevSil);

    yeniGorev.value="";
    //ulye divi ekleme
    gorevListesi.appendChild(gorevDiv);
}