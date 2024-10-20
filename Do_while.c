#include<stdio.h>
void main()
{
    char A[10]="OpenSesame";
    char B[10];
    do
    {
    printf("Enter Your password  ");
    scanf("%s",&B);

    }while(A!=B);
     printf("Welcome");
}