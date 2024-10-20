#include<iostream>
using namespace std;
int main()
{
    int temp,s=0,m;
    int Ary[]={3,5,8,13,32,45,78};
    int e =(sizeof(Ary))/4-1;
    cout<<"Enter a value to search";
    cin>>temp;
    while(s<=e){

    m=s+(e-s)/2;
    if(Ary[m]==temp){
        cout<<"Element found at index "<<m;
        break;
    }
    else if(Ary[m]<temp)
    {
          s=m+1;
  
       
    }
    else{
            e=m-1;
    
    }
    }
    return 0;
}