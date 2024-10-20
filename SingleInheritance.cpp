#include<iostream>
using namespace std;
// single inheritance
class Area{
public:
void Rectangle(int l, int b){
cout<<l*b;
}
};
class Cal : public Area{
};
int main(){
    Cal obj;
    obj.Rectangle(6,9);
    return 0;
}