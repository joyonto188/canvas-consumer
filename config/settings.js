const DEFAULT_SYNC_INTERVAL_IN_MILLISECONDS = 60000; //one minute
const canvasUrl = 'http://canvas.differ.chat/api/v1/users/self/courses?access_token=';

module.exports = {
    syncTime: process.env.SYNC_INTERVAL_IN_MILLISECONDS || DEFAULT_SYNC_INTERVAL_IN_MILLISECONDS,
    canvasUrl: canvasUrl
};