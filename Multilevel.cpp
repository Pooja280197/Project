#include<iostream>
using namespace std;
class Insect{
 protected:
 void Grasshopper(){
    cout<<"\n I am grass hopper-- i eat grass";
 }
};
class Amphibian :public Insect{
 protected:
    void frog(){
        cout<<"\n i am frog --> i eat insect";
        Grasshopper();
    }
};
class Reptile : public Amphibian{
 protected:
    void snack(){
        cout<<"\n i am snack ---> i eat Amphibian";
        frog();
    }
};
class Bird : public Reptile{
 protected:
    void Eagle(){
        cout<<"\n I am eagle --> i eat reptile";
        snack();
    }
};
class Chinese : public Bird{
 public:
    void chini(){
cout<<"\n I am chiniese --> i eat whatever i see";
Eagle();
    }
};
int main(){
    Chinese c;
    c.chini();
return 123;
}