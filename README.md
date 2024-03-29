# Artist's Corner PVD

# Project Details

### Link to Deployed Website: https://artistscornerpvd.github.io/

### Project Description:

This consignment site is a place for Brown and RISD students to sell their handmade goods and clothes second-hand. They can sign in with their school gmail, post their own listings, and view other people's listings. On the home page, there is an events banner to see upcoming events in the PVD art community!

### Project Duration:

This webstite started out as 3-week term project. After the duration of the class project, Pranavi continued to improve and add features to the website. She deployed the website over Winter Break and now maintains the website. This website took approximately 5 weeks to build and about 60 hours. 

#### Link to Initial Term Project Repo: https://github.com/cs0320-f23/term-project-jtao12-dkyerema-mtam2-prlakshm


### Team Members:

<span style="color:#75BFEC;">Full Name - Github Username - Contribution</span>
<br>Pranavi Lakshminarayanan - prlakshm - frontend and backend
<br>Dorinda Kyeremateng - dkyerema - frontend
<br>Jeffrey Tao - jtao - frontend
<br>Marissa Tam - mtam2 - frontend


# Design Choices:

We decided to use a database to store our backend data so that we can use Mongo's built-in search and filter functions. We also wanted to bee our backend data secure and to avoid hosting a http server, so we used MongoDB to take care of the security for us.

We decided to represent items as an `Item` class objects and accounts as `Account` class objects. In the Mongo database, there is an `accounts` collection, a `master_items` collection, and a `sold_items` collection. We decided to seperate the sold items and master (currently selling) items so that they can be returned seperately. When sorting by price, most recent listing, or searching by keywords, this ensures that master items and sold items are sorted seperately. Master items are displayed at the top of the website and the sold items are displayed below.

<span style="color:#FE8181;">**Note: MongoDB uses the BSON.ObjectId data type to assigned a unique id to each document object in its collections.**

We used Stitch to host our Mongo API. The Stitch App allows us to use an API key (gitignored and stored in the private folder) to access the database and search/filter/modify the data.

We wrote async functions seperately from the react `.tsx` components so that all the functions that access the Mongo database are in one place. There are special notations for Mongo functions, so it made sense to seperat them from the HTML/typescript component files. This way, all the funcitons can be imported as once a not take up room in the components scripts.

We chose to make only one Category Page file that uses React to update the singular page rather than make separate category pages for each category (accessories/clothing/art/crafts). That way, if another developer wanted to add more categories to the site, they would just need to ensure that their uploaded items had the proper JSON characteristics such as a title and ID.

We also used Item Components to represent each item being sold. This allowed us to combine the photo, item characteristics, and seller information onto one visual card. Having everything unified also helped with making the items replicable, as well as able to be sorted/filtered easily.

Our search algorithm returns the items ranked. The current listings always show up at the top, then the sold listings at the bottom. Same goes for all the category pages. This is so that users see current listings first and don't get excited over a listing that is already sold. Within each section, the items are ranked/sorted/filtered. The items are ranked depending on how many of the search keywords they match. The items that match the most keywords are first, and partial keyword matches also are considered in ranking (and are weighted accordingly).

# Errors/Bugs:

For deployed website: The website might be a little slow after repetive clicks. Photos also take a while to load upon intially opening the website. This is a student project, so some things were beyond our expertise. We fixed all the bugs that we could find, but there may be some still lurking in our code. 

Because we deployed with GitHub, we could only deploy repo through the home page. This was a simple, free deployment option; however, this means that the website does not handle refreshes unless on the home page. The back buttons still work, but we recommend using the back button options on the webpages. 

-----------------------------------------------------------

For testing: When data is fetched from the MongoDB database, items and accounts are returned as document objects. If you want the return to be an item, `Item.fromObject(item)` or `Account.fromObject(account)` must be used to convert the object to an Item or Account type.

If keeping the return as an object then for the fields strings remain as strings, numbers remain as numbers, ids remain as ids, lists remain as lists, but maps return as objects. This is because MongoDB does not support the `Map` data type. So, the contact information field for accounts return as objects and not maps. To avoid this, we recommend converting the entire object to an account first (as done in testing).

 

# Tests:

## Banckend Jest Testing

<span style="color:#75BFEC;">tests/mongo</span>
<br>access-mongo-functions.test.ts
<br>This test suite tests all the Mongo functions that access the database to find subsets of the items and accounts data. This includes the functions responsible for search and filter.

<br>modify-mongo-functions.test.ts
<br>This test suite tests all the Mongo functions that modify the database. This test suite adds new items/accounts, updates items/accounts, and deletes items/accounts. There are only a few tests because we didn't want to disrupt the mocked database data too much.

<br>misc-mongo-functions.test.ts
<br>This test suite tests any miscellaneous Mongo functions. It inlcudes fuzz tests for `getAllUsernames()` and `ifUsernameAlreadyExists()

## Frontend Jest and Vi Testing

For frontend, we wrote Unit Tests for App, Category, Item, and Seller pages using vitest and jest. In each testing suite, we checked that each page would display the appropriate text and images. We also checked that all the necessary components would be in each page. 

To test App, our main high level component, we checked that basic elements of the page were rendered correctly, including the header and nav bar. We also tested that we could navigate to other pages using the nav bar.

To test the functionality of the CategoryPage component, we created unit tests to check that it correctly displays items based on categories and handles user interactions. For example, ensuring that the accessories category shows items like “Blue Green Beaded Bow Necklace.” We also wrote tests to check if filtering by subcategories works (e.g., selecting ‘prints’ in the art category shows the exact number of items and names of the items). We also checked whether clicking on an item card navigates correctly to the item detail page.

To test the functionality of the ItemDetailPage component, we created unit tests to check whether the page renders the correct information about the specific item along with the associated seller details. 

To test the functionality of the SellerPage component, we created unit tests to check if the seller’s items would display correctly. For sellers who only had sold items, there should be no current items. The error messages should also display if there’s an issue with fetching data from the backend. 

We also wrote Integration Tests to check the navigation between pages. For example, when the user navigates to the About page then the Home page, the text on each page should be displayed as intended. 


## How To

On browser: Navigate to https://artistscornerpvd.github.io/. The homepage has a slideshow of upcoming events at Brown University. Scroll down to see Google forms for submitting a new item listing, marking an old listing as sold, and creating a new seller account. The seller fills out the form and Pranavi, who's currently in charge of the artistscornerpvd@brown.edu email that receives these form answers, would change the item/account data accordingly. The category pages display the items within each category. Please wait a couple seconds for all the item images to load. Items are always shown as current listings at the top, then sold listings at the bottom. From here you can filter by price, recent listings, and sort by subcategories. You can click on an item to naivagte to the item listing page. You can then see more images of the item and click on the seller page. From the item and seller page, you can click the "back" buttom displayed on the top left corner of the main item/seller section to go back to the previous page. 

You can also search by keywords. The items show up in the order they are ranked, so the items that match the most keywords are first. All the current listings are first and the sold items are at the bottom. You can also sort and filter these search items. 

You can also view the about us page to read about us!

----------------------------------------------

On localhost: To run this website, the user should enter "npm run dev" in the VSCode terminal. This will open the website on http://localhost:5173/. From there, the user can immediately view the upcoming events on the home page. They can then navigate to the toolbar and peruse the accessories, clothing, art, and crafts available on the site. The user can also use the search bar to search for items that specifically match their input search term. In each of these sections, the user can sort and filter through the displayed items, as well as access the seller's business page to learn more details about the product and the seller's contact information.

## Future Iterations

Short-term progress: Ideally, all the item images and seller profile photos should be somehow stored in the MongoDB database. Right now they are saved and accessed within the file system. The easier solution is to use AWS S3. We can save the profile photos and item photos into respective AWS S3 buckets. Then, we can store the photo link (which is publicly accessible) to the MongoDB database collection instead of the photo filepath. 

-------------------------------------------

Long-term progress: Initially, we wanted to allow students to sign into our website. This feature was not possible to implement within the allocated time for our project. However, this can be added in future iterations. Students can sign in using the Brown University email and we would authenticate these credentials using Google OAuth. This would mean we create a profile page for every user. Each user would have the option of adding a listing to their current listings section and marking a current listing as sold. Users who have only bought items in the past and have not sold any would have none for their items section. 

We also would need to allow users to edit their profile information through the website, and not just through google forms. Also, they would be able to edit item listings though their profile while logged in.    

Another feature to add would be a "liked items" feature. This would mean adding a heart button users can click on the top right of an item component/item page to like an item. If a user is logged in, they can then view all their liked items. 

You will notice MongoDB functions already added that access and modify the data for some of these features in the "artists_corner_0\frontend\src\mongo\Mongo-Functions.ts" file.


## Outside Resources
We referred to ChatGPT consistently through this project, particularly when making the shift from HTML to JavaScript files since these languages did not align entirely. We also found help in MongoDB's YouTube video "Getting Started with MongoDB Atlas - A Modern Database!" when initially learning how to use this database as our backend server replacement. We referred to Stack Overflow and Google commonly to help us debug and to teach us how to implement new features. 

