const { setInterval } = require("timers");

const activities = [
		"Fuck Javascript",
		"Fluffy is Cool",
		"Broken Hand",
		"Windows Slave Name",
		"UwU",
		"Fibbin",
		"Arch user BTW",
		"Desk Puncher"
];

module.exports = (client) => {

    console.log(`Startup Log: Bot ${client.user.displayName} Online`)
    
    //registerCommands()
    console.log(`Startup Log: Activities Registered`);
    console.log("Startup Log: Starting Presence Loop");
    // Start Loop to Change Activities
    var I = 0;
    client.user.setActivity(activities[0]);
    setInterval(() => {
        const newActivity = activities[I]; 
        I++;
        client.user.setActivity(newActivity);
        if (I >= activities.length) {I = 0};
    }, 10000);
}
