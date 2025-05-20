//@ui5-bundle simpleui5starter/Component-preload.js
sap.ui.require.preload({
	"simpleui5starter/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","simpleui5starter/model/models"],(e,t)=>{"use strict";return e.extend("simpleui5starter.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"simpleui5starter/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("simpleui5starter.controller.App",{onInit(){}})});
},
	"simpleui5starter/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";return e.extend("simpleui5starter.controller.App",{onPressButton:function(){t.show("Button clicked!")}})});
},
	"simpleui5starter/i18n/i18n.properties":'# This is the resource bundle for simpleui5starter\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"simpleui5starter/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"simpleui5starter","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.5","toolsId":"eed3c86a-f997-4b53-80ec-0d8a845546bc"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.136.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"simpleui5starter.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"simpleui5starter.view","async":true,"viewPath":"simpleui5starter.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"simpleui5starter.view.App","type":"XML","id":"App","async":true}},"sap.cloud":{"public":true,"service":"simpleui5starter"}}',
	"simpleui5starter/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"simpleui5starter/view/App.view.xml":'<mvc:View\n    controllerName="simpleui5starter.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app" /></mvc:View>\n',
	"simpleui5starter/view/View1.view.xml":'<mvc:View\n    controllerName="simpleui5starter.controller.App"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n><Page title="Welcome to SimpleUI5Starter"><content><VBox ><Text text="Hello, welcome to your first SAP UI5 app!" /><Button\n                text="Click Me"\n                press="onPressButton"\n                type="Emphasized"\n                \n            /></VBox></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
