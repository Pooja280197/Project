#include <iostream>
using namespace std;

class BankAccount
{
    int Bank_Balance=100000;

public:
    // Menu function is used to ask customer which function they want to perform
    void Menu()
    {
        int c;
        cout << "Hey Welcome\nPlease select\n1.Deposit\n2.Withdrawal\n3.Check Balance\n";
        cin >> c;
        // switch case will call the function according to user choice
        switch (c)
        {
        case 1:
            Deposit();
            break;

        case 2:
            Withdrawal();
            break;
        case 3:
            Check_Balance();
            break;

        default:
            cout << "\nYou have chose invalid option\n";
            break;
        }
    }

    // Deposit function is used to deposit amount
    void Deposit()
    {
        int dep;
        cout << "Please Enter the amount you want to deposit";
        cin >> dep;
        cout << "\nThank You\nAmount Rs." << dep << "\tis deposited to your account";
        Bank_Balance = Bank_Balance + dep;
    }
    // Withdrawal function is used to withdraw amount
    void Withdrawal()
    {
        int with;
        cout << "Please Enter the amount you want to withdraw";
        cin >> with;
        if (with < Bank_Balance)
        {
            cout << "\nThank you\nPlease collect your cash Rs." << with;
        }
        else
        {
            cout << "The amount you want to withdraw is greater than your balance";
        }
        Bank_Balance = Bank_Balance - with;
    }
    // Chech_Balance function is used to display current balance in customer account
    void Check_Balance()
    {
        cout << "\nYour Account Balance = Rs." << Bank_Balance;
    }
};
int main()
{
    BankAccount b;
    b.Menu();
    int flag = 0, task;
    while (flag != 1)
    {
        cout << "\nDo you want to do any more task\nSelect 1.Yes\n2.No";
        cin >> task;
        {
            if (task == 1)
            {
                b.Menu();
            }
            else
            {
                flag = 1;
            }
        }
    }
    return 0;
}
