function checkstu(st,srcname){
    const found = st.find(st => st === srcname)

    if(found){
        console.log("student found")
    }else{
        console.log("not found")
    }
}

const stlist = ["rahim","karim","jodu","modu"]

checkstu(stlist,"rahim")
checkstu(stlist,"somu")