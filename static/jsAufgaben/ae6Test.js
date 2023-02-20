/* 
// gewünschte funktion:
function provisionsRechner(umsatz){
    if (umsatz >= 1500){
        return umsatz * 0.5
    } else{
        if (umsatz >= 1000){
            return umsatz * 0.04
        } else {
            return umsatz * 0.03
        }
    }
}
*/


function test(umsatz){
    if (umsatz >= 1500){
        return umsatz * 0.5
    } else{
        if (umsatz >= 1000){
            return umsatz * 0.04
        } else {
            return umsatz * 0.03
        }
    }
}


function doTest(testInputArr, testFunction, inputFunction ){
    let name = inputFunction.name
    let noErrors = true

    function err(txt){
        noErrors = false
        console.log(txt)
        return
    }
    
    if (inputFunction.length !== testFunction.length) {
        if (name) err(`❌ ${name} does NOT have ${testFunction.length} arguments`)
        else  err(`❌ can not find the required function or object`)
        return
    }

    for (let value of testInputArr) {
        let test = testFunction(value)
        let own = inputFunction(value)
        if (own === test){
            console.log(`✅ ${name}(${value}) returns ${test}`)
        } else {
            err(`❌ ${name}(${value}) does NOT return ${test}`)
            return
        }
    }
    noErrors && console.log("✅ all checks passed. congratulations 👌")
}


let testInputArr = [2000, 800, 1100, 1500, 1000, 0]
doTest(testInputArr, test, provisionsRechner)