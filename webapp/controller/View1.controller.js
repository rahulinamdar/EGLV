sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.demo.prototype.controller.View1", {
            onInit: function () {
                // var Router = this.getOwnerComponent().getRouter();
                // //TODO logic check screen 
                // Router.navTo("first");
            },
            itemPress: function(){
                var Router = this.getOwnerComponent().getRouter();
                var oDeviceModel = this.getOwnerComponent().getModel("device");
            var sDeveice = oDeviceModel.getProperty("/");
                //TODO logic check screen 
                if(sDeveice.system.phone){
                    Router.navTo("mobsecond");
                }else{
                    Router.navTo("second");
                }
            },
            itemPress2: function(){
                var Router = this.getOwnerComponent().getRouter();
                var oDeviceModel = this.getOwnerComponent().getModel("device");
            var sDeveice = oDeviceModel.getProperty("/");
                //TODO logic check screen 
                if(sDeveice.system.phone){
                    Router.navTo("mobthird");
                }else{
                    Router.navTo("third");
                }
            }
        });
    });
