// get project details by name
module.exports.projectByName = function (Name, db) {
  return db
    .collection("Projects")
    .find({ name: Name})
    .then((doc) => {
      return doc;
    })
    .catch((err) => {
      console.error(err);
      results.error = err;
      return results;
    });
};

// Send gmail to me

module.exports.createGmail = function (doc, db) {
 
};

