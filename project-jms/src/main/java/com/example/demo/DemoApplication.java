package com.example.demo;

import java.lang.Thread.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import receiver.MyReceiver;
import sender.MySender;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		MySender producer = new MySender();
		MyReceiver consumer = new MyReceiver();

		Thread producerThread = new Thread(producer);
		producerThread.start();

		Thread consumerThread = new Thread(consumer);
		consumerThread.start();
	}
}

