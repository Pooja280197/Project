#include<iostream>
using namespace std;
class Mammals{
       public:
       void dis()
       {
        cout<<"I am Mammal\n";
       }
};
class MarineAnimals{
        public:
        void disp()
       {
        cout<<"\nI am Marine Animal\n";
       }
};
class BlueWhale:public Mammals ,public MarineAnimals
{
        public:
        void display()
        {
            cout<<"\nI belong to both the categories : Mammals as well as Marine Animals";
        }
};
int main()
{
    Mammals m;
    m.dis();
    MarineAnimals ma;
    ma.disp();
    BlueWhale b;
    b.dis();
    b.disp();
    b.display();
    return 0;
}