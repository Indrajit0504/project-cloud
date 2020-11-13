package receiver;

import javax.jms.*;

import javax.jms.Queue;
import javax.jms.QueueConnectionFactory;
import javax.sound.midi.Receiver;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyReceiver implements Runnable{

	public void run() {
		try{
			ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://localhost:8161/admin");
			// Create a connection. See https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html
			Connection connection = connectionFactory.createConnection();
			// start the connection
			connection.start();
			// Open a session
			Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
			//Create queue
			Destination queue = session.createQueue("Queue");
			// Create a receive
			MessageConsumer consumer = session.createConsumer(queue);
			// Receive the message
			Message message = consumer.receive(1000);

			if (message instanceof TextMessage) {
				TextMessage textMessage = (TextMessage) message;
				String text = textMessage.getText();
				System.out.println("Received: " + text);
			} else {
				System.out.println("Received: " + message);
			}

			session.close();
			connection.close();

		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
