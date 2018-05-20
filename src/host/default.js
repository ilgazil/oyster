const download = require('../download');

module.exports = {
    name: 'default',

    /**
     * Search for the host corresponding to the url given
     *
     * @param {string} url
     *
     * @return {boolean}
     */
    match (url) {
        return true;
    },

    /**
     * Analyse an url, and try to provide file name and size
     *
     * @param {string} url
     *
     * @returns {Promise}
     */
    analyse (url) {
        return Promise.resolve({
            name: url,
            size: 0
        });
    },

    /**
     * Process the download
     *
     * @param {string} url
     * @param {string} destination
     * @param {Object} options
     *
     * @returns {Promise}
     *
     * @todo How to get name?
     */
    download (url, destination, options) {
        return Promise.resolve({
            target: destination + '/foo',
            stream: download(url, destination + '/foo')
        });
    }
};
