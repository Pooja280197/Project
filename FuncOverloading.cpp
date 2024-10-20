#include<iostream>
using namespace std;
class Time
{
  public:
  void Timestamp(int date)
  {
    cout<<"Today's date is "<<date;
  }
  void Timestamp(int date,int month)
  {
    cout<<"\nDisplay date and month "<<date<<"-"<<month;
  }
   void Timestamp(int date,int month,int year)
  {
    cout<<"\nDisplay date,month and year "<<date<<"-"<<month<<"-"<<year;
  }
 
};
int main()
{
    Time t;
    t.Timestamp(10);
    t.Timestamp(10,05);
    t.Timestamp(10,05,2024);
    return 0;
}
