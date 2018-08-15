import {counter} from "./counters"

//console.log(counter += 1);
//TypeError: Assignment to constant variable.
//at file:///C:/Users/sagasu/repos/nodeplayground/languageFeatures/moduleScope.mjs:3:21
// because counter is not a variable it is immutable binding

console.log(counter);