#include <stdio.h>

int main(void) {

	int num;
	int sum = 0;
	printf("Enter your numbers: <EOF> to stop.\n");
	while (scanf("%d", &num) != EOF) {
		sum += num;
		printf("Total: %3d\n", sum);
	}
	printf("\n\n*** End of Program ***\n");
	
	return 0;
}