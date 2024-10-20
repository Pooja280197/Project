#include<stdio.h>
void main()
{
    int n,fact=1;
    printf("Enter a Number ");
    scanf("%d",&n);

    if(n<0)
    {
        printf("Number you entered is negative");
    
    }
    else if(n==0){
       printf("Factorial of 0 is 1");}
    else {for(int i=1;i<=n;i++)
    {
        fact=i*fact;
       
    }
     printf(" Factorial of given number=%d",fact);
   
    }
}