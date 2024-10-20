#include<iostream>
using namespace std;

class Apple{
    int a;
    public:
    void setapple()
    {
        cout<<"Enter number of apples";
        cin>>a;
        
    }
    int getapple()
    {
        return a;
    }
         
};
class Mango
{
int m;
    public:
    void setmango()
    {
        cout<<"Enter no. of Mangoes";
        cin>>m;
        
    }
    int getmango()
    {
        return m;
    }

};
class Fruit :public Apple,public Mango{
    public:
    void total(int a,int b)
    {
        cout<<"Total numbers of fruits = "<<a+b;
    }
};
int main()
{   
    int a,b;
    Fruit f;
    f.setmango();
    a=f.getmango();
    f.setapple();
    b=f.getapple();
    f.total(a,b);
    return 0;
}