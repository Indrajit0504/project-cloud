package sender;

import javax.jms.QueueConnectionFactory;
import javax.jms.Connection;
import javax.jms.Session;
import javax.jms.Destination;
import javax.jms.MessageProducer;
import javax.jms.TextMessage;
import javax.jms.DeliveryMode;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MySender implements Runnable {

	public void run() {
		
		try{
			ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory("tcp://localhost:8161/admin");
			Connection connection = connectionFactory.createConnection();
			// Start the connection
			connection.start();
			// Open a session without transaction and acknowledge automatic
			Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
			// Create Destination queue
			Destination queue = session.createQueue("Queue");
			// Create a sender
			MessageProducer producer = session.createProducer(queue);
			producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
			String message = "Indra";
			// insert message
			TextMessage messagetext = session.createTextMessage(message);
			System.out.println("Producer Sent: " + message);
			producer.send(messagetext);


			// Close the session
			session.close();
			// Close the connection
			connection.close();

		}catch(Exception e){
			e.printStackTrace();
		}

	}

}
