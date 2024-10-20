#include<iostream>
using namespace std;

class Binary {
public:
    int search(int Arr[], int s, int e, int temp) {
        if (s <= e) {
            int m = s + (e - s) / 2;
            if (Arr[m] == temp) {
                cout << "Element found at index " << m;
                return m;
            }
            else if (Arr[m] > temp) {
                return search(Arr, s, m - 1, temp);
            }
            else {
                return search(Arr, m + 1, e, temp);
            }
        }
        cout << "Element not found";
        return -1;
    }
};

int main() {
    int Arr[] = {2, 6, 8, 9, 45, 99, 230};
    int s = 0, e = 6, temp;
    cout << "Enter the element you want to find: ";
    cin >> temp;
    Binary b;
    b.search(Arr, s, e, temp);
    return 0;
}