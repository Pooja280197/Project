#include<iostream>
#include<fstream>
using namespace std;

class Book{
    public:

    void write(){
        ofstream re("book.txt");
         
          if(re.is_open()){

            string out;

              cout<<"-----TO-DO LIST-----"<<endl<<endl;
              cout<<"enter the note you want to write";
              cin>>out;
              re<<out;
              re.close();

    }
    cout<<"file created";
    };
    void read(){

        ifstream wr("book.txt");
 
        if(wr.is_open()){

          string a; 

            while(getline(wr,a)){
                cout<<a<<endl;
            }
              wr.close();
        
        }

    }
};

int main(){
    Book br;
    br.wtite();
    br.read();
}
