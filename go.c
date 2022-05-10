#include <stdio.h>
#include <stdlib.h>

void delete_char(char *, int num, char);

int main(void){
	char Arr[] = {'G','O','O','D','M','O','R','N','I','N','G','\0'};
	char *ArrA = Arr; 
	char letter;
	printf("삭제 전 : ");
	for (int i = 0; i < sizeof(Arr); i++){
		printf("%c",Arr[i]);
	}
	printf("\n");
	printf("삭제할 문자 : ");
	scanf("%c",&letter);
	printf("삭제 후 : ");
	int size = sizeof(Arr);
	delete_char(ArrA,size,letter);
	for (int i = 0; i < size; i++){
		printf("%c",Arr[i]);
	}
	return 0;
}

void delete_char(char *Arr, int num, char deleteC){
	char * Arr1 = (char *)malloc(num * sizeof(char));
	int count = 0;
	for (int i = 0; i < num ; i ++){
		if (Arr[i] != deleteC){
			Arr1[i] = Arr[i];
		} else{
			count ++;
		}
	}
	int check = 0;
	int rCheck = 0;
	for (int k = 0; k < num; k++){
		if (Arr1[k] == '!'){
			Arr[num - rCheck] = Arr1[k];
			rCheck ++;
		} else{
			Arr[check] = Arr1[k];
			check ++;
		}
	}
	free(Arr1);
}