#include<iostream>
using namespace std;

class RBI{
    public:
    void rules()
    {
        cout<<"\n In corona,do not bounce any EMI";
    }
};
class HDFC:protected RBI{
   public:void ok(){
    rules();
   }
};
class SBI:protected RBI{
   public:void ok(){
    rules();
   }
};
class ICICI:protected RBI{
   public:void ok(){
    rules();
   }
};
int main(){
    HDFC h;
    h.ok();
    SBI s;
    s.ok();
    ICICI i;
    i.ok();

    return 0;

}


