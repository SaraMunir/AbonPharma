let PreFormulation;

$(document).ready(function(){


    console.log('is it workjing?')
    


})
function showMenu() {
    console.log('showing menu!');
    $( ".menuBar" ).slideDown( 1000);
    // $( "#showMoreBtn" ).html( `

    //     <div class="nav-link navLink"  href="#" onClick="hideMenu()">Hide &nbsp; &nbsp;
    //         <i class="fas fa-chevron-up"></i>
    //     </div>
    // `);
}
// function hideMenu() {
//     console.log('showing menu!');
//     $( ".menuBar" ).slideUp( 1000);
//     $( "#showMoreBtn" ).html( `
//     <div class="nav-link navLink"  href="#" onClick="showMenu()">More &nbsp; &nbsp;
//     <i class="fas fa-chevron-down"></i>
// </div>
//     `);
// }
function closeMenu(){
    $( ".menuBar" ).slideUp( 1000);

}

function showMoreSect() {
    $('html, body').animate({
        scrollTop: $(".aspectSection").offset().top
    }, 1500);
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
    // $( "#jobDetailWindo" ).slideUp( );
    $( "#jobDetailWindo" ).addClass( 'hide');


}
function openJobDetail(){
    // $( "#jobDetailWindo" ).slideDown( 1000);
    $( "#jobDetailWindo" ).removeClass( 'hide');

    $('html, body').animate({
        scrollTop: $(".jobDetail").offset().top
    }, 500);
}

