#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int insertString(char* str1, char* str2, int idx);

int main(void)
{
    char buf[1000] = "Necessity is the Mother of Invention.";
    char buff[500];
    char * str1 = buf;
    char * str2 = buff;
    int index;
    printf("This program inserts a string to a specific position you want.\n\n");
    printf("Original string : %s\n",str1);
    printf("Enter a string to insert : ");
    fgets(buff,sizeof(buff), stdin);
    str2[strlen(str2)-1] = '\0';
    printf("Where to do you want to insert? : ");
    scanf("%d",&index);
    printf("\nResult : ");
    if (strlen(str1) < index){
        return 0;
    }
    insertString(buf, buff, index);
    fputs(str1, stdout);
    return 0;
}

int insertString(char* str1, char* str2, int idx){
    char bufff[500];
    strncpy(bufff, str1, idx);
    int len = strlen(str1);
    for (int i = 0; i < (len - idx); i ++){
        str1[i] = str1[i + idx];
    }
    str1[len - idx] = '\0';
    strcat(bufff, str2);
    strcat(bufff, str1);
    for(int i = 0 ; i< strlen(bufff);i++){
        str1[i] = bufff[i];
    }
    return 0;
}
