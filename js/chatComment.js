document.getElementById('post-btn').addEventListener('click', function(){
    //get input field value
    const commentField = document.getElementById('comment-field');
    const userComments = commentField.value;

    //create Element 
    const commentP = document.createElement('p');
    // set value of the created element
    commentP.innerText = userComments;

    // where to set
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(commentP);

// clearing the field
    commentField.value = '';

});