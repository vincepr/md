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
    
    if (inputFunction.length !== testFunction.length) {
        if (name) throw new Error(`❌ ${name} does NOT have ${testFunction.length} arguments`)
        else  throw new Error(`❌ can not find the required function or object`)
    }

    for (let value of testInputArr) {
        let test = testFunction(value)
        let own = inputFunction(value)
        if (own === test){
            console.log(`✅ ${name}(${value}) returns ${test}`)
        } else {
            throw new Error(`❌ ${name}(${value}) does NOT return ${test}`)
        }
    }
    console.log("✅ all checks passed. congratulations 👌")
}


let testInputArr = [2000, 800, 1100, 1500, 1000, 0]
doTest(testInputArr, test, provisionsRechner)