class TrainSchedule {
  constructor() {
    this.trains = [];
  }

  addTrain(trainNumber, arrivalTime, departureTime) {
    const train = {
      trainNumber,
      arrivalTime,
      departureTime
    };
    this.trains.push(train);
  }

  displaySchedule() {
    console.log("Current Train Schedule:");
    this.trains.forEach(train => {
      console.log(`Train Number: ${train.trainNumber}, Arrival: ${train.arrivalTime}, Departure: ${train.departureTime}`);
    });
  }
}

// Example usage
const schedule = new TrainSchedule();
schedule.addTrain("A120", "10:00 AM", "10:30 AM");
schedule.addTrain("B304", "10:42 AM", "11:45 AM");
schedule.addTrain("C503", "12:30 PM", "1:00 PM");
schedule.displaySchedule();