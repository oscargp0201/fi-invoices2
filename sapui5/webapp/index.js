// @ts-nocheck
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
    *
    * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
    */
    function (ComponentContainer) {
        new ComponentContainer({
            name: "logaligroup.sapui5",
            settings: {
                id: "sapui"
            },
            async: true
        }).placeAt("content");
    });