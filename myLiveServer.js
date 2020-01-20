var liveServer = require("live-server");
var childProcess = require('child_process');

var params = {
    port: 8080, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    // root: "/public", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: '/dist/', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { 

        //code here does not seem to execute
        
        next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

liveServer.start(params);
liveServer.watcher.on('change', function(e){
    if(e.indexOf('/dist/')==-1){
        console.log('executing: npm run build');
        childProcess.execSync(`cd ${__dirname}; npm run build`);
        
    }
   
})