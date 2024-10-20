#include<iostream>
using namespace std;

class Courses{
    int course_id;
    string course_name;
    int duration;
    public:

    void setID( int ID)
    {
        course_id=ID;
    }
    void setName(string cname)
    {
        course_name=cname;
    }
    void setduration(int cd)
    {
        duration=cd;
    }
    int getID()
    {
        return course_id;
    }
    string getName()
    {
        return course_name;
    }
    int getduration()
    {
       return duration;
    }

};
int main()
{
    Courses c;
    c.setName(MERN);
    c.setID(01);
    c.setduration(6);
    cout<<"Course name- "<<c.getName;
    cout<<"Course ID- "<<c.getID;
    cout<<"Course duration- "<<c.getduration;
    return 0;
}