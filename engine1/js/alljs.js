

$(".cards").flip({
axis: 'y',
trigger: 'hover',
speed: '1500'
});



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$("#fakeloader").fakeLoader({
timeToHide:1200, //Time in milliseconds for fakeLoader disappear
zIndex:"999999",//Default zIndex
spinner:"spinner2",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#b57c00", //Hex, RGB or RGBA colors
});
