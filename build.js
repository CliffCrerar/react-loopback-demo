const cp = require('child_process');

const cwd = process.cwd()

cp.exec('cd app;npm install; npm run build', { cwd }, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    // console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    cp.exec('cd api;npm run clean;npm run build', { cwd }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.error(`stderr: ${stderr}`);
        process.cwd()
        cp.exec('rm -rd ./api/public', { cwd }, (error, stdout, stderr) => {
            if (error) {console.error(`exec error: ${error}`);}
            // console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            cp.spawn('mv',['app/build','./api/public'],{ cwd, stdio: 'inherit' });
        })
    })
})