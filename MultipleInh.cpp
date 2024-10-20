#include<iostream>
using namespace std;
class Spear{
    public:
    void Body(){
        cout<<"\n Aluminium Body";
    }
    void Engine()
    {
        cout<<"\n V4 Engine";

    }

};
class Fuel{
    public:
    void Petrol(){
        cout<<"\nPremium/Speed";
    }
    void Diesel(){
        cout<<"\n Diesel";
    }

};
class Tyre{
    public:
    void Branded(){
        cout<<"\n MRF";

    }
    void Local(){
        cout<<"\n China";
    }

};
class Audi:public Spear,public Tyre,public Fuel{
    public:
    void Branding(){
        cout<<"\n AUDI";
    }


};

int main(){
    Audi a;
    a.Body();
    a.Branded();
    a.Branding();
    a.Diesel();
    

    return 0;
}
