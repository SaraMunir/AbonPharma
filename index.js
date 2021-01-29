let PreformulationeObj = [
    {
        id: 0,
        src: "Pre-formulation-DigitalMicroscope",
        name: "Digital Microscope",
        thmb: "Pre-formulation-DigitalMicroscopeThmb"
    },
    {
        id: 1,
        src: "Pre-formulation-DSC",
        name: "DSC",
        thmb: "Pre-formulation-DSCThmb"
    },
    {
        id: 2,
        src: "Pre-formulation-DVS",
        name: "DVS",
        thmb: "Pre-formulation-DVSThmb"
    },
    {
        id: 3,
        src: "Preformulation-Rheometer",
        name: "Rheometer",
        thmb: "Preformulation-RheometerThmb"
    },
    {
        id: 4,
        src: "Pre-formulation-SEM",
        name: "SEM",
        thmb: "Pre-formulation-SEMThmb"
    },
    {
        id: 5,
        src: "Preformulation-TAM",
        name: "TAM",
        thmb: "Preformulation-TAMThmb"
    },
    {
        id: 6,
        src: "Pre-formulation-TGA",
        name: "TGA",
        thmb: "Pre-formulation-TGAThmb"
    }
]
let formulationeObj = [
    {
        id: 0,
        src: "formulation-BiLayerTabletPress",
        name: "Bi Layer Tablet Press",
    },
    {
        id: 1,
        src: "formulation-Blender",
        name: "Blender"
    },
    {
        id: 2,
        src: "formulation-BlisterMachine",
        name: "Blister Machine"
    },
    {
        id: 3,
        src: "formulation-Granulation1",
        name: "Granulation"
    },
    {
        id: 4,
        src: "formulation-Granulation2",
        name: "Granulation 2"
    },
    {
        id: 5,
        src: "formulation-HuttlinFluidBed",
        name: "Huttlin Fluid Bed"
    },
    {
        id: 6,
        src: "formulation-LaserDrill",
        name: "Laser Drill"
    },
    {
        id: 7,
        src: "formulation-Lyophilizer",
        name: "Lyophilizer"
    },
    {
        id: 8,
        src: "formulation-microfluidizer",
        name: "Micro-Fluidizer"
    },
    {
        id: 9,
        src: "formulation-Pharmasep",
        name: "Pharmasep"
    },
    {
        id: 10,
        src: "formulation-SingleStationPress",
        name: "Single Station Press"
    },
]
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
    //     closeCover()
    $( "#heroTxtMain" ).fadeIn( 500);
    }, 800);
    setFormulationImg();
    setPreFormulationImg();
    $('#thumbnailsFromu').html('');
    $('#thumbnailsPreFromu').html('');
    formulationeObj.forEach(obj=>{
        $('#thumbnailsFromu').append(`<img class="machineImgThmNl" src="assets/abonsMachinary/${obj.src}.jpg" alt="" onmouseover="showOnHovr(${obj.id}, 'yes', 'formulation')" onmouseout="showOnHovr(${obj.id}, 'no', 'formulation')" onclick="selectImg(${obj.id},'formulation')">`)
    })
    PreformulationeObj.forEach(obj=>{
        $('#thumbnailsPreFromu').append(`<img class="machineImgThmNl" src="assets/abonsMachinary/${obj.src}.jpg" alt="" onmouseover="showOnHovr(${obj.id}, 'yes', 'Preformulation')" onmouseout="showOnHovr(${obj.id}, 'no', 'Preformulation')" onclick="selectImg(${obj.id},'Preformulation')">`)
    })
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
// function closeCover(){
//     $( ".cover" ).fadeOut( 500);
// }
function showMoreSect() {
    $('html, body').animate({
        scrollTop: $(".aspectSection").offset().top
    }, 1500);
}
let fndrSalah1=false;
let fndrBruce2=false;
let Gaus=false;
let Anwar=false;
let Yanming=false;
let Mahish=false;
function showMore(fndr){
    if(fndr === 'fndrSalah'){
        if(fndrSalah1===false){
            $( "#fndrSalah" ).slideDown();
            $( "#toggleBtn1" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn1" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#SalahScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#SalahScroll").offset().top
            }, 1000);
            fndrSalah1=true
        }else{
            $( "#fndrSalah" ).slideUp();
            $( "#toggleBtn1" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn1" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#SalahScroll").removeClass('addPdTp');
            fndrSalah1=false
        }
    }
    if(fndr === 'fndrBruce'){
        if(fndrBruce2===false){
            $( "#fndrBruce" ).slideDown();
            $( "#toggleBtn2" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn2" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#BruceScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#BruceScroll").offset().top
            }, 1000);
            fndrBruce2=true
        }else{
            $( "#fndrBruce" ).slideUp();
            $( "#toggleBtn2" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn2" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#BruceScroll").removeClass('addPdTp');
            fndrBruce2=false
        }
    }
    if(fndr === 'Gaus'){
        if(Gaus===false){
            $( "#Gaus" ).slideDown();
            $( "#toggleBtn3" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn3" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#GausScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#GausScroll").offset().top
            }, 1000);
            Gaus=true
        }else{
            $( "#Gaus" ).slideUp();
            $( "#toggleBtn3" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn3" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#GausScroll").removeClass('addPdTp');
            Gaus=false
        }
    }
    if(fndr === 'Anwar'){
        if(Anwar===false){
            $( "#Anwar" ).slideDown();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#AnwarScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#AnwarScroll").offset().top
            }, 1000);
            Anwar=true;
        }else{
            $( "#Anwar" ).slideUp();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#AnwarScroll").removeClass('addPdTp');
            Anwar=false;
        }
    }
    if(fndr === 'Yanming'){
        if(Yanming===false){
            $( "#Yanming" ).slideDown();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#YanmingScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#YanmingScroll").offset().top
            }, 1000);
            Yanming=true;
        }else{
            $( "#Yanming" ).slideUp();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#YanmingScroll").removeClass('addPdTp');
            Yanming=false;
        }
    }
    if(fndr === 'Mahish'){
        if(Mahish===false){
            $( "#Mahish" ).slideDown();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $("#MahishScroll").addClass('addPdTp');
            $('html, body').animate({
                scrollTop: $("#MahishScroll").offset().top
            }, 1000);
            Mahish=true;
        }else{
            $( "#Mahish" ).slideUp();
            $( "#toggleBtn4" ).removeClass( 'fas fa-2x fa-chevron-circle-up toggleBtn');
            $( "#toggleBtn4" ).addClass( 'fas fa-2x fa-chevron-circle-down toggleBtn');
            $("#MahishScroll").removeClass('addPdTp');
            Mahish=false;
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
let oldPhoto = true;

let selectedFormulationObj =[
];
let selectedPreFormulationObj =[
];
function setFormulationImg(){
    selectedFormulationObj=formulationeObj[0]
    $('#machineImgDetFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedFormulationObj.src}.jpg" alt="">
    <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center" >${selectedFormulationObj.name}</p>`)
}
function setPreFormulationImg(){
    selectedPreFormulationObj=PreformulationeObj[0]
    $('#machineImgDetPreFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedPreFormulationObj.src}.jpg" alt="">
    <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center" >${selectedPreFormulationObj.name}</p>`)
}
function showOnHovr(id, show, type){
    if(type==='formulation'){
        if(show === 'yes'){
            let tempFormulationOb = formulationeObj[id]
            $('#machineImgDetFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${tempFormulationOb.src}.jpg" alt="">
            <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${tempFormulationOb.name}</p>`)
            } else {
                $('#machineImgDetFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedFormulationObj.src}.jpg" alt="">
        <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${selectedFormulationObj.name}</p>`)
        }
    }
    if(type==='Preformulation'){
        if(show === 'yes'){
            let tempPreFormulationOb = PreformulationeObj[id]
            $('#machineImgDetPreFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${tempPreFormulationOb.src}.jpg" alt="">
            <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${tempPreFormulationOb.name}</p>`)
            } else {
                $('#machineImgDetPreFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedPreFormulationObj.src}.jpg" alt="">
        <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${selectedPreFormulationObj.name}</p>`)
        }
    }

}
function selectImg(id, type){
    console.log(id)
    if(type=== 'formulation'){
        selectedFormulationObj=formulationeObj[id]
        $('#machineImgDetFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedFormulationObj.src}.jpg" alt="">
        <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${selectedFormulationObj.name}</p>`)
    }
    if(type=== 'Preformulation'){
        selectedPreFormulationObj=PreformulationeObj[id]
        $('#machineImgDetPreFormu').html(`<img class="machineImg" src="assets/abonsMachinary/${selectedPreFormulationObj.src}.jpg" alt="">
        <p class="heroSubText mx-auto ltrSpc ltrHgtBg text-center">${selectedPreFormulationObj.name}</p>`)
    }
}
