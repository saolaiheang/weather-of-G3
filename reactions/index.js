















var sharedReaction = localStorage.getItem('sharedReaction');
var sharedReactionsContainer = document.getElementById('sharedReactions');
if (sharedReaction) {
    sharedReactionsContainer.innerHTML = `<p>${sharedReaction}</p>`;
} else {
    sharedReactionsContainer.innerHTML = "<p></p>";
}

let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
Array.from(stars).forEach(star => {
    star.addEventListener("click", function() {
        output.innerHTML = `You rated: ${star.textContent}`;
    });
});

function logout() {   
    localStorage.removeItem('logout');
    localStorage.removeItem('loginEmail');
    window.location.href = '/login/index.html'; 
}

function back(){
    localStorage.removeItem('back');
    window.location.href = '/home/index.html';
}




// Add event listener to the form for submission
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reactionForm').addEventListener('submit', handleFormSubmission);
});

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Call submitReaction function to process the reaction submission
    submitReaction();
  
    // Remove event listener for form submission to prevent multiple submissions
    document.getElementById('reactionForm').removeEventListener('submit', handleFormSubmission);
}

// Function to submit the reaction
function submitReaction() {
    const email = localStorage.getItem("loginEmail");
    const comment = document.getElementById('commentInput').value;
    const rating = document.getElementById('ratingInput').value;

    if (rating < 1 || rating > 5 || comment.trim() === "") {
        alert("Please enter a valid rating (1-5) and a comment.");
        return;
    }

    fetch("https://weather-backend-kappa.vercel.app/reactions", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            comment: comment,
            rating: rating
        }),
        headers: {
            'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0',
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Call displayCommentRatingAndEmail function to display the submitted reaction
        displayCommentRatingAndEmail(email, comment, rating);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

// Function to display the reaction on the screen
// function displayCommentRatingAndEmail(email, comment, rating) {
//     const reactionsContainer = document.getElementById('reactionsContainer');

//     // Create a reaction box for the new reaction
//     const reactionBox = document.createElement('div');
//     reactionBox.classList.add('reaction-box'); // Add a class for styling

//     // Populate the reaction box with reaction details
//     const emailParagraph = document.createElement('p');
//     emailParagraph.textContent = ` ${email}`;
//     reactionBox.appendChild(emailParagraph);

//     const commentParagraph = document.createElement('p');
//     commentParagraph.textContent = `Comment: ${comment}`;
//     reactionBox.appendChild(commentParagraph);

//     const ratingParagraph = document.createElement('p');
//     ratingParagraph.textContent = `Rating: ${rating}/5`;
//     reactionBox.appendChild(ratingParagraph);

//     // Append the reaction box to the reactions container
//     reactionsContainer.appendChild(reactionBox);
// }
function displayCommentRatingAndEmail(email, comment, rating) {
    const reactionsContainer = document.getElementById('reactionsContainer');

    // Create a reaction box for the new reaction
    const reactionBox = document.createElement('div');
    reactionBox.classList.add('reaction-box'); // Add a class for styling

    // Populate the reaction box with reaction details
    const emailParagraph = document.createElement('h4');
    emailParagraph.textContent = ` ${email}`;
    reactionBox.appendChild(emailParagraph);

    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = ` ${comment}`;
    reactionBox.appendChild(commentParagraph);

    // Convert numeric rating to star icons
    const ratingParagraph = document.createElement('p');
    ratingParagraph.innerHTML = ` ${getStarRating(rating)}`;
    reactionBox.appendChild(ratingParagraph);

    // Append the reaction box to the reactions container
    reactionsContainer.appendChild(reactionBox);
}

// Function to convert numeric rating to star icons
function getStarRating(rating) {
    const filledStar = "★";
    const emptyStar = "☆";
    let stars = "";

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += filledStar;
        } else {
            stars += emptyStar;
        }
    }

    return stars;
}