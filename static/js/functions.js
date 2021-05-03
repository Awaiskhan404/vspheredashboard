/* no js needed unless you wish to respond to changes in the select boxes as below.
*/
let citymenus = document.querySelectorAll(".selectstyle__box__select");
for (let i=0;i<citymenus.length;i++){
  citymenus[i].addEventListener("change",showCities);
}
function showCities(){
  let c1 = citymenus[0].options[citymenus[0].selectedIndex].text;
  let c2 = citymenus[1].options[citymenus[1].selectedIndex].text;
  let c3 = citymenus[2].options[citymenus[2].selectedIndex].text;
  document.getElementById("favs").innerHTML = `You chose ${c1}, ${c2}, and ${c3}.`;
}