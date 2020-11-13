let PreFormulation;

$(document).ready(function(e){
    setTimeout(() => {
        closeCover()
    }, 500);

    console.log('is it workjing?')
    
    // Wrap every letter in a span

    setTimeout(() => {
        var textWrapper = document.querySelector('.ml10 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline({loop: false})
            .add({
                targets: '.ml10 .letter',
                rotateY: [-90, 0],
                duration: 1000,
                // delay: 1000
                delay: (el, i) => 45 * i
            })
    }, 500);
        
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
function myScroll(type){
    if(type === 'aboutSumm'){
        $('html, body').animate({
            scrollTop: $("#aboutSumm").offset().top
        }, 1000);

    }
    // $('html, body').animate({
    //     scrollTop: $(".aspectSection").offset().top
    // }, 1000);
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
function closeCover(){
    $( ".cover" ).fadeOut( 500);

}
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

// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });
  
//   // Scroll certain amounts from current position 
//   window.scrollBy({ 
//     top: 100, // could be negative value
//     left: 0, 
//     behavior: 'smooth' 
//   });