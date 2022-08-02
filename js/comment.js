document.getElementById('post-btn').addEventListener('click', function(){
    const commentField = document.getElementById('comment-field');
    const userComment = commentField.value;

    // create Element
    const p = document.createElement('p'); 
    p.innerText = userComment;

    // 
    const commentBox = document.getElementById('comment-container');
    commentBox.appendChild(p);
    
    // commnet clean
    commentField.value = '';
})