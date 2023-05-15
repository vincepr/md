# Git

## basics
- some settings
```
git config credential.helper store
git config --global credential.helper 'cache --timeout=3600'
```

- fresh repository:
```
mkdir minsk
cd minsk
git add .
git int
git commit -m "initial commit"
git remote add origin https://github.com/vincepr/minsk.git
git push -u origin master
```

- commit all modified files (but NOT new unstaged ones)
```
git commit -am "added things"
```

- commit everything
```
git add --all && git commit -m "comment"
```

- create a custom alias to quickly add -A and commit:
```
git config --global alias.coa '!git add -A && git commit -m'
git coa "some message"
```

- change branches
```
git branch              // show branches & active branch
git branch master       // make master branch active
```
## feature branch workflow
1. update main to latest version
```
git checkout main
git fetch origin
git reset --hard origin/main
```
2. create a new branch
```
git checkout -b new-features-branchname
```
3. update add and comit changes like usual to the featurebranch
```
git status
git commit -am "added files and updates"
```
4. push feature branch to remote
```
git push -u origin new-features-branchname
```
