const os= require('os');

const user=os.userInfo();
console.log(user);


console.log("Nodemon is active");
console.log("hyy how are u");
console.log(`The system uptime is ${os.uptime()} second`);

const currOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    uptime:os.uptime(),


}
console.log(currOs);