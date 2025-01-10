const cluster = require('cluster');
const express = require('express');

const os = require('os');
const app = express();

if(cluster.isMaster){
    const cpus = os.cpus().length;

    console.log(`Clustering to ${cpus} CPUs`);
    console.log(`Master process ${process.pid} is running`);

    for(let i = 0; i < cpus; i++){
        cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        
    });
}
else{

}