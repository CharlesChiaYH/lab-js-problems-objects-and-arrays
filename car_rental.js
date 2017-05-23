// Customer Object
var Customer = function (customerInfo) {
  this.Id = customerInfo.id;
  this.Name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.Id = carInfo.carId;
  this.producer = carInfo.carProducer;
  this.model = carInfo.carModel;
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;

  this.quotePrice = function (rentalDuration){
    return this.rentalPrice * this.RentalDuration;
  };

  this.reserve = function (Customer, rentalDuration){
    if (this.available === true){
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }else{
      return false;
    }
  };

  this.return = function(){
    if(this.available === true){
      return "Sorry car has been returned";
    }else{
      this.available = true;
      this.customer = null;
      this.RentalDuration = null;
    }
  }

};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
    return customer.id === customerID ? true : false
    });
  };

  this.addCar = function (carObj){
    if(this.getCar(carObj.carID)){
      console.log ("Car already exists")
    }
    else{this.cars.push(carObj)
      console.log("car added to warehouse");
      }
  }

  this.addCustomer = function(customerObj){
    if(this.getCustomer(customerObj.customerID)){
      console.log ("Customer already exists")
    }else{this.customers.push(customerObj)
      console.log("Customer addedto warehouse");
    }
  };

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID);
    if (carIndex >= 0) {
      this.cars.splice(carIndex, 1);
      console.log("Car deleted");
    } else {
      console.log( "The carID could not be found.");
    }
  };
};

  this.removeCustomer = function(customerID) {
    if(this.findCustomerIndex >= 0) {
     this.Customer.splice(this.findCustomerIndex, 1);
     console.log("Customer deleted");
   }
   else {
     console.log("Customer not found");
   }
  };

  this.availableCars = function(){
  return this.cars.filter(function (car){
      return car.available
  }
}

  this.rentCar = function(customerID, rentalDuration){
  if(this.availableCars === 0){
    console.log("All cars rented");
  }
  else{
    var cust = this.getCustomer(customerID);
    if (cust !== null){
      this.carRented = this.availableCars[0];
      this.reserve (cust, rentalDuration);
      console.log("Car has been reserved");
    }
    else{
      console.log("Please provide valid ID")
    }
  }
}

  this.returnCar = function(customerID){
    if(this.getCustomer(customerID) !== null;){
      this.carRented = null;
      console.log ("Thank you for using our service");
    }
    else{
      console.log("Please provide valid ID")
    }
  };

  this.totalRevenue = function(){
      return this.cars.reduce(function(prevSum, currCar){
        console.log(prevSum, currCar);
        return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
      }, 0);
    };
  };


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};

var customerA = new Customer(customerInfo)


var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
//vendor.addCustomer(customerA);

//console.log(vendor.availableCars());
//vendor.addCar(carA);
//console.log(vendor.availableCars());

//vendor.rentCar(customerA.id, 5);
