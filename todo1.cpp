//to do list........................................................................................
#include<iostream>
#include<fstream>
using namespace std;
class file{

    public:

    void write(){
       
          ofstream obj("filenew.txt");

          string w;

    if(obj.is_open()){

        cout<<"enter your note :";
        cin>>w;
           obj<<w;
           obj.close();
   }
    cout<<"file created";
  

    }
    void read(){
        
    ifstream obj("filenew.txt");
    
     string s;

    if(obj.is_open()){

       while(getline(obj,s)){
        cout<<s<<endl;
       }  
       obj.close();
    }
    else{
        cout<<"file not created";
    }

    }
};

int main(){

    file f;
    f.write();
    f.read();
}
