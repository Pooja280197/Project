#include <iostream>
using namespace std;

class Animal
{
    string name;
    int age;

public:
    void NameandAge()
    {
        cout << "Enter name of animal";
        cin >> name;
        cout << "Enter age of animal";
        cin >> age;
    }
};
class Dog : public Animal
{
public:
    void Sound()
    {
        cout << "Sound of Dog - BARK";
    }
};
class Cat : public Animal
{
public:
    void Sound()
    {
        cout << "Sound of Cat - Meow";
    }
};
class Cow : public Animal
{
public:
    void Sound()
    {
        cout << "Sound of Cow - Moo";
    }
};

int main()
{
    Dog d;
    d.NameandAge();
    d.Sound();
    Cat c;
    c.NameandAge();
    c.Sound();
    Cow co;
    co.NameandAge();
    co.Sound();
    return 0;
}
