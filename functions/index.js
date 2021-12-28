const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.blockSignup = functions.auth.user().onCreate((event) => {
  return admin.auth()
      .updateUser(event.uid, {disabled: true})
      .then((userRecord) => {
        console.log(`Auto blocked user: ${userRecord.toJSON()}`);
      })
      .catch((error) => console.log(`Error auto blocking: ${error}`));
});
