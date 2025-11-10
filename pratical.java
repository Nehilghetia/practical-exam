//----------------Question--------------------------

//Create a Class Calculator that overloads add() method:
//  two integers
//  three integers
//  two doubles

//----------------Answer--------------------------

// class Calculator {

//     int add(int a, int b){
//         return a+b;
//     }

//     int add(int a, int b, int c){
//         return a+b+c;
//     }

//     double add(double a, double b){
//         return a+b;
//     }

//     public static void main(String[] args) {
//         Calculator c = new Calculator();
//         System.out.println("Two Integers: " + c.add(5, 10));
//         System.out.println("Three Integers: " + c.add(2, 4, 6));
//         System.out.println("Two Doubles: " + c.add(4.5, 3.8));
//     }
// }

//----------------Question--------------------------

//write a java program to print the fibonacci series up to N to 
// the Fibonacci sequence is:
// 0,1,1,2,3,5,8,13,..
//input:-Number of terms
//output:-Fibonacci sequence up to N terms

//----------------Answer--------------------------

// import java.util.*;

// class Fibonacci {
//     public static void main(String args[]) {
//         Scanner sc = new Scanner(System.in);
//         System.out.print("number of terms: ");
//         int n = sc.nextInt();
//         int a = 0, b = 1, c;
        
//         System.out.print("Fibonacci sequence up to " + n + " terms: ");
//         for(int i=1; i<=n; i++){
//             System.out.print(a + " ");
//             c = a + b;
//             a = b;
//             b = c;
//         }
//     }
// }