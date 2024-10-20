#include<iostream>
using namespace std;

class Volcanus{
    public:
    string name;
    int salary;
    Volcanus()
    {
        cout<<"I am default Constructor";
    }
    Volcanus(string name,int salary)
    {
        this->name=name;
        this->salary=salary;

    }

};

int main()
{
    Volcanus v1("Pooja\n",1000000);
    cout<<v1.name;
    Volcanus v;
    
    return 0;
}