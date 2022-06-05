let info = 50;
let infoCheese = 30;
let pizzaCheese = 90;
let pizzaCarbo = 145;
let pizzaNoMeet = 135;
let infoSous = 15;
let infoVeg = 45;
let infoMeet = 50;
let infoDef = 50;
$('#bounce').text('До сплати: ' + info);

$('.choseOpen').hide(0);
$('.item1').hide(0);


$('#chease').click(function () {
    $('#chooseChease').slideToggle(300);
    
})
$('#meet').click(function () {
    $('#chooseMeet').slideToggle(300);
})
$('#sous').click(function () {
    $('#chooseSous').slideToggle(300);
})
$('#veg').click(function () {
    $('#choseVeg').slideToggle(300);
})
$('#add').click(function () {
    $('#choseAdd').slideToggle(300);
})

// CHEESE START
$('.fetaGroup').click(function () {
    $('.fetaGroup').hide(0);
    $('#fetaHide').show(50);
    info+= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})

$('#fetaHide').click(function () {
    $('.fetaGroup').show(50);
    $('#fetaHide').hide(0);
    info-=infoCheese;
    $('#bounce').text('До сплати: ' + info); 
    
})
$('#mozaHide').click(()=>{
    $('#mozaHide').hide(0);
    $('#mozaGroup').show(50);
    info-= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#chederHide').click(()=>{
    $('#chederHide').hide(0);
    $('#chederGroup').show(50);
    info-= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#chederGroup').click(()=>{
    $('#chederGroup').hide(0);
    $('#chederHide').show(50);
    info+= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#mozaGroup').click(()=>{
    $('#mozaGroup').hide(0);
    $('#mozaHide').show(50);
    info+= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#bluGroup').click(()=>{
    $('#bluGroup').hide(0);
    $('#bluHide').show(50);
    info += infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#bluHide').click(()=>{
    $('#bluHide').hide(0);
    $('#bluGroup').show(50);
    info-= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#parmGroup').click(()=>{
    $('#parmGroup').hide(0);
    $('#parmHide').show(50);
    info+= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
$('#parmHide').click(()=>{
    $('#parmHide').hide(0);
    $('#parmGroup').show(50);
    info-= infoCheese;
    $('#bounce').text('До сплати: ' + info);
})
// CHEESE END




// MEET START 
$('#chickenGroup').click(()=>{
    $('#chickenGroup').hide(0);
    $('#chikenHide').show(50);
    info+=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$('#chikenHide').click(()=>{
    $('#chickenGroup').show(50);
    $('#chikenHide').hide(0);
    info-=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$('#bekonGroup').click(()=>{
    $('#bekonGroup').hide(0);
    $('#bekonHide').show(50)
    info+= infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$('#bekonHide').click(()=>{
    $('#bekonHide').hide(0);
    $('#bekonGroup').show(50);
    info-=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$('#shynkaGroup').click(()=>{
    $('#shynkaHide').show(50);
    $('#shynkaGroup').hide(0);
    info+=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$("#shynkaHide").click(()=>{
    $("#shynkaGroup").show(50);
    $("#shynkaHide").hide(0);
    info-= infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$("#paperoniGroup").click(()=>{
    $("#paperoniGroup").hide(0);
    $("#paperoniHide").show(50);
    info+=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
$("#paperoniHide").click(()=>{
    $("#paperoniHide").hide(0);
    $("#paperoniGroup").show(50);
    info-=infoMeet;
    $('#bounce').text('До сплати: ' + info);
})
// MEET END



// SOUS START    
$("#alfredoGroup").click(()=>{
    $("#alfredoGroup").hide(0);
    $("#alfredoHide").show(50);
    info+=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
$("#alfredoHide").click(()=>{
    $("#alfredoHide").hide(0);
    $("#alfredoGroup").show(50);
    info-=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
$("#barbequGroup").click(()=>{
    $("#barbequGroup").hide(0);
    $("#barbequHide").show(50);
    info+=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
$("#barbequHide").click(()=>{
    $("#barbequHide").hide(0);
    $("#barbequGroup").show(50);
    info-=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
$("#chasnykGroup").click(()=>{
    $("#chasnykGroup").hide(0);
    $("#chasnykHide").show(50);
    info+=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
$("#chasnykHide").click(()=>{
    $("#chasnykHide").hide(0);
    $("#chasnykGroup").show(50);
    info-=infoSous;
    $('#bounce').text('До сплати: ' + info);
})
// SOUS END



// VEG START
$("#kukurudzaGroup").click(()=>{
    $("#kukurudzaGroup").hide(0);
    $("#kukurudzaHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#kukurudzaHide").click(()=>{
    $("#kukurudzaGroup").show(50);
    $("#kukurudzaHide").hide(0);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#ananasGroup").click(()=>{
    $("#ananasGroup").hide(0);
    $("#ananasHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#ananasHide").click(()=>{
    $("#ananasGroup").show(50);
    $("#ananasHide").hide(0);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#tomatoGroup").click(()=>{
    $("#tomatoGroup").hide(0);
    $("#tomatoHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#tomatoHide").click(()=>{
    $("#tomatoHide").hide(0);
    $("#tomatoGroup").show(50);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#grubGroup").click(()=>{
    $("#grubGroup").hide(0);
    $("#grubHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#grubHide").click(()=>{
    $("#grubGroup").show(50);
    $("#grubHide").hide(0);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#shpunatGroup").click(()=>{
    $("#shpunatGroup").hide(0);
    $("#shpunatHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#shpunatHide").click(()=>{
    $("#shpunatHide").hide(0);
    $("#shpunatGroup").show(50);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#peretsGroup").click(()=>{
    $("#peretsGroup").hide(0);
    $("#peretsHide").show(50);
    info+=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
$("#peretsHide").click(()=>{
    $("#peretsGroup").show(50);
    $("#peretsHide").hide(0);
    info-=infoVeg;
    $('#bounce').text('До сплати: ' + info);
})
// VEG END


// COMPLETED PIZZA START
$('#pizzaCheese').click(()=>{
    $('#fetaHide').show(50);
    $('#mozaHide').show(50);
    $('#chederHide').show(50);
    $('#fetaGroup').hide(0);
    $('#chederGroup').hide(0);
    $('#mozaGroup').hide(0);
    info+= pizzaCheese
    $("#bounce").text('До сплати: ' + info)
    $("#complete1").hide(0)
})

$("#carbonara").click(()=>{
    $("#barbequGroup").hide(0);
    $("#barbequHide").show(50);
    $("#chickenGroup").hide(0);
    $("#chikenHide").show(50);
    $("#shynkaGroup").hide(0);
    $("#shynkaHide").show(50);
    $("#chederGroup").hide(0);
    $("#chederHide").show(50);
    $("#peretsGroup").hide(0);
    $("#perertsHide").show(50);
    $("#carbonara").hide(0);
    $("#text").hide(0)
    info+=pizzaCarbo;
    $("#bounce").text('До сплати: ' + info)
})
$("#noMeet").click(()=>{
    $("#chederGroup").hide(0);
    $("#chederHide").show(50);
    $("#peretsGroup").hide(0);
    $("#peretsHide").show(50);
    $("#tomatoHide").show(50);
    $("#tomatoGroup").hide(0);
    $("#alfredoHide").show(50);
    $("#alfredoGroup").hide(0);
    info+=pizzaNoMeet;
    $("#bounce").text('До сплати: ' + info)
    $("#complete3").hide(0);
})
// COMPLETED PIZZA END


$("#clean").click(()=>{
    info = 50
    $("#complete1").show(50);
    $("#carbonara").show(50);
    $("#complete3").show(50);
    $("#text").show(50);
    $("#bounce").text('До сплати: ' + info)
    $('#fetaHide').hide(0);
    $('#fetaGroup').show(50);
    $('#mozaHide').hide(0);
    $('#mozaGroup').show(50);
    $('#chederHide').hide(0);
    $('#chederGroup').show(50);
    $('#bluHide').hide(0);
    $('#bluGroup').show(50);
    $('#parmHide').hide(0);
    $('#parmGroup').show(50);
    $('#chickenGroup').show(50);
    $('#chikenHide').hide(0);
    $('#bekonHide').hide(0);
    $('#bekonGroup').show(50);
    $("#shynkaGroup").show(50);
    $("#shynkaHide").hide(0);
    $("#paperoniHide").hide(0);
    $("#paperoniGroup").show(50);
    $("#alfredoHide").hide(0);
    $("#alfredoGroup").show(50);
    $("#alfredoHide").hide(0);
    $("#alfredoGroup").show(50);
    $("#chasnykHide").hide(0);
    $("#chasnykGroup").show(50);
    $("#kukurudzaGroup").show(50);
    $("#kukurudzaHide").hide(0);
    $("#ananasGroup").show(50);
    $("#ananasHide").hide(0);
    $("#tomatoHide").hide(0);
    $("#tomatoGroup").show(50);
    $("#grubGroup").show(50);
    $("#grubHide").hide(0);
    $("#shpunatHide").hide(0);
    $("#shpunatGroup").show(50);
    $("#peretsGroup").show(50);
    $("#peretsHide").hide(0);
    $("#barbequHide").hide(0);
    $("#barbequGroup").show(50);
})


