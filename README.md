# BG3 COMPANION APP

### About

This app is a BG3 companion approval guide.
This app will allow users to sort by companion.
This app will allow user ratings / comments / etc.
This app will require users to create an account to leave comments / ratings.

### Database Info

#### User Table

    user_id (PK)
    first_name
    last_name
    username
    email
    password

#### Companions Table

    companion_id (PK)
    name

#### Companion Approvals

    companion_approval_id
    details
    companion_id (FK)
    act_id (FK)

#### Act Table

    act_id
    act


## To Do List:

    ✅ - create database
            db: bg3_companion_db
            host: localhost
            user: root
            password: password

    ✅ - create tables
            - companions
            - act
            - companion_approvals
            - user

    👷🏻‍♀️ - create "crud" functionality
        ✅ - Create Approval (Must be logged in)
        ✅ - Delete Approval (Must be Admin)
        🚨 - Update Approval (Must be logged in)
        ✅ - Search (Must be logged in)
            ✅ - Search All Approvals
            ✅ - Search by Act
            ✅ - Search by Companion
            🚨 - Search Multiple Companions

    👷🏻‍♀️ - Authorization and Authentication
