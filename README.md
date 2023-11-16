# A Demo for the UCD API Project
This site is built with Angular to show off a couple capabilities of the UC Davis API I recently wrote.  
It will allow visitors to view, search, and download data from the API for their convenience and slightly document the API for developers

Enjoy the demo!

# Demo Features
This section outlines the features shown off in the Demo!
Some features are simple wrappers around the API while other features do a lot more work behind the scenes to function!

## Seat History Graph
> **Wraps:** `Seat History API`

Shows a visual graph of the seat history over time!  
(Also occasionally called the charting feature)
### Features Included:
* **Export graph as JPG (Download / Copy to Clipboard)**
	> Graph can be downloaded as a JPG or copied to your clipboard (if your browser supports it) for easy sharing!
* **Linear fit prediction**
	> The graph will attempt to make a linear fit with the data shown on-screen which can be used to predict a couple of hours ahead within the same day!
* **Viewing range adjustment**
	> The graph controls allow you to focus solely on a specific range of time. This also affects the result of the `Linear fit prediction`

## API Documentation
> **Wraps:** All APIs

Documentation of every API endpoint, how to use them, and what they output!
### Features Included:
* **Sample output**
	> See a sample of what to expect out of the API
* **Parameter table**
	> List of all inputs taken in by an API and what their defaults are, if any
* **Permalinks**
	> Each API header has a permalink to it for sharing and linking to within notes and comments

## Search Tools
> **Wraps:** All APIs

Tools for searching and filtering through the results of every API!  
(Actually uses a bit of client-side filtering instead of purely API calls for better filter UX)
### Features Included:
* **Responsive search UI**
	> Works on desktop AND mobile devices
* **Simple filters**
	> Filters only show valid options and reset themselves when an option is no longer available
* **Comprehensive results**
	> Every part of the API results are shown to the viewer

## Upcoming Features
* API Documentation
	* Include a live demo that allows users to make any API call
	* Include source code for replicating certain API calls
* Download output as CSV for general audiences
* Better UI/UX for search results
* Repackage the API calls into a reusable file/library for easy import and usage
	* This should replace the Angular service and be downloadable!
		* Simple library interface!
