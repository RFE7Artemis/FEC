import React from "react";
import StarDisplay from './starDisplay.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
//This Element creates a single review
const Review = ({ review }) => {
  if (review) {
    // console.log(review);
    return (
      <div> Review
        <div className="reviewTitle">{review.summary}</div>
        <div className="reviewBody">{review.body}</div>
        <StarDisplay rating={review.rating} />
        <div className="revUser">{review.reviewer_name}</div>
        <div className="timestamp">{review.date}</div>
        <Helpful helpfulness={review.helpfulness} />
        <Report />
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Review;
//Takes in an individual review from the state and turns it into a templated review

//StarDisplay
//Uses the same stardisplay method as averages to create a start Display ****Stars for individual review score
//import from starDisplay.jsx

//Username and Timestamp - Display Username and Timestamp for the review

//Review Title - Display user provided title if provided

//Review Body - Provide the body of the review

//Helpful?
//Contains 3 micro elements, hepful button, number of helpfuls, and a report button
//Clicking YES next to Helpful? will highlight yes and increment the "yes" count by 1
//YES count is pulled from database and incremented when user clicks yes.
//Report button opens up a selection of reasons to report a review, selecting one sends it to the db for review (fake)