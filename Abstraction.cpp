#include<iostream>
using namespace std;

class Taxi{
    private:
    float fare=10;//hidden or we cannot change its value
    public:
    float meter(float distance)
    {
        return fare*distance;
    }
};
int main()
{
    Taxi x;
    float kms;
    cout<<"Enter no. of kilometers you want to travel ";
    cin>>kms;
    cout<<"Total fare = "<<x.meter(kms);
}