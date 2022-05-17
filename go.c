#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	FILE *fp, *outFp;
    char ch;
    int ct;
	int upper = 0;
	int lower = 0;
	int arabic = 0;
	int blank = 0;
    fp = fopen("input.txt","r");//읽기 모드로 파일 열기
	outFp = fopen("output.txt","w");
    if(fp == NULL)
    {
        printf("파일 열기 실패");//에러 출력
        return 1;
    }
	if (outFp == NULL){
		printf("output file open error!\n");
		return 1;
	}
    while((ch = fgetc(fp)) != EOF)//무한 반복
    {
        if((ch>='0')&&(ch<='9'))
    {
        arabic++;
    }
    if((ch>='a')&&(ch<='z'))
    {
        lower++;
    }
    if((ch>='A')&&(ch<='Z'))
    {
        upper++;
    }
    if(ch == ' ')
    {
        blank++;
    }
    if(ch == '\n')
    {
		blank ++;
    }
	}
	fprintf(outFp,"Number of upper case letters : %d\nNumber of lower case letters : %d\nNumber of arabic characters : %d\nNumber of blanks : %d\n",upper, lower,arabic,blank);
    fclose(fp);//파일 스트림 닫기
	fclose(outFp);
    printf("Number of upper case letters : %d\nNumber of lower case letters : %d\nNumber of arabic characters : %d\nNumber of blanks : %d\n",upper, lower,arabic,blank);
    return 0;
}