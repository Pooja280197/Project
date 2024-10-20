#include<iostream>
using namespace std;
class Vehicle{
    string make;
    string model;
    int year;
    public:
    void setVeh(string m,string mo,int y)
    {
       make=m;
       model=mo;
       year=y;
    }
    void getVeh()
    {
        cout<<"Company name - "<<make;
        cout<<"\nModel - "<<model;
        cout<<"\nYear - "<<year;
    }

};
class Car :public Vehicle
{
 
};
class Bicycle:public Vehicle{

};
class Motorcycle : public Vehicle
{

};
int main()
{
    Car c;
    Bicycle b;
    Motorcycle m;
    c.setVeh()
    return 0;
}