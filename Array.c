#include<stdio.h>
void main()
{
    //Find the Maximum and Minimum Numbers
    int size;
    printf("Enter the total numbers you want to enter");
    scanf("%d",&size);
    int arr[size];
    int max,min;
    printf("Enter the numbers");
    for(int i =0;i<size;i++){
        scanf("%d",&arr[i]);
    }
    for(int i =0;i<size;i++){
        printf("%d",arr[i]);
    }
 int temp,flag=0;
    
    printf("\nEnter the element you want to find :\n");
    scanf("%d",&temp);
    for(int i=0;i<size;i++)
    {
        if(arr[i]==temp){
            printf("\n%d Element found at %d index",temp,i);
            flag=1;
        }
    }
    if(flag==0)
    {
        printf("\nElement Not Found!!");
    }
    //////////////////////////////////////////////////////////////////
    int high=arr[0];
    for(int i=1;i<size;i++)
    {
      if(arr[i]>high){
        high=arr[i];
      }
    }
    printf("\nHighest value in the array is %d",high);
    ////////////////////////////////////////////////////////////
     int low=arr[0];
    for(int i=1;i<size;i++)
    {
      if(arr[i]<low){
        low=arr[i];
      }
    }
    printf("\nLowest value in the array is %d",low);

}