#include <stdio.h>
#include <stdlib.h>
int *reverse_array(int *original, int length);
int main(void){
	int length = 0;
	int input;
	int original[20];
	int *O = original;
	printf("Enter a sequence of positive integers.\n");
	scanf("%d",&input);
	original[length] = input;
	while(length < 20){
		scanf(" %d",&input);
		if (input < 1){
			break;
		}
		length++;
		original[length] = input;
	}
	int *p = reverse_array(O, length);
	for (int i = 0; i < length + 1; i ++){
		printf("%d ", *(p+i));
	}
}
int *reverse_array(int *original, int length){
	int * copy = (int *)malloc((length+1) * sizeof(int));
	if (copy == NULL){
		printf("malloc failed");
	};
	for (int i = 0; i < length+1; i++){
		copy[i] = *(original + (length - i));
	}
	free(copy);
	return copy;
}