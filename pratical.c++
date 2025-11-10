// Write a program to create a binary Tree and print:
//  Inorder Traversal
//  Postorder Traversal

#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

void inorder(Node* root) {
    if (root == nullptr)
        return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

void postorder(Node* root) {
    if (root == nullptr)
        return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

int main() {
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);

    cout << "Inorder traversal: ";
    inorder(root);
    cout << endl;

    cout << "Postorder traversal: ";
    postorder(root);
    cout << endl;

    return 0;
}


// write a program to implement a stack using an array with the following operation:
//        push
//        pop 
//        display

#include <iostream>
using namespace std;

#define MAX 5

int stack[MAX];
int first = -1;

void push(int n) {
    if (first == MAX - 1) {
        cout << "Stack overflow" << endl;
    } else {
        first++;
        stack[first] = n;
        cout << n << " push to stack" << endl;
    }
}

void pop() {
    if (first == -1) {
        cout << "Stack underflow" << endl;
    } else {
        cout << stack[first] << " pop from stack" << endl;
        first--;
    }
}

void display() {
    if (first == -1) {
        cout << "Stack is empty" << endl;
    } else {
        cout << "Stack elements: ";
        for (int i = first; i >= 0; i--) {
            cout << stack[i] << " ";
        }
        cout << endl;
    }
}

int main() {
    push(1);
    push(2);
    push(3);
    pop();
    display();
    return 0;
}