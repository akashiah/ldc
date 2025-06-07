let tab = [3, 100, 8, 350, 20];

function isInTab(valeur){
    if ( tab.includes(valeur)) {
        console.log("true")
    }
    else {console.log("false")}

}

isInTab(
    100
)

function onflick(valeur){
    console.log(tab.includes(valeur))

}
onflick(
    350
)