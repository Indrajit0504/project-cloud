package com.univ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class CarRentalController {

	CarRepository carRepository;

	@Autowired
	public CarRentalController(CarRepository carRepository){
		this.carRepository = carRepository;
		Car ferrari = new Car();
		ferrari.setPlateNumber("11AA22");
		ferrari.setModel("Ferrari");
		ferrari.setPrice(1000);
		ferrari.setRented(false);
		carRepository.save(ferrari);
		Car peugeot = new Car();
		peugeot.setPlateNumber("45EN389");
		peugeot.setModel("Peugeot 206");
		peugeot.setPrice(3000);
		peugeot.setRented(false);
		carRepository.save(peugeot);
		Car renault = new Car();
		renault.setPlateNumber("67EM890");
		renault.setModel("Clio 5");
		renault.setPrice(12000);
		renault.setRented(false);
		carRepository.save(renault);
	}
	// Get all cars
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/cars")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Iterable<Car> listOfCars(){
		return carRepository.findAll();
	}

	// Car detail by plate number
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/cars/{plateNumber}")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Car listOfCarsByPlate(@PathVariable(name="plateNumber") String plateNumber){

		return carRepository.findByPlateNumber(plateNumber);

	}
	// Create a car
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/cars/create")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Car createCar(@RequestBody Car car){
		Car _car = carRepository.save(new Car(car.getPlateNumber(),car.getModel(),car.getPrice()));
		return _car;
	}

	// Delete car by plate number
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping ("/cars/{plateNumber}")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public ResponseEntity<String> deleteCar(@PathVariable(name="plateNumber") String plateNumber){

		carRepository.deleteCarsByPlateNumber(plateNumber);
		return new ResponseEntity<>("All customers have been deleted!", HttpStatus.OK);

	}


	// Rent car
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/cars/{plateNumber}")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Car rent(@PathVariable(name="plateNumber") String plateNumber, @RequestParam(name="louer", required=true) boolean louer) {
		Car car = carRepository.findByPlateNumber(plateNumber);
		car.setRented(louer);
		System.out.println(car);
		return car;
	}


	


}
