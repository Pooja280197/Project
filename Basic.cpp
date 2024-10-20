#include<iostream>
using namespace std;

class Myclass{
    public://access specifier
    void fun()
    {
        cout<<"I am function";
    }
};
int main()
{
    Myclass M;//Creating an object
    M.fun(); //function calling
    return 0;
}