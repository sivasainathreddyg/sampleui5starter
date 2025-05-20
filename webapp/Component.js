sap.ui.define([
    "sap/ui/core/UIComponent",
    "simpleui5starter/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("simpleui5starter.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Set the device model (for responsive controls)
            this.setModel(models.createDeviceModel(), "device");

            // Initialize the router defined in manifest.json
            this.getRouter().initialize();
        }
    });
});
