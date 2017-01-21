// Login
    var emailElem = document.getElementById("email");  
    emailElem.setAttribute("value", config.fbCredentials.user);  
    var passwordElem = document.getElementById("pass"); 
    passwordElem.setAttribute("value", config.fbCredentials.pass); 
    var form = document.getElementById("login_form"); 
    form.submit();

// Notifications
    var aTag = document.getElementsByClassName("jewelButton")[2]; aTag.click();
    var dataArray = []; 
    window.setTimeout(() => { var notificationsLayout = document.getElementById("fbNotificationsFlyout"); 
    var notificationsPanel = notificationsLayout.getElementsByTagName("ul")[0];
    var liList = notificationsPanel.getElementsByTagName("li"); 
    var infoList = Array.from(liList).map((li) => li.getElementsByTagName("span"));
    dataArray = infoList.map(span => span.item(1).textContent + " " + span.item(span.item(1).childNodes.length + 2).textContent);}, 300);
   
    /* Reloading Option
        var seeAll = document.getElementsByClassName("seeMore");
        var seeAllClick = Array.from(seeAll).filter(a => { var href = a.getAttribute("href"); return href == "https://www.facebook.com/notifications" })[0];
        seeAllClick.click(); 
        var notifications = document.getElementById("content").getElementsByTagName("ul")[0];
    */

// Messages
    var aTag = document.getElementsByClassName("jewelButton")[1]; aTag.click();    
    window.setTimeout(() => { var content = document.getElementsByClassName("jewelContent")[0]; 
    var liArray = Array.from(content.getElementsByTagName("li")); liArray.shift();
    var dataArray = liArray.map(li => { var liContent = li.getElementsByClassName("content")[0]; return { from: liContent.childNodes[0].textContent, message: liContent.childNodes[1].textContent, time: liContent.childNodes[2].textContent }} ); }, 300)
    // TODO: specific message 

// Friend Requests
    var aTag = document.getElementsByClassName("jewelButton")[0]; aTag.click();    
    window.setTimeout(() => {
        var requestList = Array.from(document.getElementsByClassName("fbRequestList")[0].getElementsByTagName("li"));
        var requestListInfo = requestList.map(li => {var l = li.getElementsByClassName("title")[1]; if(l) { var buttons = li.getElementsByClassName("actions")[0].getElementsByTagName("button"); return { from: l.textContent, accept: buttons[0], decline: buttons[1] }}}).filter(e => e);
    }, 300);