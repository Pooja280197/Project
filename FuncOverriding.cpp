#include<iostream>
#include<math.h>

using namespace std;

class SimleInterest{
          public:
          double interest(int p,float r,float t){
          return (p*r*t)/100;
          }
};
class CompoundInterest{
          public:
          double interest(int p,float r,float t){
          double amount=p*pow((1+r/100),t);  
          return amount -p;
          }

};
int main()
{
    SimleInterest si;
    cout<<"Simple Interest ="<<si.interest(1000,5,2);
    CompoundInterest ci;
    cout<<"\nCompound Interest ="<<ci.interest(1000,5,2);
    return 0;
}