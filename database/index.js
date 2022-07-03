// Creates database
const db = connect('127.0.0.1:27017/VroomMates');

// Loads all collections
load("src/generate/users.js");
load("src/generate/trips.js");
load("src/generate/drivers.js");
load("src/generate/chatRooms.js");
load("src/generate/notifications.js")