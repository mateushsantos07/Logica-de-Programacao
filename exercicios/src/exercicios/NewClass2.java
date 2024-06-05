
package exercicios;

import java.util.Scanner;


public class NewClass2 {
   public static void main(String[]args){
       Scanner s = new Scanner(System.in);
       System.out.println("DIGITE O TOTAL DE ELEITORES: ");
       double eleitores = s.nextInt();
       
       System.out.println("DIGITE QTD DE VOTOS NULOS: ");
       double nulos = s.nextInt();
       
       System.out.println("DIGITE QTD DE VOTOS BRANCOS: ");
       double brancos = s.nextInt();
       
       System.out.println("DIGITE QTD VOTOS VÁLIDOS: ");
       int validos = s.nextInt();
       
       double nulosPercentual = (nulos / eleitores) *100;
       double brancoPercentual = (brancos / eleitores) *100;
       double validosPercentual = (validos / eleitores) *100;
       
       System.out.println("PORCENTAGEM NULOS: " + nulosPercentual + "% DE VOTOS NULOS");
       System.out.println("PORCENTAGEM BRANCOS: " + brancoPercentual+ "% DE VOTOS BRANCOS");
       System.out.println("PORCENTAGEM VALIDOS: " + validosPercentual + "% DE VOTOS VALIDOS");
       
}
}
