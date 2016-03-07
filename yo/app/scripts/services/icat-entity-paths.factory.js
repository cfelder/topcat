
(function() {
    'use strict';

    var app = angular.module('angularApp');

    app.factory('icatEntityPaths', function(){
    	return {
    		facility: {
	    		investigation: 'facility.investigations',
	    		dataset: 'facility.investigations.datasets',
	    		datafile: 'facility.investigations.datafiles',
	    		investigationParameter: 'facility.investigations.parameters',
	    		investigationParameterType: 'facility.investigations.parameters.type',
	    		datasetParameter: 'facility.investigations.datasets.parameters',
	    		datasetParameterType: 'facility.investigations.datasets.parameters.type',
	    		datafileParameter: 'facility.investigations.datasets.datafiles.parameters',
	    		datafileParameterType: 'facility.investigations.datasets.datafiles.parameters.type',
	    		investigationInstrument: 'facility.instruments.investigationInstruments',
	            instrument: 'facility.instruments',
	            facilityCycle: 'facility.facilityCycles'
	    	},
	    	facilityCycle: {
	    		facility: 'facilityCycle.facility',
	    		investigation: 'facilityCycle.facility.investigations',
	    		dataset: 'facilityCycle.facility.investigations.datasets',
	    		datafile: 'facilityCycle.facility.investigations.datasets.datafiles',
	    		investigationParameter: 'facilityCycle.facility.investigations.parameters',
	    		investigationParameterType: 'facilityCycle.facility.investigations.parameters.type',
	    		datasetParameter: 'facilityCycle.facility.investigations.datasets.parameters',
	    		datasetParameterType: 'facilityCycle.facility.investigations.datasets.parameters.type',
	    		datafileParameter: 'facilityCycle.facility.investigations.datasets.datafiles.parameters',
	    		datafileParameterType: 'facilityCycle.facility.investigations.datasets.datafiles.parameters.type',
	    		investigationInstrument: 'facilityCycle.facility.instruments.investigationInstruments',
	            instrument: 'facilityCycle.facility.instruments'
	    	},
	    	instrument: {
	    		facility: 'instrument.facility',
	    		investigation: 'instrument.investigationInstruments.investigation',
	    		dataset: 'instrument.investigationInstruments.investigation.datasets',
	    		datafile: 'instrument.investigationInstruments.investigation.datasets.datafiles',
	    		investigationParameter: 'instrument.investigationInstruments.investigation.parameters',
	    		investigationParameterType: 'instrument.investigationInstruments.investigation.parameters.type',
	    		datasetParameter: 'instrument.investigationInstruments.investigation.dataset.parameters',
	    		datasetParameterType: 'instrument.investigationInstruments.investigation.dataset.parameters.type',
	    		datafileParameter: 'instrument.investigationInstruments.investigation.datasets.datafiles.parameters',
	    		datafileParameterType: 'instrument.investigationInstruments.investigation.datasets.datafiles.parameters.type',
	            investigationInstrument: 'investigation.investigationInstruments',
	    		facilityCycle: 'instrument.facility.facilityCycles',
	    		instrumentScientist: 'instrument.instrumentScientists',
	    		instrumentScientistUser: 'instrument.instrumentScientists.user'
	    	},
	    	proposal: {
	    		facility: 'proposal.investigations.facility',
	    		dataset: 'proposal.investigations.datasets',
	    		datafile: 'proposal.investigations.datasets.datafiles',
	    		investigationParameter: 'proposal.investigations.parameters',
	    		investigationParameterType: 'proposal.investigations.parameters.type',
	    		datasetParameter: 'proposal.investigations.dataset.parameters',
	    		datasetParameterType: 'proposal.investigations.dataset.parameters.type',
	    		datafileParameter: 'proposal.investigations.datasets.datafiles.parameters',
	    		datafileParameterType: 'proposal.investigations.datasets.datafiles.parameters.type',
	    		facilityCycle: 'proposal.investigations.facility.facilityCycles',
	            investigationInstrument: 'proposal.investigations.investigationInstruments',
	    		instrument: 'proposal.investigations.investigationInstruments.instrument',
	    		investigation: 'proposal.investigations'
	    	},
	    	investigation: {
	    		facility: 'investigation.facility',
	    		dataset: 'investigation.datasets',
	    		datafile: 'investigation.datasets.datafiles',
	    		investigationParameter: 'investigation.parameters',
	    		investigationParameterType: 'investigation.parameters.type',
	    		datasetParameter: 'investigation.dataset.parameters',
	    		datasetParameterType: 'investigation.dataset.parameters.type',
	    		datafileParameter: 'investigation.datasets.datafiles.parameters',
	    		datafileParameterType: 'investigation.datasets.datafiles.parameters.type',
	    		facilityCycle: 'investigation.facility.facilityCycles',
	            investigationInstrument: 'investigation.investigationInstruments',
	    		instrument: 'investigation.investigationInstruments.instrument',
	    		investigationUser: 'investigation.investigationUsers',
	    		user: 'investigation.investigationUsers.user',
	    		sample: 'investigation.samples',
	    		publication: 'investigation.publications'
	    	},
	    	dataset: {
	    		facility: 'dataset.investigation.facility',
	    		investigation: 'dataset.investigation',
	    		datafile: 'datasets.datafiles',
	    		investigationParameter: 'dataset.investigation.parameters',
	    		investigationParameterType: 'dataset.investigation.parameters.type',
	    		datasetParameter: 'dataset.parameters',
	    		datasetParameterType: 'dataset.parameters.type',
	    		datafileParameter: 'dataset.datafiles.parameters',
	    		datafileParameterType: 'dataset.datafiles.parameters.type',
	    		facilityCycle: 'dataset.investigation.facility.facilityCycles',
	            investigationInstrument: 'dataset.investigation.investigationInstruments',
	    		instrument: 'dataset.investigation.investigationInstruments.instrument',
	    		investigationUser: 'dataset.investigation.investigationUsers',
	    		user: 'dataset.investigation.investigationUsers.user',
	    		sample: 'dataset.sample',
	    		datasetType: 'dataset.type'
	    	},
	    	datafile: {
	    		facility: 'datafile.dataset.investigation.facility',
	    		investigation: 'datafile.dataset.investigation',
	    		dataset: 'datafile.dataset',
	    		investigationParameter: 'datafile.dataset.investigation.parameters',
	    		investigationParameterType: 'datafile.dataset.investigation.parameters.type',
	    		datasetParameter: 'datafile.dataset.parameters',
	    		datasetParameterType: 'datafile.dataset.parameters.type',
	    		datafileParameter: 'datafile.parameters',
	    		datafileParameterType: 'datafile.parameters.type',
	    		facilityCycle: 'datafile.dataset.investigation.facility.facilityCycles',
	            investigationInstrument: 'datafile.dataset.investigation.investigationInstruments',
	    		instrument: 'datafile.dataset.investigation.investigationInstruments.instrument'
	    	},
	    	investigationParameter: {
	    		investigationParameterType: 'investigationParameter.type'
	    	},
	    	investigationInstrument: {
	    		instrument: 'investigationInstrument.instrument',
	    		investigation: 'investigationInstrument.investigation'
	    	},
	    	investigationUser: {
	    		user: 'investigationUser.user'
	    	},
	    	datafileParameter: {
				datafileParameterType: 'datafileParameter.type',
				datafile: 'datafileParameter.datafile',
				investigation: 'datafileParameter.datafile.dataset.investigation'
	    	},
	    	instrumentScientist:{
	    		instrumentScientistUser: 'instrumentScientist.user'
	    	}
	    };
    });
    	

})();