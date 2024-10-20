//Encapsulation - binding or wrapping data into single unit
#include<iostream>
using namespace std;
class Trainee{
string Trainees_Name;
string Batch;
int Tr_ID;
public:
void setTrName(string tr_name){
    Trainees_Name = tr_name;
}
void setBatch(string bth){
    Batch= bth;
}
void setID(int id){
    Tr_ID = id;
}
string getTrName(){
    return Trainees_Name;
}
string getBatch(){
    return Batch;
}
int getID(){
    return Tr_ID;
}
};
int main()
{
Trainee t;
string nm;
cout<<"\n Enter your name";
cin>>nm;
t.setTrName(nm);
t.setID(101);
t.setBatch("MERN");
cout<<"\n Trainee's Name is: "<<
t.getTrName();
cout<<"\n Trainee's ID is: "<<
t.getID();
cout<<"\n Trainee's Batch is: "<<
t.getBatch();
return 0;
}