let PreFormulation;
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myP").className = "nav-item navLogo";
    } else {
    document.getElementById("myP").className = "nav-item navLogoBef";
    }
}
$(document).ready(function(e){
    setTimeout(() => {
        closeCover()
    }, 1000);
})
function showMenu() {
    $( ".navMenResp" ).slideDown();
}
function closeMenu(){
    $( ".navMenResp" ).slideUp();
}
function myScroll(type){
    if(type === 'aboutSumm'){
        $('html, body').animate({
            scrollTop: $("#aboutSumm").offset().top
        }, 1000);
    }
}
function closeCover(){
    $( ".cover" ).fadeOut( 500);
}
function showMoreSect() {
    $('html, body').animate({
        scrollTop: $(".aspectSection").offset().top
    }, 1500);
}
let fndrSalah1=false;
let fndrBruce2=false;
function showMore(fndr){
    if(fndr === 'fndrSalah'){
        if(fndrSalah1===false){
            $( "#fndrSalah" ).slideDown();
            $( "#toggleBtn1" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn1" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            fndrSalah1=true
        }else{
            $( "#fndrSalah" ).slideUp();
            $( "#toggleBtn1" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn1" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            fndrSalah1=false
        }
    }
    if(fndr === 'fndrBruce'){
        if(fndrBruce2===false){
            $( "#fndrBruce" ).slideDown();
            $( "#toggleBtn2" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn2" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            fndrBruce2=true
        }else{
            $( "#fndrBruce" ).slideUp();
            $( "#toggleBtn2" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn2" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            fndrBruce2=false
        }
    }
    if(fndr === 'Gaus'){
        if(fndrBruce2===false){
            $( "#Gaus" ).slideDown();
            $( "#toggleBtn3" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn3" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            fndrBruce2=true
        }else{
            $( "#Gaus" ).slideUp();
            $( "#toggleBtn3" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn3" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            fndrBruce2=false
        }
    }

}
function scrollToPrForm(){
    console.log('did it scrollToPrForm?')
    $('html, body').animate({
        scrollTop: $("#preFormulation").offset().top
    }, 1000);
}
function scrollToFormu(){
    console.log('did it scrollToForm?')
    $('html, body').animate({
        scrollTop: $("#formulation").offset().top
    }, 1000);
}
function scrollToAnalytical(){
    console.log('did it scrollToForm?')
    $('html, body').animate({
        scrollTop: $("#analytical").offset().top
    }, 1500);
}
function scrollToBioAnalytical(){
    $('html, body').animate({
        scrollTop: $("#bioAnalytical").offset().top
    }, 1500);
}
function showFndrSalah(){
    $('html, body').animate({
        scrollTop: $("#fndrSalah").offset().top
    }, 1500);
}
function showFndrBruce(){
    $('html, body').animate({
        scrollTop: $("#fndrBruce").offset().top
    }, 1500);
}
function scrollToOrals(){
    $('html, body').animate({
        scrollTop: $("#oralSolids").offset().top
    }, 1500);
}
function scrollToLiquids(){
    $('html, body').animate({
        scrollTop: $("#liquids").offset().top
    }, 1500);
}
function scrollToParenterals(){
    $('html, body').animate({
        scrollTop: $("#parenterals").offset().top
    }, 1500);
}

function closeJobDetail(){
    $( "#jobDetailWindo" ).addClass( 'hide');
}
function openJobDetail(){
    $( "#jobDetailWindo" ).removeClass( 'hide');
    $('html, body').animate({
        scrollTop: $(".jobDetail").offset().top
    }, 500);
}
let abtMenu = false;
let RandD = false;
function showSubMen(menuOpt){
    if(menuOpt==='abtMenu'){
        if(abtMenu === false){
            abtMenu=true;
            $('#abtMenu').removeClass( 'hide')
        }else{
            abtMenu=false;
            $('#abtMenu').addClass( 'hide')
        }
    }
    if(menuOpt==='RandD'){
        if(RandD === false){
            RandD=true;
            $('#RandD').removeClass( 'hide')
        }else{
            RandD=false;
            $('#RandD').addClass( 'hide')
        }
    }

}
