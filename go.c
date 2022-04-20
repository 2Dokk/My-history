#include <stdio.h>

int Add(int a, int b);
int Sub(int a, int b);
int Mul(int a, int b);
float Div(int a, int b);

int main(void)
{
	int num1, num2;

	printf("First num : ");
	scanf("%d", &num1);
	printf("Second num : ");
	scanf("%d", &num2);

	printf("Add : %d\n", Add(num1, num2));
	printf("Sub : %d\n", Sub(num1, num2));
	printf("Mul : %d\n", Mul(num1, num2));
	printf("Div : %f\n", Div(num1, num2));

	return 0;
}

int Add(int a, int b)
{
	return a + b;
}

int Sub(int a, int b)
{
	return a - b;
}

int Mul(int a, int b)
{
	return a * b;
}

float Div(int a, int b)
{
	return (float)a / (float)b;
}