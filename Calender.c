#include<stdio.h>
void main()
{
    int ch;
    printf("Enter 1.January\n2.February\n3.March\n4.April\n5.May\n6.June\n7.July\n8.August\n9.September\n10.October\n11.November\n12.December\n");
    scanf("%d",&ch);
    switch (ch)
    {
    case 1: printf("There are total 31 days in month of January");
            break;
    case 2: printf("There are total 28 days in month of February (29 days in case of Leap Year)");
            break;
    case 3: printf("There are total 31 days in month of March");
            break;
    case 4: printf("There are total 30 days in month of April");
            break;
    case 5: printf("There are total 31 days in month of May");
            break;
    case 6: printf("There are total 30 days in month of June");
            break;
    case 7: printf("There are total 31 days in month of July");
            break;
    case 8: printf("There are total 31 days in month of August");
            break;        
    case 9: printf("There are total 30 days in month of September");
            break;
    case 10: printf("There are total 31 days in month of October");
            break;
    case 11: printf("There are total 30 days in month of November");
            break;
    case 12: printf("There are total 31 days in month of December");
            break;
    
    default:printf("Entered Number is Not Valid");
        break;
    }

}