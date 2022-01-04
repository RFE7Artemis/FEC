import React from 'react';
import ReactDOM from 'react-dom';


const AddReview = ({ handleReviewSubmit, handleReviewClose, showReview, children }) => {

  let showHideClassName = showReview ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>Add a Review</h1>

          <form action="">
            <input type="text" placeholder="ReviewTest...." name="test" />
          </form>
          <button type="button" onClick={handleReviewSubmit}>
            Submit Review
          </button>
          <button type="button" onClick={handleReviewClose}>
            Cancel
          </button>
        </section>
      </div>
    </>
  );
}


export default AddReview;

//element that will popup to handle user submitting a new review

//Overal Rating
//User selects one from 1,2,3,4 or 5 Stars

//Would You Recommend This?
//User selects from yes or no

//Traits
//Create one trait prompt for each trait assigned to object
//User selects one from -1, -1/2, 0, +1/2 or +1 for the given trait

//Review Title
//Up to 60 characters, optional, placeholder: Example: Best purchase ever!

//Review Body
//Min 50 Characters, Max 1000 Characters, Placeholder: Why did you like the product or not?

//Click to Add Photos Button
//Click to open import photos prompt
//Low priority optional review element. Only takes images.

//Imported Photos
//Display the names of each photo imported, up to 5 imports

//Nickname Form
//Up to 60 characters to be used as displayName

//Email form
//up to 60 characters, internal use only

//Submit Button
//Submits the form if all required fields are filled out

/*
{
  product_id: 37314,
  rating: 3,
  summary: 'ReviewTitle',
  body: 'Review Body',
  recommend: true,
  name: 'ReviewerName',
  email: 'ReviewerEmail',
  photos: [],
  characteristics: {125042:3, 125040:2, 125041:2, 125043:3}
}
*/