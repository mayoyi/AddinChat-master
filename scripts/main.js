geotab.addin.testAddinBootstrap = function () {
  'use strict';
  return {
    initialize: function (freshApi, freshState, initializeCallback) {
      initializeCallback();
    },
    focus: function (freshApi, freshState) {},
    blur: function () {}
  };
};