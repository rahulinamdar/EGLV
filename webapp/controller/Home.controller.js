sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.demo.prototype.controller.Home", {
        onInit: function () {
            var Router = this.getOwnerComponent().getRouter();
            var oDeviceModel = this.getOwnerComponent().getModel("device");
            var sDeveice = oDeviceModel.getProperty("/");
            //TODO logic check screen 
            if(sDeveice.system.phone){
                Router.navTo("mobsecond");
            }else{
                Router.navTo("second");
            }
           
        }
	});
});