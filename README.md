# UFOs

## Overview of Project
1. Dana is a data journalist who is interested in collecting and organizing UFO data to display it to several interested users.
2. We will create a table to organize UFO data that is stored as a JavaScript array, or list. This table will have the ability to filter data based on certain criteria and will be created using JavaScript as the primary coding language. So we will create filters to make this table fully dynamic, meaning that it will react to user input, and then place the table into an HTML file for easy viewing.
3. Dana would like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, we will add table filters for the city, state, country, and shape.
4. We will customize the webpage using Bootstrap, and equip the table with several fully functional filters that will allow users to interact with our visualizations.

## Results
* Using JavaScript and HTML, we will add the code in the index.html file to create more table filters. In addition to the date filter we created in this module, we’ll add filters for the city, state, country, and shape, as shown in the following image:
![image](https://user-images.githubusercontent.com/111020934/198148641-77fccd22-a828-4d22-af0c-64ac82ac730d.png)

* When we search by city name and press 'Enter', the table is filtered and the search results are displayed based on the requested criteria:
![image](https://user-images.githubusercontent.com/111020934/198149444-f1019f7d-487f-4e9e-a9d2-297727330d00.png)

* When we search by state and press 'Enter', the table is filtered and the search results are displayed based on the requested criteria:
![image](https://user-images.githubusercontent.com/111020934/198149761-f30d172b-bdd1-4026-9774-f74dcd131e1b.png)

* When we search by country and press 'Enter', the table is filtered and the search results are displayed based on the requested criteria:
![image](https://user-images.githubusercontent.com/111020934/198189769-50f8ef86-78bd-4575-bc53-51c40a4dc938.png)

* When we search by shape and press 'Enter', the table is filtered and the search results are displayed based on the requested criteria:
![image](https://user-images.githubusercontent.com/111020934/198189916-c44c4554-0025-4d1a-b476-9ccd90839a13.png)

* When we search by date and press 'Enter', the table is filtered and the search results are displayed based on the requested criteria:
![image](https://user-images.githubusercontent.com/111020934/198190181-a4660410-37ba-4bc3-8e83-41a8eee1e150.png)

## Summary
* Describe one drawback of this new design and two recommendations for further development.
1. The webpage could be more interactive:
When the user searches for a city which is not present in the dataset, a blank table is displayed on the webpage. It is recommended to give a message to the user to try and search for another city.
2. The user is lost during the search:
When the user tries to search a UFO sighting based on 2 or more search options and would like to start over, the user should remove the text entered in each search field in order to do so. For this we can provide a reset button, that would empty all the text fields and reset the table data.
![image](https://user-images.githubusercontent.com/111020934/198191164-5f87a40d-044e-4dfb-b487-1ef6e9e2599b.png)


3. Make search easier:
The user can be provided with dropdowns for city,state,country and shape fields for easy selection.
A calender can be provided for the date field.


