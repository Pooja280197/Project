// recursion uses more memory than loop
#include<stdio.h>
int i=1;
void print()
{
   
   printf("%d\n",i);
   i++; 
   if(i<10){
   print();
   }

}
void main()
{
    print();
}