# Git Hands-on Lab 1

## Objectives

- Familiarize yourself with Git commands such as:
  - `git init`
  - `git status`
  - `git add`
  - `git commit`
  - `git push`
  - `git pull`
- Configure Git on your local machine.
- Configure a default editor for Git (VS Code in this setup).
- Create and initialize a local Git repository.
- Add, commit, and push files to a remote GitHub repository.

---

## Step 1: Check Git Installation

**Command**

```bash
git --version
```

---

## Step 2: Configure Git Username

**Command**

```bash
git config --global user.name "Rishabh "
```

---

## Step 3: Configure Git Email

**Command**

```bash
git config --global user.email "Singhrishabh6062@gmail.com"
```

---

## Step 4: Verify Git Configuration

**Command**

```bash
git config --list
```

---

## Step 5: Check Notepad++ from Git Bash

**Command**

```bash
notepad++
```

---

## Step 6: Set Notepad++ as Default Git Editor

**Command**

```bash
git config --global core.editor "notepad++"
```

---

## Step 7: Verify Default Editor

**Command**

```bash
git config --global core.editor
```

> **Note:** In my setup, **Visual Studio Code (VS Code)** is used as the default Git editor instead of Notepad++.

---

## Step 8: Create a Local Repository

**Command**

```bash
mkdir GitDemo
cd GitDemo
git init
```

---

## Step 9: Check Repository Status

**Command**

```bash
git status
```

---

## Step 10: Create a File

**Command**

```bash
echo "Hello Git" > hello.txt
```

---

## Step 11: Check Repository Status Again

**Command**

```bash
git status
```

---

## Step 12: Add File to Staging Area

**Command**

```bash
git add hello.txt
```

---

## Step 13: Verify Staged File

**Command**

```bash
git status
```

---

## Step 14: Commit Changes

**Command**

```bash
git commit -m "Initial Commit"
```

---

## Step 15: Connect Remote Repository

**Command**

```bash
git remote add origin https://github.com/Rishabhchandel8989
```

---

## Step 16: Rename Branch

**Command**

```bash
git branch -M main
```

---

## Step 17: Push Repository

**Command**

```bash
git push -u origin main
```

---

## Step 18: Pull Latest Changes

**Command**

```bash
git pull origin main
```