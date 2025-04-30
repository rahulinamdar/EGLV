sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.demo.prototype.controller.controller.App", {
        onInit() {
        },
        onPress: function (){
          var Router = this.getOwnerComponent().getRouter();
          //TODO logic check screen 
          var oDeviceModel = this.getOwnerComponent().getModel("device");
          var sDeveice = oDeviceModel.getProperty("/");
          if(sDeveice.system.phone){
            Router.navTo("mobfirst");
        }else{
            Router.navTo("first");
        }
        }
      });
    }
  );
  