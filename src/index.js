import a from "./a";
import b from "./b";
import c from "./cf";

console.log(a,b,c);

import("./lazy/lazy-a")
    .then(moduleA => {
        return import("./lazy/lazy-b")
            .then(moduleB => {
                return import("./lazy/lazy-c")
                    .then(moduleC => {
                        console.log(moduleA, moduleB, moduleC);
                    });
            });
    });