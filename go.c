#include <stdio.h>
int *reverse_array(int *original, int length);
int main(void){
	int length = 0;
	int input;
	int original[20];
	printf("Enter a sequence of positive integers.\n");
	do {
		scanf("%d ",&input);
		if (input < 1){
			break;	
		}
		original[length] = input;
		length++;
	} while (length < 20)
	reverse_array(&original, length);
}

int *reverse_array(int *original, int length){
}