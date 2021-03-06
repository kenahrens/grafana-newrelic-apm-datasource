///<reference path="../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var NewRelicDSConfigCtrl;
    return {
        setters:[],
        execute: function() {
            NewRelicDSConfigCtrl = (function () {
                function NewRelicDSConfigCtrl($scope, $injector, backendSrv) {
                    this.backendSrv = backendSrv;
                    this.backendSrv = backendSrv;
                    this.loadApplications();
                }
                NewRelicDSConfigCtrl.prototype.getApplications = function () {
                    var promise = this.backendSrv.get('api/plugin-proxy/newrelic-app/v2/applications.json');
                    return promise.then(function (result) {
                        if (result && result.applications) {
                            return result.applications;
                        }
                        else {
                            return [];
                        }
                    });
                };
                NewRelicDSConfigCtrl.prototype.loadApplications = function () {
                    var _this = this;
                    this.getApplications().then(function (apps) {
                        apps = apps.map(function (app) {
                            return { name: app.name, id: app.id.toString() };
                        });
                        _this.apps = apps;
                    });
                };
                NewRelicDSConfigCtrl.templateUrl = 'datasource/partials/config.html';
                return NewRelicDSConfigCtrl;
            })();
            exports_1("NewRelicDSConfigCtrl", NewRelicDSConfigCtrl);
        }
    }
});
//# sourceMappingURL=config_ctrl.js.map