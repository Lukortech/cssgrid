var numOfBlogPosts = 6;

function scrollToBottom (id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
} 
function closeScrolls (id){
    var uncollapsable = document.getElementById(id);
    switch(uncollapsable){
        case bp1:
            for (i=1; i < numOfBlogPosts; i++){
                if (uncollapsable !== bp1){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
        case 'bp2':
            for (i=1; i<numOfBlogPosts; i++){
                if (uncollapsable !== bp2){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
        case bp3:
            for (i=1; i<numOfBlogPosts; i++){
                if (uncollapsable !== bp3){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
        case bp4:
            for (i=1; i<numOfBlogPosts; i++){
                if (uncollapsable !== bp4){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
        case bp5:
            for (i=1; i<numOfBlogPosts; i++){
                if (uncollapsable !== bp5){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
        case bp6:
            for (i=1; i<numOfBlogPosts; i++){
                if (uncollapsable !== bp6){
                    document.getElementById('bp'+i).scrollTop = 0;
                }
            }
        break;
    }
}