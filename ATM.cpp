#include<iostream>
using namespace std;
int flag=0;
//Class ATM will perform different functions of ATM Machine
class ATM
{
    public:int balance=10000;int pin=5826;
    public:
    //Login Function will check if pin is correct 
     void Login()

     {  int i=0;
     
        do{
             int pass;
             cout<<"\nPlease enter your Pin\t";
             cin>>pass;
             if(pin==pass)
             {
                cout<<"\nWelcome";
                Menu(); //if pin is correct this will call menu function
                
                }
             else if(i==1){
                cout<<"Wrong Pin\nThis is your last chance\n";
             }
             else 
             {
                cout<<"Wrong Pin\nTry again\n";
             }
             
                
            i++;

        }while(i<=2);//user will get 3 chances to use correct pin

      
     }
     //Menu function will ask user to choose task they want to perform
     void Menu()
     {
        int c;
        cout<<"Please select\n 1.Deposit\n2.Withdrawal\n3.Check Balance\n4.Change Pin ";
        cin>>c;
        //switch case will call the function according to user choice
        switch (c)
        {
        case 1: Deposit();
                break;

        case 2: Withdrawal();
                break;
        case 3: Check_Balance();
                break;
        case 4: change_pin();
                break;                        
        
        default:cout<<"\nInvalid Choice";
            break;
        }

     }
     //Deposit function is used to deposit amount 
     void Deposit(){
        int dep;
        cout<<"Please Enter the amount you want to deposit";
        cin>>dep;
        cout<<"\nThank You\nAmount Rs."<<dep<<"\tis deposited to your account";
        balance=balance+dep;
     }
     //Withdrawal function is used to withdraw amount
     void Withdrawal(){
        int with;
        cout<<"Please Enter the amount you want to withdraw";
        cin>>with;
        if(with<balance){
        cout<<"\nThank you\nPlease collect your cash Rs."<<with;
        }
        else{
            cout<<"The amount you want to withdraw is greater than your balance";
        }
        balance=balance-with;
     }
     //Check_Balance function will display account balance;
     void Check_Balance(){
        cout<<"\nYour Account Balance = Rs."<<balance;
     }
     //change_pin function will change the pin of ATM
     void change_pin(){
        int npin;
        cout<<"Please Enter new Pin";
        cin>>npin;
        pin=npin;
        cout<<"\nThank you\nYour ATM pin is updated";
     }

 
};
int main()
{
    int task;
    ATM m;              //m is object of ATM class
    m.Login();          //this will call login function
    
    //while loop will ask user if they again want to perform any task
    while(flag!=1){
    cout<<"\nDo you want to do any more task\nSelect 1.Yes\n2.No";
    cin>>task;
                {
                     if(task==1){
                        m.Menu();

                     }
                     else{
                        flag=1;
                     }
                }
    }
    return 0;
}