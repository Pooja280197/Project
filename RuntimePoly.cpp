#include<iostream>
using namespace std;

// compile time polymorphism 
//--> achieve through function overloading
// static binding 
// Early binding 

class Areacal{
public:

double Area(double radius){
return 3.14*radius*radius;
}

int Area(int side){
return side*side;
}

int Area(int length, int bredth){
return length*bredth;
}

double Area(double base,double hight){
return 0.5*base*hight;
}

double Area(double radius, int hight){
return 3.14*radius*radius*hight;
}

// void caller(){
//    cout<<"\n Area of circle is: "<<Area(3.5);

// cout<<"\n Area of Square is: "<<Area(5);

// cout<<"\n Area of rectangle is: "<<Area(3,5);

// cout<<"\n Area of Triangle is: "<<Area(3.5,5.2);

// cout<<"\n Area of cylinder is: "<<Area(3.5,10);

// }
};

int main(){
  Areacal a;
 // a.caller();

    cout<<"\n Area of circle is: "<<a.Area(3.5);

cout<<"\n Area of Square is: "<<a.Area(5);

cout<<"\n Area of rectangle is: "<<a.Area(3,5);

cout<<"\n Area of Triangle is: "<<a.Area(3.5,5.2);

cout<<"\n Area of cylinder is: "<<a.Area(3.5,10);


    return 0;
}