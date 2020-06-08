const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification).then((doc) => {
        console.log('NOTIFICATION ADDED', doc);
    })
})

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate((doc) => {
    const project = doc.data();
    const notificationObj = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorlastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notificationObj);
});

exports.userJoined = functions.auth.user().onCreate((user) => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notificationObj = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notificationObj);
    })
});
