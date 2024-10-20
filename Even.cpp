#include<iostream>
using namespace std;

class Even{
public:
void checkEvenOdd(int n)
{
     if(n%2==0)
     {
      cout<<"Even ";
     }
     else{
        cout<<"odd";
     }
}
};
int main()
{
    int n=5;
    Even E;
    E.checkEvenOdd(n);
    return 0;

    
}

