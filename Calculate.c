#include<stdio.h>
void main()
{
    float a,b;
    char ch;
    printf("Enter two numbers");
    scanf("%f %f",&a,&b);
    printf("enter + for addition\n- for substraction\n* for multiplication\n / for divide");
    scanf("%s",&ch);
    switch (ch)
    {
    case '+':printf("Addition =%f",a+b);
        break;
    case '-':printf("Substraction =%f",a-b);    
           break;
    case '*':printf("Multiplication=%f",a*b);
           break;
    case '/':if(b==0)
             {
                printf("Division =Infinity");
             }
             else{
                printf("Division= %f",a/b);
             }
             break;
    
    default:printf("Invalid choice");
        break;
    }
    
}