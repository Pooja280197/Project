#include<iostream>
#include<fstream>
using namespace std;
write file or create file..........................
int main(){

    ofstream obj("file.doc");

    if(obj.is_open()){

        obj<<"hello siddharth";
        obj.close();
    }
    cout<<"file created";
    return 0;
}

int main(){

    ifstream obj("file.doc");
    
     string s;

    if(obj.is_open()){

       while(getline(obj,s)){
        cout<<s<<endl;
       }  
       obj.close();
    }
}

