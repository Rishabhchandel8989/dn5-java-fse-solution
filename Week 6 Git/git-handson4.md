# Git Hands-on Lab 4

## Objectives

- Explain how to resolve merge conflicts in Git.
- Understand conflict resolution when multiple users modify the same file.
- Learn to use Git merge tools (P4Merge) to resolve conflicts.

---

## Prerequisites

- Git is installed and configured.
- VS Code is configured as the default editor (in my setup).
- Hands-on Lab 3 completed.
- A local Git repository (`GitDemo`).
- P4Merge is installed and configured.

---

# Merge Conflict Resolution

## Step 1: Verify the Main Branch is Clean

**Command**

```bash
git checkout main
git status
```

> **Expected Result:**  
> The working tree should be clean.

---

## Step 2: Create a New Branch

**Command**

```bash
git branch GitWork
git checkout GitWork
```

> **Alternative (Modern Git)**

```bash
git switch -c GitWork
```

---

## Step 3: Create `hello.xml`

**Command**

```bash
echo "<message>Hello from GitWork Branch</message>" > hello.xml
```

---

## Step 4: Check Repository Status

**Command**

```bash
git status
```

---

## Step 5: Stage the File

**Command**

```bash
git add hello.xml
```

---

## Step 6: Commit the Changes

**Command**

```bash
git commit -m "Added hello.xml in GitWork branch"
```

---

## Step 7: Switch Back to Main

**Command**

```bash
git checkout main
```

---

## Step 8: Create the Same File with Different Content

**Command**

```bash
echo "<message>Hello from Main Branch</message>" > hello.xml
```

---

## Step 9: Stage the File

**Command**

```bash
git add hello.xml
```

---

## Step 10: Commit the Changes

**Command**

```bash
git commit -m "Added hello.xml in main branch"
```

---

## Step 11: View Commit History

**Command**

```bash
git log --oneline --graph --decorate --all
```

---

## Step 12: Compare the Branches

**Command**

```bash
git diff main GitWork
```

---

## Step 13: Compare Using P4Merge

**Command**

```bash
git difftool main GitWork
```

> **Note:** This opens P4Merge to visualize the differences.

---

## Step 14: Merge the Branch into Main

**Command**

```bash
git merge GitWork
```

> **Expected Result:**  
> Git detects a merge conflict because both branches modified `hello.xml`.

---

## Step 15: Observe the Conflict Markers

Open `hello.xml`.

The file will contain conflict markers similar to:

```text
<<<<<<< HEAD
<message>Hello from Main Branch</message>
=======
<message>Hello from GitWork Branch</message>
>>>>>>> GitWork
```

---

## Step 16: Resolve the Conflict

Edit `hello.xml` manually or use the configured **3-way merge tool (P4Merge)**.

Example resolved content:

```xml
<message>Hello from Main Branch</message>
<message>Hello from GitWork Branch</message>
```

Save the file.

---

## Step 17: Stage the Resolved File

**Command**

```bash
git add hello.xml
```

---

## Step 18: Complete the Merge Commit

**Command**

```bash
git commit -m "Resolved merge conflict in hello.xml"
```

---

## Step 19: Verify Repository Status

**Command**

```bash
git status
```

---

## Step 20: Add Backup Files to `.gitignore`

**Command**

```bash
echo "*.orig" >> .gitignore
```

> `.orig` files are backup files commonly created during merge conflict resolution.

---

## Step 21: Stage `.gitignore`

**Command**

```bash
git add .gitignore
```

---

## Step 22: Commit `.gitignore`

**Command**

```bash
git commit -m "Updated .gitignore to ignore backup files"
```

---

## Step 23: List All Branches

**Command**

```bash
git branch
```

---

## Step 24: Delete the Merged Branch

**Command**

```bash
git branch -d GitWork
```

---

## Step 25: View Commit History

**Command**

```bash
git log --oneline --graph --decorate
```

---

## Step 26: Push the Updated Repository

**Command**

```bash
git push origin main
```