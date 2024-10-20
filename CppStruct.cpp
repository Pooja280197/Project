#include<iostream>
using namespace std;

class Area{
    public:
    void Square(int s)
    {
        cout<<"Area of Square ="<<s*s;
    }
    void Traingle(int b,int h)
    {
        cout<<"\nArea of Traingle ="<<0.5*b*h;
    }
    void Rectangle(int l,int b)
    {
        cout<<"\nArea of Rectangle ="<<l*b;
    }

};
int main()
{
    Area a;
    a.Square(5);
    a.Traingle(4,9);
    a.Rectangle(5,6);
    return 0;
}