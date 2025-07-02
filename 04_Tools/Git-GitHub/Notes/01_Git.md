# Git cheat sheet as a Markdown file

git_cheatsheet_md = """
# 🧠 Git Cheat Sheet for Beginners

A concise guide to help you get started with Git version control.

---

## 📁 Basic Setup

```bash
# Set up user info
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Check current config
git config --list
📦 Repository Management
bash
Always show details

Copy
# Initialize a new Git repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git

```

📄 Basic Workflow

````bash
Always show details

Copy
# Check status of working directory
git status

# Track new files
git add filename.txt

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# View commit history
git log

# One-line summary of commits
git log --oneline

````

🔁 Branching

````bash

Always show details

Copy
# Create new branch
git branch new-feature

# Switch to branch
git checkout new-feature

# Create and switch to new branch
git checkout -b new-feature

# List all branches
git branch

# Merge branch into current branch
git merge new-feature

# Delete a branch
git branch -d new-feature

````

🔄 Remote Repositories

Always show details
````bash

# Add a remote
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v

# Push changes to remote
git push origin main

# Pull latest changes
git pull origin main

# Fetch updates (no merge)
git fetch origin

````

💥 Undoing Changes

Always show details
````bash

Copy
# Unstage a file
git reset filename.txt

# Undo last commit but keep changes
git reset --soft HEAD~1

# Discard changes in a file
git checkout -- filename.txt

# Revert a commit (safe way to undo)
git revert <commit_id>

````

🧪 Stashing

Always show details

````bash

Copy
# Save uncommitted changes
git stash

# Show stashed changes
git stash list

# Apply last stash
git stash apply

# Drop last stash
git stash drop

````

🔍 Inspection & Logs

Always show details

````bash

# Show changes
git diff

# Show changes staged for commit
git diff --cached

# Show log with graph
git log --graph --oneline --all

````

🛠️ Helpful Git Configurations

Always show details

````bash

# Use colored output
git config --global color.ui auto

# Set default branch to main
git config --global init.defaultBranch main

````

📚 Resources

Official Git Documentation

Try Git in Your Browser

GitHub Learning Lab
"""

