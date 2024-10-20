#include<iostream>
using namespace std;
// Abstraction through pure virtual function
class Car{
public:
virtual void Engine()=0;
};
class Implementation : public Car{
public:
void Engine(){
    cout<<"Engine start --> imple--> space for logic";
}
};
int main(){
    Implementation c;
    c.Engine();
}