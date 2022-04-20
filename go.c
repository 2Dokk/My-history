#include <stdio.h>

void Celsius();
void GetCelsius(float* a);
float CelsiustoFahrenheit(float a);
void PrintCelsius(float a);

void Fahrenheit();
void GetFahrenheit(float* a);
float FahrenheittoCelsius(float a);
void PrintFahrenheit(float a);

int main(void)
{
	Celsius();
	Fahrenheit();

	return 0;
}

void Celsius()
{
	float Ctemp, Ftemp;

	GetCelsius(&Ctemp);
	Ftemp = CelsiustoFahrenheit(Ctemp);
	PrintCelsius(Ftemp);
	
	return;
}

void GetCelsius(float* a)
{
	printf("\n���� �µ��� �Է��Ͻÿ� : ");
	scanf("%f", a);
	return;
}

float CelsiustoFahrenheit(float a)
{
	return a * 9.0f / 5.0f + 32.0f;
}

void PrintCelsius(float a)
{
	printf("ȭ�� �µ��� %.2f �Դϴ�\n", a);
	return;
}

void Fahrenheit()
{
	float Ftemp, Ctemp;

	GetFahrenheit(&Ftemp);
	Ctemp = FahrenheittoCelsius(Ftemp);
	PrintFahrenheit(Ctemp);

	return;
}

void GetFahrenheit(float* a)
{
	printf("\nȭ�� �µ��� �Է��Ͻÿ� : ");
	scanf("%f", a);
	return;
}

float FahrenheittoCelsius(float a)
{
	return (a - 32.0f) * 5.0f / 9.0f;
}

void PrintFahrenheit(float a)
{
	printf("���� �µ��� %.2f �Դϴ�\n", a);
	return;
}