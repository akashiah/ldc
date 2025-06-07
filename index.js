let tab = [3, 100, 8, 350, 20];

function isInTab(valeur) {
  if (!tab.includes(valeur)) {
    console.log("false");
  } else {
    console.log("true");
  }
}

isInTab(100);

function onflick(valeur) {
  console.log(tab.includes(valeur));
}
onflick(350);
