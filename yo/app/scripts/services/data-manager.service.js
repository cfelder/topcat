'use strict';

angular.
    module('angularApp').factory('DataManager', DataManager);

DataManager.$inject = ['$http', '$q', 'ICATService'];

/*jshint -W098 */
function DataManager($http, $q, ICATService) {
    var manager = {};

    function MyException(message) {
      this.name = 'Data Error';
      this.message = message;
    }
    MyException.prototype = new Error();
    MyException.prototype.constructor = MyException;


    /**
     * Get the session value for the facility that was passed
     * @param  {[type]} session  [description]
     * @param  {[type]} facility [description]
     * @return {[type]}          [description]
     */
    function getSessionValueForFacility(session, facility) {
        return session[facility.keyName].sessionId;
    }


    /**
     * Perform a login
     * @TODO need to specify the facility/server to login
     * @return {object} a promise containing an icat session
     */
    manager.login = function() {
        var def = $q.defer();

        ICATService.login()
            .success(function(data) {
                def.resolve(data);
            })
            .error(function(error) {
                def.reject('Failed to login');
                throw new MyException('Failed to login:' + error);
            });

        return def.promise;
    };

    /**
     * Get the icat version of a facility
     * @param  {Object} facility config object
     * @return {Object} a promise containing the version number
     */
    manager.getVersion = function(facility) {
        var def = $q.defer();

        ICATService.getVersion(facility)
            .success(function(data) {
                def.resolve(data);
            })
            .error(function(error) {
                def.reject('Failed to get server version');
                throw new MyException('Failed to get server version. ' + error);
            });

        return def.promise;
    };




    /**
     * Get the list of facilities
     * @TODO doesn't make sense to pass a facility to get a list of faciltities
     * @param  {[type]} sessions [description]
     * @param  {[type]} facility [description]
     * @return {[type]}          [description]
     */
    manager.getFacilities = function(sessions, facility) {
        var sessionId = getSessionValueForFacility(sessions, facility.name);
        var def = $q.defer();

        ICATService.getFacilities(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'Facility');
                def.resolve(data);
            })
            .error(function(error) {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the instruments in facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @return {Object}          a promise containing the list of instruments
     */
    manager.getInstruments = function(sessions, facility){
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getInstruments(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'Instrument');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the facility cycles in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @return {Object}          a promise containing the list of cycles
     */
    manager.getCycles = function(sessions, facility) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getCycles(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'FacilityCycle');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the facility cycles for an intrument in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} instrumentId the id of the instrument
     * @return {Object}          a promise containing the list of cycles
     */
    manager.getCyclesByInstrumentId = function(sessions, facility, instrumentId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getCyclesByInstrumentId(sessionId, facility, instrumentId)
            .success(function(data) {
                data = _.pluck(data, 'FacilityCycle');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the investigation in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @return {Object}          a promise containing the list of investigations
     */
    manager.getInvestigations = function(sessions, facility) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getInvestigations(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'Investigation');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the investigations for a cycle in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} cycleId the id of the cycle
     * @return {Object}          a promise containing the list of investigations
     */
    manager.getInvestigationsByCycleId = function(sessions, facility, cycleId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getInvestigationsByCycleId(sessionId, facility, cycleId)
            .success(function(data) {
                data = _.pluck(data, 'Investigation');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the investigations for an instrument in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} instrumentId the id of the instrument
     * @return {Object}          a promise containing the list of investigations
     */
    manager.getInvestigationsByInstrumentId = function(sessions, facility, instrumentId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getInvestigationsByInstrumentId(sessionId, facility, instrumentId)
            .success(function(data) {
                data = _.pluck(data, 'Investigation');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the investigations for an instrument and cycle in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} instrumentId the id of the instrument
     * @param  {int} cycleId the id of the cycle
     * @return {Object}          a promise containing the list of investigations
     */
    manager.getInvestigationsByInstrumentIdByCycleId = function(sessions, facility, instrumentId, cycleId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getInvestigationsByInstrumentIdByCycleId(sessionId, facility, instrumentId, cycleId)
            .success(function(data) {
                data = _.pluck(data, 'Investigation');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the datasets in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @return {Object}          a promise containing the list of datasets
     */
    manager.getDatasets = function(sessions, facility){
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatasets(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'Dataset');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the datasets for an instrument in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} instrumentId the id of the instrument
     * @return {Object}          a promise containing the list of datasets
     */
    manager.getDatasetsByInstrumentId = function(sessions, facility, instrumentId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatasetsByInstrumentId(sessionId, facility, instrumentId)
            .success(function(data) {
                data = _.pluck(data, 'Dataset');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the datasets for an investigation in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} investigationId the id of the investigation
     * @return {Object}          a promise containing the list of datasets
     */
    manager.getDatasetsByInvestigationId = function(sessions, facility, investigationId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatasetsByInvestigationId(sessionId, facility, investigationId)
            .success(function(data) {
                data = _.pluck(data, 'Dataset');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the datafiles in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @return {Object}          a promise containing the list of datafiles
     */
    manager.getDatafiles = function(sessions, facility) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatafiles(sessionId, facility)
            .success(function(data) {
                data = _.pluck(data, 'Datafile');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };


    /**
     * Get the datafiles for a dataset in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} datasetId the id of the dataset
     * @return {Object}          a promise containing the list of datafiles
     */
    manager.getDatafilesByDatasetId = function(sessions, facility, datasetId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatafilesByDatasetId(sessionId, facility, datasetId)
            .success(function(data) {
                data = _.pluck(data, 'Datafile');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the datafiles for an instrument in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} instrumentId the id of the instrument
     * @return {Object}          a promise containing the list of datafiles
     */
    manager.getDatafilesByInstrumentId = function(sessions, facility, instrumentId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatafilesByInstrumentId(sessionId, facility, instrumentId)
            .success(function(data) {
                data = _.pluck(data, 'Datafile');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    /**
     * Get the datafile for an investigation in a facility
     * @param  {Object} sessions session object containing logged in sessions
     * @param  {Object} facility the facility object
     * @param  {int} investigationId the id of the investigation
     * @return {Object}          a promise containing the list of datafiles
     */
    manager.getDatafilesByInvestigationId = function(sessions, facility, investigationId) {
        var sessionId = getSessionValueForFacility(sessions, facility);
        var def = $q.defer();

        ICATService.getDatafilesByInvestigationId(sessionId, facility, investigationId)
            .success(function(data) {
                data = _.pluck(data, 'Datafile');
                def.resolve(data);
            })
            .error(function() {
                def.reject('Failed to retrieve data');
                throw new MyException('Failed to retrieve data from server');
            });

        return def.promise;
    };

    return manager;
}
