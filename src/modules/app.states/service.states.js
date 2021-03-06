/**
 * @memberOf app.states
 */
(function (module) {
  'use strict';

  function StatesService(httpService, i18nService) {
    var service = this;

    /**
     * Resolve states data.
     * @return {Promise} Passing an object.
     */
    service.resolveStatesData = function () {
      return httpService.all({
        // Force loading of dynamic locale using the determined one.
        locale: i18nService.setLocale()
      });
    };
  }

  module.service('statesService', [
    'httpService',
    'i18nService',
    StatesService
  ]);

}(angular.module('app.states')));
