#include <iostream>
using namespace std;

class Shape
{
private:
    string color;

public:
    void setcolor(string c)
    {
        color=c;
    }
    int getcolor(){
        return color;
    }
    void getAreaS(int s)
    {
        cout<<"Area of Square ="<<s*s;
    }
     void getAreaR(int l,int b)
    {
        cout<<"Area of Rectangle ="<<l*b;
    }
     void getAreaT(int base,int h)
    {
        cout<<"Area of Traingle ="<<0.5*base*h;
    }
};
class Square : public Shape
{
public:
    void colors()
    {
    cout << "Want color do you want to fill in square ";
    cin>>color;
    cout << "color of square =" << color;
    }
};
class Rectangle : public Shape
{
public:
    void color()
    {
    cout << "Want color do you want to fill in square ";
    cin>>color;
    cout << "color of square =" << color;
    }
   
};
class Traingle : public Shape
{
public:
    void color()
    {
    cout << "Want color do you want to fill in square ";
    cin>>color;
    cout << "color of square =" <<color;
    }
    
};
int main()
{
    Square s;
    s.colors();
    s.getAreaS(5);
//     Rectangle r;
//     r.color();
//     r.getAreaR(8,6);
//     Traingle t;
//     t.color();
//     t.getAreaT(5,10);
    return 0;
}