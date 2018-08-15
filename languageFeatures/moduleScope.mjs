import {counter, increment} from "./counters"

import {creature, inspect, reset} from "./creature.mjs"

//console.log(counter += 1);
//TypeError: Assignment to constant variable.
//at file:///C:/Users/sagasu/repos/nodeplayground/languageFeatures/moduleScope.mjs:3:21
// because counter is not a variable it is immutable binding

console.log(counter);

// but we can increment it like this
console.log(increment());

console.log(creature);
// I can not change the binding "creature" but I can change it's properties.
creature.name = "Woof";
console.log(creature);

console.log(inspect());
reset();

console.log(creature);
