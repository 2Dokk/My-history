#include <stdio.h>
#include <stdlib.h>

int **transpose(int **matrix, int m, int n);
void printMatrix(int **martix, int m, int n);
int main(void){
	int rows;
	int cols;
	printf("Number of Rows : ");
	scanf("%d",&rows);
	printf("Number of Cols : ");
	scanf("%d",&cols);
	srand(20211073);
	int ** matrix = (int **)malloc(rows * sizeof(int));
	printf("seed번호 20211073로 생성된 Matrix\n");
	for (int i = 0; i < rows; i++){
		*(matrix + i) = (int *)malloc(cols * sizeof(int));
	}
	for (int i = 0; i < rows; i++){
		for (int j = 0; j < cols; j++){
			*(*(matrix + i)+ j) = rand() % 100 + 1;
		}
	}

	printMatrix((int**)matrix, rows, cols);
	int ** matrix0 = transpose((int**)matrix, rows, cols);
	printf("Transpose된 Matrix\n");
	printMatrix((int**)matrix0, cols, rows);
	for (int i = 0; i < rows; i++) {
		free(matrix[i]);
	}
	free(matrix);
	for (int i = 0; i < cols; i++) {
		free(matrix0[i]);
	}
	free(matrix0);
	return 0;
}
int **transpose(int **matrix, int m, int n){
	int ** trans = (int **)malloc(n * sizeof(int));
	for (int i = 0; i < n; i++){
		*(trans + i) = (int *)malloc(m * sizeof(int));
	}
	for (int i = 0; i < m; i++){
		for (int j = 0; j < n; j++){
			*(*(trans + j)+ i) = *(*(matrix + i)+ j);
		}
	}
	return (int**)trans;
}
void printMatrix(int **matrix, int m, int n){
	for (int i = 0; i < m; i++){
		for (int j = 0; j < n; j++){
			printf("%d ",*(*(matrix + i)+ j));
		}
		printf("\n");
	}
}