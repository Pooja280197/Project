#include<iostream>
using namespace std;


int BinarySearch(int ary[],int s, int e, int target){
    
    if(s<=e){

int m = s + (e-s)/2;   // finding mid index

if(ary[m]==target){  // compraring mid value to the target value

return m;  // returining the index of target value if found
}

else if(ary[m]<target){   // if the vlaue if greater then mid
    return BinarySearch(ary, m+1, e, target);  // treverse right side of array by changing start index by m+1
}
else{
 return BinarySearch(ary, s, m-1, target); // else traget value is less thenthe mid, treverse to left side by m-1
}
}
return false;
}
int main(){

int arr[]= {2,5,8,19,34,78,88,99};// sorted array

int size = sizeof(arr)/sizeof(arr[0]);  // length of array
int t;
cout<<"Enter the value  you want to search";
cin>>t; // value to be serached
int idx = BinarySearch(arr, 0, size-1, t);

if(BinarySearch(arr, 0, size-1, t)){
    
    cout<<"\n Value found at the index "<<idx;

  
}
else{
    
        cout<<"value not found";
 
}
}