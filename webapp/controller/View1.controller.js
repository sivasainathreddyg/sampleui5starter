sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
    function (Controller, MessageToast) {
      "use strict";
      return Controller.extend("simpleui5starter.controller.App", {
        onPressButton: function () {
          MessageToast.show("Button clicked!");
        },
      });
    }
  );
  