"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var HelloWorld_1 = require("./components/HelloWorld/HelloWorld");
var webparts = document.getElementsByClassName('webpart-script-example');
for (var i = 0; i < webparts.length; i++) {
    // Get the data property from the Element
    var description = webparts[i].getAttribute('data-description').toString();
    ReactDOM.render(React.createElement(HelloWorld_1.Hello, { description: description }), webparts[i]);
}

//# sourceMappingURL=index.js.map
