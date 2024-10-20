#include<iostream>
#include <stdlib.h>  
#include <time.h>
using namespace std;

class Marks{
    int Roll_no;
    string name;
    int marks;
    public:
    void setdetails(int t)
    {
    srand(time(NULL));
    Roll_no= rand()% t + 1;
    }
    void setname(){
        
        cout<<"Enter name of student -";
        cin>>name;
    }
    void setmarks(int i)
    {
        marks=i;
    }
    };
    int getdetails()
    {
        return Roll_no;
    }
    string getname()
    {
        return name;
    }
    
class Physics:public Marks{
    int p;
    public:
    void setpm(){
      cout<<"Physics Marks";
      cin>>p;
      void setmarks(p)
    }
};
class Chemistry:public Marks{
    int c;
    public:
    void setcm(){
    cout<<"Chemistry Marks -";
    cin>>c;
    void setmarks(c)
    }
};
class Maths:public Marks{
    int m;
    public:
    void setmm(){
    cout<<"Maths Marks -";
    cin>>m;
    void setmarks(m)
    }
};
int main()
{
    int t;
    cout<<"Enter total students in the class";
    cin>>t;
    Physics ph;
    Chemistry ch;
    Maths ma;
    for(int i=1;i=<=t;i++)
    {
        ph.setdetails(i);
        ph.setname();
        ph.setpm();
        ch.setcm();
        ma.setmm();
    }
    return 0;

}