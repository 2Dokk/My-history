#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
	int range;
	srand(time(NULL));
	range = (6 - 1) + 1;
	printf("\nThe random number is %d\n", rand() % range * 3 + 1);

	return 0;
}