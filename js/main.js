/* ====================== ADDING A COMMENT FUNCTIONALITY ====================== */
var postCaption = document.getElementsByClassName('post-caption'),
    commentIcon = document.getElementsByClassName('comment-icon'),
    submitComment = document.getElementsByClassName('submit-comment');

window.addEventListener('click', e => {
    if(e.target.className.includes('comment-icon')) {
        submitComment[e.target.className.substr(28, 1)].style.display = 'flex';
    }
});

// CLICKING ON COMMENT BUTTON TO POST A COMMENT
let commentButton = document.querySelectorAll('.commentButton'),
    comments      = document.querySelectorAll('.comments'),
    commentInput  = document.querySelectorAll('.comment-input');
    
comments.innerHTML = '';

for(let i = 0; i < commentButton.length; i++) {
    commentButton[i].addEventListener('click', () => {
        comments[i].innerHTML += `
            <div class="comment">
                <span class="caption-username">John Flick</span>
                <span class="caption-content">${commentInput[i].value}</span>
            </div>
        `;
    });
    commentInput[i].value = "";
}


/* ====================== WORKING ON LIKE ACTIONS ====================== */
// const postContent = document.getElementsByClassName('post-content'),
    heartIcon   = document.querySelectorAll('.heart-icon');

// WHEN THE USER CLICKS THE HEART ICON
window.addEventListener('click', e => {
    if(e.target.className.includes("heart-icon"))
        e.target.classList.toggle('heart-color-toggle');
});

window.addEventListener('dblclick', function(e) {
    if(e.target.className.includes('post-content')) {
        heartIcon[e.target.className.substr(13, 1)].classList.toggle('heart-color-toggle');
    }
});

/* ====================== SENDING MESSAGE FUNCTIONALITY ====================== */
const inpMessage = document.getElementById('input-message'),
      sendIcon   = document.getElementById('send-icon'),
      privateChatBody = document.getElementById('private-chat-body');

window.onload = () => {

    inpMessage.value = '';
    
    for(let i = 0; i < localStorage.length; i++) {
        let newMessage = document.createElement('p');

        newMessage.textContent = localStorage.getItem(localStorage.key(i));
        newMessage.classList.add('message');
        privateChatBody.appendChild(newMessage);
    }
};

let k = 1; // FOR INCREMENTING THE INDEX OF THE MESSAGE KEY FOR LOCALSTORAGE

sendIcon.addEventListener('click', () => {
    if(!inpMessage.value ) return;
    else {
        //LETTING THE SCROLLBAR ALWAYS TO THE BOTTOM
        privateChatBody.scrollTop = privateChatBody.scrollHeight;

        let newMessage = document.createElement('p');
        
        // STOCKING THE MESSAGES ON THE LOCALSTORAGE
        // CREATING NEW PARAGRAPH AND APPEND IT TO THE PARENT ELEMENT
        newMessage.appendChild(document.createTextNode(inpMessage.value));
        newMessage.classList.add('message');
        privateChatBody.appendChild(newMessage);
        // document.createTextNode(inpMessage.value);
        localStorage.setItem(('message'.concat(k.toString())), newMessage.textContent);
        console.log("k = " + k);
        console.log(localStorage);
        k++;

        inpMessage.value = '';
    }
});

