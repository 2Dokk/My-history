#include <stdio.h>

int main(void){
	FILE *inFp, *outFp;
	char name[20];
	int age; double height; int state;
	double averageHeight = 0; 
	int averageAge = 0;
	int count = 0;
	int input = 0;

	inFp = fopen("studentIn.txt", "r");
	if (inFp == NULL){
		printf("input file open error! \n");
		return 1;
	}

	outFp = fopen("studentOut.txt","w");

	if(outFp == NULL){
		printf("output file open error! \n");
		return 1;
	}

	while (1){
		count += 1;
		state = fscanf(inFp, "%s %d %1lf", name, &age, &height);
		if (state == EOF) break;
		input = fprintf(outFp, "%.1lf %d %s\n", height, age, name);
		averageAge += age;
		averageHeight += height;
		printf("%d\n", input);
	}
	averageAge %= count;
	averageHeight /= count;
	fprintf(outFp,"Average height: %.1lf Average age: %d\n", averageHeight,averageAge);
	fclose(inFp);
	fclose(outFp);
	return 0;
}