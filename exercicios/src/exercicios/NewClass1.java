
package exercicios;

import java.util.Scanner;

public class NewClass1 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("DIGITE QUANTOS ANOS VOCÊ TÊM: ");
            int ANOS = leia.nextInt();
        
        System.out.println("DIGITE QUANTOS MESES VOCÊ TEM DE VIDA: ");
            int MESES = leia.nextInt();
        
        System.out.println("DIGITE QUANTOS DIAS VOCÊ TEM DE VIDA: ");
            int DIAS = leia.nextInt();
         
            int result = (ANOS *365) + (MESES * 30) + DIAS;
        
        System.out.println("VOCÊ TEM " + result + " DIAS DE VIDA");
            
    }
    
    
}
