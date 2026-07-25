# Git Hands-on Lab 2

## Objectives

- Explain Git Ignore (`.gitignore`).
- Understand how to ignore unwanted files and folders using `.gitignore`.
- Implement the `.gitignore` file to exclude specific files and directories from version control.

---

## Prerequisites

- Git environment is already configured.
- A default editor (VS Code in my setup).
- A local Git repository (`GitDemo`).
- A remote GitHub/GitLab repository.

---

## Step 1: Navigate to the Local Repository

**Command**

```bash
cd GitDemo
```

---

## Step 2: Create a `.log` File

**Command**

```bash
touch sample.log
```

> **Alternative (Windows Git Bash)**

```bash
echo "Log File" > sample.log
```

---

## Step 3: Create a `log` Folder

**Command**

```bash
mkdir log
```

---

## Step 4: Create a File Inside the `log` Folder (Optional)

**Command**

```bash
echo "Temporary Log" > log/log1.txt
```

---

## Step 5: Create a `.gitignore` File

**Command**

```bash
touch .gitignore
```

> **Alternative (Windows Git Bash)**

```bash
echo "" > .gitignore
```

---

## Step 6: Open `.gitignore`

**Command**

```bash
code .gitignore
```

> **Note:** In my setup, **Visual Studio Code (VS Code)** is used as the default editor instead of Notepad++.

---

## Step 7: Add Ignore Rules

**Update `.gitignore` with the following content**

```gitignore
*.log
log/
```

---

## Step 8: Save the `.gitignore` File

Save the file after adding the ignore rules.

---

## Step 9: Check Repository Status

**Command**

```bash
git status
```

> **Expected Result:**  
> The `.log` file and the `log/` directory should **not** appear in the list of untracked files. Only the `.gitignore` file (if not yet committed) should appear.

---

## Step 10: Stage the `.gitignore` File

**Command**

```bash
git add .gitignore
```

---

## Step 11: Commit the Changes

**Command**

```bash
git commit -m "Add .gitignore to ignore log files and folders"
```

---

## Step 12: Push the Changes

**Command**

```bash
git push origin main
```

---

## Step 13: Verify Repository Status

**Command**

```bash
git status
```

> **Expected Result:**  
> Working tree should be clean, and any future `.log` files or `log/` folders will be ignored automatically by Git.