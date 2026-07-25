# Git Hands-on Lab 3

## Objectives

- Explain branching and merging in Git.
- Understand how to create a branch request in GitLab/GitHub.
- Understand how to create a merge request in GitLab/GitHub.
- Create a new branch, make changes, merge it into the main branch, and delete the branch after merging.

---

## Prerequisites

- Git is installed and configured.
- VS Code is configured as the default editor (in my setup).
- A local Git repository (`GitDemo`).
- A remote GitHub/GitLab repository.
- P4Merge is installed and configured (if required for visual comparison).

---

# Branching

## Step 1: Navigate to the Repository

**Command**

```bash
cd GitDemo
```

---

## Step 2: Create a New Branch

**Command**

```bash
git branch GitNewBranch
```

---

## Step 3: List All Local and Remote Branches

**Command**

```bash
git branch -a
```

> **Note:** The `*` symbol indicates the currently active branch.

---

## Step 4: Switch to the New Branch

**Command**

```bash
git checkout GitNewBranch
```

> **Alternative (Modern Git)**

```bash
git switch GitNewBranch
```

---

## Step 5: Create a New File

**Command**

```bash
echo "This file belongs to GitNewBranch." > branchfile.txt
```

---

## Step 6: Check Repository Status

**Command**

```bash
git status
```

---

## Step 7: Stage the New File

**Command**

```bash
git add branchfile.txt
```

---

## Step 8: Commit the Changes

**Command**

```bash
git commit -m "Added branchfile.txt in GitNewBranch"
```

---

## Step 9: Verify Repository Status

**Command**

```bash
git status
```

---

# Merging

## Step 10: Switch Back to the Main Branch

**Command**

```bash
git checkout main
```

> **If your repository uses `master` instead of `main`:**

```bash
git checkout master
```

---

## Step 11: Compare the Main Branch with GitNewBranch (Command Line)

**Command**

```bash
git diff main GitNewBranch
```

> **If using `master`:**

```bash
git diff master GitNewBranch
```

---

## Step 12: Compare Branches Using P4Merge

**Command**

```bash
git difftool main GitNewBranch
```

> **If using `master`:**

```bash
git difftool master GitNewBranch
```

> **Note:** This command opens **P4Merge** to display visual differences between the branches.

---

## Step 13: Merge the Branch into Main

**Command**

```bash
git merge GitNewBranch
```

---

## Step 14: View Commit History

**Command**

```bash
git log --oneline --graph --decorate
```

---

## Step 15: Delete the Branch

**Command**

```bash
git branch -d GitNewBranch
```

---

## Step 16: Verify Repository Status

**Command**

```bash
git status
```

---

## Step 17: Push the Updated Main Branch

**Command**

```bash
git push origin main
```

> **If your repository uses `master`:**

```bash
git push origin master
```