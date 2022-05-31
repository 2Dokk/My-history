#include <stdio.h>
#include <stdlib.h>

int printPerson(struct person p);

typedef struct{
    char name[20];
    char mail[20];
    int mobile;
} PROFESSOR;
typedef struct{
    char name[20];
    char major[20];
    int ID;
    float cgpa;
} STUDENT;
typedef struct {
    char type;
    union {
        PROFESSOR prof;
        STUDENT stu;
    }u;
}PERSON;
PERSON person;

int main(void){
    PROFESSOR person1;
    STUDENT person2;
    person1.name = "james";
    person1.mail = "james@hanmail.net";
    person1.mobile = 1097063456;
    person2.name = "david";
    person2.major = "conputer science";
    person2.id = 20010123;
    person2.cgpa = 3.10;
};

int printPerson(struct person p){
    
}