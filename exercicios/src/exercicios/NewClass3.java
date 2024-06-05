
package exercicios;

import java.util.Scanner;


public class NewClass3 {
  public static void main(String[]args){
    
  Scanner s = new Scanner(System.in);  
  
      System.out.println("INFORME A TEMPERATURA EM °C: ");
        double C = s.nextDouble();
        
        double F = (1.8*C) +32;
        double K = (C +273.15);
        
        System.out.println("CELCIUS: " + C + "°C");
        System.out.println("FARENHAIT: " + F + "°F");
        System.out.println("KELVIN: " + K + "°K");
  }
}
