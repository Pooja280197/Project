#include<stdio.h>
int n;
int factorial;
int fact(int n)
{
    if(n==1)
    {
        return 1; 
    }
    factorial=n*fact(n-1);
    return factorial;
}

void main()
    {
        printf("Enter the value of n ");
        scanf("%d",&n);
        printf("%d ",fact(n));
    }