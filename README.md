# Sprint 7 project
We are using Javascript HTTP requests to test server function and ensure that the requests are also functioning.

We will be using VSCode (text editor) & Github (cloud-based data storing system)

To run the tests you will need to navigate into the project folder, ensure node has been installed, and then open a terminal. once in the terminal enter the command npx jest /folder/testFile to run the tests for each request type.

In task 1 we are testing GET requests for the response status code 200 and also making sure that the data requested is properly being pulled from the server

In task 2 we are testing POST requests for the status code 201 by creating a kit and then adding an item to a kit and making sure it is in the proper kit

In task 3 we are working with PUT requests, back to checking for status code 200 but this time we are editing items already in a kit and confirming that it has been changed.

Lastly in task 4 we are testing DELETE requests, looking for status 200 ok and then also confirming that the kit of choice has been removed from the server.