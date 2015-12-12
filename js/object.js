if (typeof NS == 'undefined') { NS = {}; }

NS.myFunction = {
    //empty stuff array, filled during initialization
    stuff: [],

    init: function init() {
        this.stuff.push('Testing');
    },
    reset: function reset() {
        this.stuff = [];
    },
    //replace “//will add new functionality here later” with the following:
    append: function append(string1, string2) {
      return string1 + ' ' + string2;
    }
    //will add new functionality here later
};

NS.myFunction.init();
