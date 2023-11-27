N = int("5")
A = list(map(int, "4 1 5 2 3".split()))
M = int("4")
arr = list(map(int, "1 3 7 9 5".split()))
A.sort()

for i in arr:
    print(int(i in A))

n, target = list(map(int, "5 1".split()))
array = list(map(int, "1 2 3 4 5".split()))

# 반복문으로 구현한 이진 탐색
def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2

        # 원하는 값 찾은 경우 인덱스 반환
        if array[mid] == target:
            return mid
        # 원하는 값이 중간점의 값보다 작은 경우 왼쪽 부분(절반의 왼쪽 부분) 확인
        elif array[mid] > target:
            end = mid - 1
        # 원하는 값이 중간점의 값보다 큰 경우 오른쪽 부분(절반의 오른쪽 부분) 확인
        else:
            start = mid + 1

    return None

n, M = list(map(int, input().split()))
arr = list(map(int, input().split()))

result = binary_search(array, target, 0, n - 1)
if result is None:
    print(0)
else:
    print(1)

print(N,A,M,arr)

def f(n):
    if n==1:
        return 1
    elif n==2:
        return 2
    elif n==3:
        return 4
    else:
        return f(n-3)+f(n-2)+f(n-1)

for i in range(T):
    n = 10
    print(f(n))


n = int(input())
# def solution(n):
n=17
arr = [0]*(n+1)
for i in range(2,n+1):
    if i%3==0:
        arr[i] = min(arr[i//3], arr[i-1]) + 1
    elif i%2==0:
        arr[i] = min(arr[i//2], arr[i-1]) + 1
    else:
        arr[i] = arr[i-1] + 1
    # return arr[n]
print(arr[17])

N= 27
a=0
b=0
def solution(N):
    for i in reversed(range(N//5+1)):
        if (N-i*5)%3==0:
            return i+(N-i*5)//3
    return -1
print(solution(N))

n = int(input())
sugar = [5001] * (n+5)
sugar[5] = sugar[3] = 1

for i in range(6,n+1):
    sugar[i] = min(sugar[i-3], sugar[i-5]) + 1

print(sugar[n] if sugar[n]<5001 else -1)