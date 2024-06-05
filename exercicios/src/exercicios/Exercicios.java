
package exercicios;

import java.util.Scanner;


public class Exercicios {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.println("DIGITE UM NÚMERO: ");
        int numero = leia.nextInt();
        
        int antecessor = numero - 1;
        
        System.out.println("O ANTECESSOR É " + numero);
                
        
    }
    
}
