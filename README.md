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

#### Dialogues (Previously Companion Approvals)
    id (PK)
    act_id (FK)
    region_id (FK)
    dialogue
    dialogue_details
    additional_details

#### Act Table
    act_id
    act

#### Regions
    region_id (PK)
    region_name
    act (FK)

#### Reactions
    id (PK)
    companion_id (FK)
    dialogue_id (FK)
    approves

![DataBase](./assets/Screenshot%202023-09-20%20at%209.51.05%20PM.png)



## To Do List:

    ✅ - create database
            db: bg3_companion_db
            host: localhost
            user: root
            password: password

    ✅ - create tables
            - companions
            - act
            - dialogues
            - regions
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
