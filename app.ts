let select:Function = (el:string, all:boolean = false) => {
    el = el.trim();
    let element:any;
    if (all){
        element = Array.from(document.querySelectorAll(el));
    }else{
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('element not available ')
    } else {
        return element   
    }
}




let inputText =  select('#inputText');
let trimmedText = select('#trimmedText');

// let ltrim = select('#ltrim');
// let rtrim  = select ('#rtrim');
// let removeSpace = select('#removeSpace');
// let lineTrim = select('#lineTrim');
let checkBoxes = select('[type="checkbox"]', true);




let checkVariables= {
    ltrimValue:false,
    rtrimValue:false,
    removeSpace:false,
    // lineTrim:false,
}



let inputTextFunction = () => {
    let inputTextValue:string = inputText.value;
  inputTextValue = checkVariables.ltrimValue ?  ltrimFunction(inputTextValue) : inputTextValue;
  inputTextValue = checkVariables.rtrimValue ?  rtrimFunction(inputTextValue) : inputTextValue;
  inputTextValue = checkVariables.removeSpace?  removeSpaceFunction(inputTextValue) : inputTextValue;
  trimmedText.value = inputTextValue;
}

let updateVariables = (e:any) => {
    let target = e.target;

   switch (target.id) {
        case "ltrim":
            checkVariables.ltrimValue = target.checked;
        break;
        case "rtrim":
            checkVariables.rtrimValue = target.checked;
        break;
        case "removeSpace":
            checkVariables.removeSpace = target.checked;
        break;
        // case "lineTrim":
        //     checkVariables.lineTrim = target.checked;
        // break;
   
       
   }

}

let ltrimFunction:Function = (e:string) => {
    return ( e.trimStart())
}

let rtrimFunction:Function = (e:string) => {
    return ( e.trimEnd())
}

let removeSpaceFunction:Function = (e:string) => {
    return (e.replaceAll(/ +/g,' '))
}





 

inputText.addEventListener('input', () => {
    inputTextFunction();
})

checkBoxes.forEach( (eachElement:any) => {
    eachElement.addEventListener('change', (e:any) => {
        updateVariables(e);
        inputTextFunction();
    })
});


