"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var HelloWorld_module_scss_1 = require('./HelloWorld.module.scss');
var office_ui_fabric_react_1 = require('office-ui-fabric-react');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", {className: HelloWorld_module_scss_1.default.helloWorld}, React.createElement("div", {className: HelloWorld_module_scss_1.default.container}, React.createElement("div", {className: office_ui_fabric_react_1.css('ms-Grid-row ms-bgColor-teal ms-fontColor-white', HelloWorld_module_scss_1.default.row)}, React.createElement("div", {className: 'ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'}, React.createElement("span", {className: 'ms-font-xl ms-fontColor-white'}, "Welcome to SharePoint!"), React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, "Building experiences with web stack and modern tooling"), React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, this.props.description), React.createElement("a", {className: office_ui_fabric_react_1.css('ms-Button', HelloWorld_module_scss_1.default.button), href: 'https://dev.office.com/sharepoint'}, React.createElement("span", {className: 'ms-Button-label'}, "Learn more")))))));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;

//# sourceMappingURL=HelloWorld.js.map
