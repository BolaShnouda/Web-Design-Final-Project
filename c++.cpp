#include <iostream>
#include <vector>
using namespace std;

void rec(vector<int>& q, int end, vector<int>& res)
{
    if (end == 0) return;

    int mx = 0, idx = 0;
    for (int i = 0; i < end; i++)
        if (q[i] > mx){
            mx = q[i];
            idx = i;
        }

    for (int i = idx; i < end; i++)
        res.push_back(q[i]);

    rec(q, idx, res);
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        vector<int> q(n);
        for (int i = 0; i < n; i++)
            cin >> q[i];

        vector<int> res;
        rec(q, n, res);

        for (int i = 0; i < n; i++)
            cout << res[i] << " \n"[i == n-1];
    }
    cout<<"redy";
}