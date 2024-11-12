# Deploying To-Do application in AWS EC2 and Apache Web Server

## To-Do List App

A simple To-Do List app built with **HTML**, **CSS**, and **JavaScript**.

## Features
- Add tasks
- Remove tasks
- Simple and responsive UI

## Technologies Used
- **HTML**, **CSS**, **JavaScript**

---

## How to Host on GitHub Pages

### 1. Initialize a Git Repository

1. Open the project in **VS Code**.
2. Open the **Terminal**.
3. Run the following commands to initialize a Git repository and commit your files:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"


### 3. Push Your Project to GitHub

1. In **VS Code**, open the terminal and add your GitHub repository as a remote:

   ```bash
   git remote add origin https://github.com/Shomeshwar-K/Deploy-a-Simple-Web-Application.git
   git push -u origin main

## How to Clone the repository
1. Clone the repository:

   ```bash
   git clone https://github.com/Shomeshwar-K/Deploy-a-Simple-Web-Application.git
![image](https://github.com/user-attachments/assets/aeaa3493-2ebc-47b5-952c-033967c74028)

---

## Steps for Deploying a Cloned Repository on AWS EC2

### Create an AWS EC2 Instance
1.	Go to the AWS EC2 Dashboard.
2.	Launch a new EC2 instance with the Ubuntu AMI .
    o	Choose the t2.micro instance type (eligible for the AWS free tier).
    o	For security settings, allow HTTP (port 80), HTTPS (port 443) and SSH (port 22).
    o	Download the SSH key pair to connect to the EC2 instance.
    o	Coonect the instance via putty with the ssh key pair.
![image](https://github.com/user-attachments/assets/17597af1-ea31-4e7f-b458-84fb7df70197)



### Install Apache on your EC2 instance:
1.  Instaliing apache web server to host the application
2.  Steps to install apache2
    ```bash
    sudo apt update 
    sudo apt install apache2 -y
    sudo systemctl start apache2
    sudo systemctl enable apache2
![image](https://github.com/user-attachments/assets/dcc37079-ab75-4be0-99a2-4236c2db35b8)
![image](https://github.com/user-attachments/assets/caee56cf-e25c-489e-a0b1-4b3aaf13d96e)

### Navigate to Web Directory: 
1.  Go to `/var/www/html`, the default directory for Apache.
2.  Clone the above git repository.
3.  Restart the apache2  
   ```bash
    cd /var/www/html
    git clone https://github.com/Shomeshwar-K/Deploy-a-Simple-Web-Application.git
    sudo systemctl restart apache2
![image](https://github.com/user-attachments/assets/32e9855d-c46d-4227-b9a6-bdc360ce6792)
