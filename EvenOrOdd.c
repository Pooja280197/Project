#include<stdio.h>
int checkEvenOdd(int n);
void main()
{
    int num;
    printf("Enter a Number");
    scanf("%d",&num);
    int result=checkEvenOdd(num);

    if(result==1)
    {
      printf("The number is Even");
    }
    else{
      printf("The number is Odd"); 
    }
    
}
int checkEvenOdd(int n)
{
     if(n%2==0)
     {
        return 1;
     }
     else{
        return 0;
     }
}