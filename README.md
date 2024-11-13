# Deploying To-Do application in AWS EC2 and Apache Web Server

## To-Do List App

A simple To-Do List app built with **HTML**, **CSS**, and **JavaScript**.

## Features
- Add tasks
- Remove tasks
- Simple and responsive UI

## Technologies Used
- **Amazon Web Services**, **Apache Web Server**, **HTML**, **CSS**, **JavaScript**

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


### 2. Push Your Project to GitHub

1. In **VS Code**, open the terminal and add your GitHub repository as a remote:

   ```bash
   git remote add origin https://github.com/Shomeshwar-K/Deploy-a-Simple-Web-Application.git
   git push -u origin main
![image](https://github.com/user-attachments/assets/aeaa3493-2ebc-47b5-952c-033967c74028)

---

## Steps for Deploying a Cloned Repository on AWS EC2

### Create an AWS EC2 Instance
1.	Go to the AWS EC2 Dashboard.
2.	Launch a new EC2 instance with the Ubuntu AMI .
3. Choose the t2.micro instance type (eligible for the AWS free tier).
4. Configure the security group:
      -Add inbound rules to allow access to:
         -HTTP (port 80) from specific IP address or range (e.g., 0.0.0.0/0 for open access, or x.x.x.x/32 for a specific IP).
         -HTTPS (port 443) from specific IP address or range.
         -SSH (port 22) only from trusted IPs (e.g., your IP or a restricted range like x.x.x.x/32 to ensure secure access).
5. Download the SSH key pair to connect to the EC2 instance securely.
6. Connect to the instance using PuTTY with the downloaded SSH key pair.

![image](https://github.com/user-attachments/assets/17597af1-ea31-4e7f-b458-84fb7df70197)



### Install Apache on your EC2 instance
1.  Instaliing apache web server to host the application
2.  Steps to install apache2
    ```bash
    sudo apt update 
    sudo apt install apache2 -y
    sudo systemctl start apache2
    sudo systemctl enable apache2
![image](https://github.com/user-attachments/assets/dcc37079-ab75-4be0-99a2-4236c2db35b8)
![image](https://github.com/user-attachments/assets/caee56cf-e25c-489e-a0b1-4b3aaf13d96e)

### Navigate to Web Directory 
1.  Go to `/var/www/html`, the default directory for Apache.
2.  Clone the above git repository.
3.  Restart apache2  
    ```bash
    cd /var/www/html
    git clone https://github.com/Shomeshwar-K/Deploy-a-Simple-Web-Application.git
    sudo systemctl restart apache2
![image](https://github.com/user-attachments/assets/9de5dbf0-e05b-46a8-8279-af126691400f)

## Running To-Do Application

1.   Obtain the Public IP of Your EC2 Instance
2.   Access the Application in Your Web Browser with the public IP address and the port number
3.   Once the page loads, you should see the To-Do List app that you deployed. You can now interact with the app, add and remove tasks as needed.
Note: Stopping and restarting the EC2 instance, will change the Public IP address . Be sure to obtain the new public IP address if you need to access the app again after a restart.
![image](https://github.com/user-attachments/assets/d16d6dc9-01db-44ab-96a9-dbba95283136)
