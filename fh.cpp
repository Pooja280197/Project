#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){

ofstream write;
string str;
write.open("file1.txt",ios::app);
if(write){
cout<<"Enter stuff";
cin>>str;

while(str!="stop"){
 getline(cin,str);
if(str!="stop"){
write<<str<<endl;
}
}

write.close();

}
else{
    cout<<"Unable open file";
}

ifstream read("file1.txt");
if(read.is_open())
{
  string s;
  while(getline(read,s)){
    cout<<s<<endl;
  }
  read.close();


}
}
