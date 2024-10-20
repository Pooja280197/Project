#include<stdio.h>
#define square(num1)  num1*num1 
#define circle(r)   3.14*r*r
#define rectangle(l,b) l*b
void main()
{ 
    int s,r,l,b;
    printf("Enter size of side of square");
    scanf("%d",&s);  
    printf("Enter size of radius");
    scanf("%d",&r);  
     printf("Enter size of length and breadth");
    scanf("%d%d",&l,&b);  
    printf("\nArea of square %d",square(s));
    printf("\nArea of circle %f",circle(r));
    printf("\nArea of rectangle %d",rectangle(l,b));
}
