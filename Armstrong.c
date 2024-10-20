#include<stdio.h>
#include<math.h>

// Armstrong Numbers in a Range
void main()
{ 
    int str,end,dig,temp,sum=0,r;
    printf("Enter numbers of digits of starting and ending number ");
    scanf("%d",&dig);
    printf("Enter the starting and ending value of the range ");
    scanf("%d%d",&str,&end);
    for(int i=str;i<=end;i++){
        for(int j=1;j<=dig;j++){
        r=i%10;
        sum =sum+pow(r,dig);
        i=i/10;
        }
     
     if(sum==i)
     {
        printf("Number is Armstrong number");
     }
     else{
        printf("Number is not Armstrong number");
     }
    }
}