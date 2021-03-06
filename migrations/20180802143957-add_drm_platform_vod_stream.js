'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn('vod_stream', 'drm_platform',{type: Sequelize.STRING(20), allowNull: false})
            .catch(function(err) {console.log('Adding column vod_stream.drm_platform failed with error message: ',err.message);});
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.removeColumn('vod_stream', 'drm_platform')
            .catch(function(err) {console.log('Removing column vod_stream.drm_platform failed with error message: ',err.message);});
    }
};