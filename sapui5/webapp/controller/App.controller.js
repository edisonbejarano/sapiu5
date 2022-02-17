//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller , MessageToast) {
        "use strict";
        
        return Controller.extend("sei.sapui5.controller.App", {

            onInit: function(){
               

            },

            onShowText: function(){
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle(); 
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("showTextMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }
        });

    });