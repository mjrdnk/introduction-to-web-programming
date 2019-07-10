# introduction to web programming

Thanks for contributing:
Once code is merged, you can verify functionality directly here: https://mjrdnk.github.io/introduction-to-web-programming/

## Description

By checking git tags

```
git tag -l
```

you can jump between parts of this workshop's code:

1. step-1 - added HTML structure with classes
2. step-2 - added styles in <style /> tag
3. step-3 - added adding, removing and marking todo as done
4. step-4 - added Firebase with Firestore

## For step-4:

Project is usign Firebase. It is necessary to add your Firebase project's config:

### Cloning environmental variables made easy

To use with database, please clone .env.example.js file like this inside this project's directory:

```bash
cp .env.example.js .env.js
```

Please replace the values with your Firebase values.

# enhancements tasks

1. Sort todos in descending manner by `creationDate`.
   To achieve this task you will need to add `creationDate` to saved todo. Unix milisecond timestamp represents date and it is also a number, so maybe it is a good idea to use it here.

2. ...

#### THIS PROJECT IS FOR TRAINING PURPOSES FOR ANYBODY WHO IS EAGER TO TRY WEB PROGRAMMING
