#include <Servo.h>
#include <Ethernet.h>
//#include <LiquidCrystal.h>


Servo servo;
int incomingByte = 0;
double TIMEPER180 = 650.0;
double MILLIPERDEGREE = TIMEPER180 / 180.0;
int currentDegrees;

//Network settings
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};
IPAddress ip(192,168,1,138);
IPAddress myDns(192,168,1,1);
EthernetServer server(23);
boolean alreadyConnected = false;

//LCD
//LiquidCrystal lcd(8, 13, 9, 4, 5, 6, 7);

void rotateToDegree(int);

void setup() {
  // put your setup code here, to run once:
  servo.attach(3);
  servo.write(90);
  currentDegrees = 180; //assumes it is set in the middle
  Serial.begin(9600);
  //lcd.clear();
  //lcd.begin(16,2);

  //start network
  //lcd.print("getting ip...");
  Serial.println("Getting ip..");
  if (Ethernet.begin(mac) == 0){
    Serial.println("Failed to configure ethernet using DHCP");
    //lcd.clear();
    //lcd.print("failed to get ip");
    Ethernet.begin(mac, ip, myDns);
    
  }else{
    Serial.print("IP Address: ");
    ip = Ethernet.localIP();
    char ipBuf[15] = "              ";
    for (byte thisByte = 0; thisByte < 4; thisByte++) {
      // print the value of each byte of the IP address:
      //lcd.clear();
      Serial.print(ip[thisByte], DEC);
      //lcd.print(ip[thisByte]);
      Serial.print(".");
      //lcd.print(".");
    }
    Serial.println();
  }
  server.begin();
}

void loop() {
  EthernetClient client = server.available();
  if (client) {
    if (!alreadyConnected) {
      // clear out the input buffer:
      client.flush();
      Serial.println("We have a new client");
      //client.println("Hello, client!");
      alreadyConnected = true;
    }
    Serial.print("Available: ");
    Serial.println(client.available());
    
    if (client.available() >= 1) {
      
      uint32_t rotateIndex = client.read();

      switch(rotateIndex){
      case 0:
        rotateToDegree(60);
        break;
      case 1:
        rotateToDegree(180);
        break;
      case 2:
        rotateToDegree(300);
        break;   
      default:
        Serial.println("NOOP");
        break;
     }
    }
  }  
}

void rotateToDegree(int deg){
  int difference = deg - currentDegrees;
  servo.write(difference > 0 ? 180 : 0);
  delay(MILLIPERDEGREE * abs(difference));
  servo.write(90);
  currentDegrees = deg;
  Serial.print("Current: ");
  Serial.println(currentDegrees);
}

