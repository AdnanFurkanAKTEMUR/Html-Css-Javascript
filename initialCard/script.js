const panels=document.querySelectorAll('.panel');

panels.forEach((panel)=>{//bütün paneller seçilip tıklanılana active classı atar
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
}