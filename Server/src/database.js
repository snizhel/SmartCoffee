class Database {
  getDistance() {
    const dbRef = firebase.database().ref().child("distance");
    dbRef.on("value", (snap) => {
      var distance = snap.val();
      if (distance == null) {
        distance == 0;
      }
    });
  }

  getFlowRate() {
    const dbRef = firebase.database().ref().child("flowRate");
    dbRef.on("value", (snap) => {
      var flowRate = snap.val();
      if (flowRate == null) {
        flowRate == 0;
      }
    });
  }

  getLiquidQuantity() {
    const dbRef = firebase.database().ref().child("liquidQuantity");
    dbRef.on("value", (snap) => {
      var liquidQuantity = snap.val();
      if (liquidQuantity == null) {
        liquidQuantity == 0;
      }
    });
  }
}

module.exports = Database;
