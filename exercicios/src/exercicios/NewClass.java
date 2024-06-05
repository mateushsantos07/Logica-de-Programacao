
package exercicios;

import java.util.Scanner;

public class NewClass {
   
    
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("DIGITE A LARGURA");
        double LARGURA = leia.nextDouble();
        System.out.println("DIGITE A ALTURA");
        double ALTURA = leia.nextDouble();
        
        double result = LARGURA * ALTURA;
        
        System.out.println("AREA É IGUAL " + result);
        
    }
    
}
