# Git Hands-on Lab 5

## Objectives

- Explain how to clean up and synchronize a local repository with a remote Git repository.
- Understand how to pull the latest changes from the remote repository.
- Push local commits to the remote repository.

---

## Prerequisites

- Git is installed and configured.
- VS Code is configured as the default editor (in my setup).
- Hands-on Lab 4 completed.
- A local Git repository (`GitDemo`).
- A remote GitHub/GitLab repository.

---

# Clean Up and Push to Remote Repository

## Step 1: Navigate to the Repository

**Command**

```bash
cd GitDemo
```

---

## Step 2: Switch to the Main Branch

**Command**

```bash
git checkout main
```

---

## Step 3: Verify the Repository is in a Clean State

**Command**

```bash
git status
```

> **Expected Result:**  
> The working tree should be clean.

---

## Step 4: List All Available Branches

**Command**

```bash
git branch -a
```

> This command displays both local and remote branches.

---

## Step 5: Pull the Latest Changes from the Remote Repository

**Command**

```bash
git pull origin main
```

> This downloads and merges the latest changes from the remote repository into the local `main` branch.

---

## Step 6: Push Local Changes to the Remote Repository

**Command**

```bash
git push origin main
```

> This uploads all pending local commits from the previous hands-on to the remote repository.

---

## Step 7: Verify Repository Status

**Command**

```bash
git status
```

> **Expected Result:**  
> The working tree should be clean and synchronized with the remote repository.

---

## Step 8: Verify Changes in the Remote Repository

Open your GitHub/GitLab repository in a web browser and verify that:

- The latest commits are visible.
- Newly added or modified files are present.
- The commit history matches the local repository.