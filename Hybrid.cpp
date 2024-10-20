#include<iostream>
using namespace std;

class Details{
    public:void Student(){
        cout<<"Roll number -123";
    }

};
class Marks{
    public:void marks(){
        cout<<"\nmarks obtained 90 out of 100";
    }
};
class Subject:public Marks{
    public:void sub(){
        cout<<"\nScience";
    }

};
class Display:public Details,public Subject{
    

};

int main()
{
    Display d;
    d.Student();
    d.marks();
    d.sub();
    return 0;
}