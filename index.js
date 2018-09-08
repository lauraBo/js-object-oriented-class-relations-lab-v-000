//Driver class:

//A driver has many trips, and has many passengers through trips.
//new Driver() - initialized with a name; returns a JavaScript object
//that has attributes of id, and name
//trips() - returns all of the trips that a driver has taken
//passengers() - returns all of the passengers that a driver
//has taken on a trip
let store = { drivers: [], trips: [], passengers: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++driverId;
        // insert in the user to the store
        store.drivers.push(this);
    }

    trips(){
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
          );
}
        passengers() {
         return this.trips().map(trip => {
           return trip.passenger();
         });
       }
}

//Passenger class:


class Passenger{
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;
        // insert in the user to the store
        store.passengers.push(this);
    }

    trips(){
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
          );
}

drivers() {
 return this.trips().map(trip => {
   return trip.driver();
 });
}
}

class Trip{
    constructor(driver, passenger) {
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = ++tripId;

        // insert in the user to the store
        store.trips.push(this);
    }


  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }

  passenger() {
   return store.passengers.find(passenger => {
     return passenger.id === this.passengerId;
   });
 }

}
