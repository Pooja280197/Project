#include<stdio.h>
#include<stdlib.h>
struct Student
{
    char Name[20];
    int age;
    int Roll_no;
};
void main()
{
    int size;
    printf("Enter how many entries you want to enter");
    scanf("%d",&size);

    struct Student s[size];
    for (int i =0;i<size;i++){

    printf("\nEnter Name:");
    scanf("%s",&s[i].Name);
    printf("\nEnter age");
    scanf("%d",&s[i].age);
    printf("\nEnter roll no");
    scanf("%d",&s[i].Roll_no);
    }
     for (int i =0;i<size;i++){
        printf("\nName: %s ",s[i].Name);
        printf("\n age: %d",s[i].age);
        printf("\n Roll no: %d",s[i].Roll_no);
     }
     



}
