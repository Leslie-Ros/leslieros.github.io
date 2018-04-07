function toggleNav() {
    // Toggle nav
    $("#nav-burger").click(function(){

        if($("nav ul").hasClass("open")) {
            // Close nav
            $("nav ul").removeClass("open")
        } else {
            // Open nav
            $("nav ul").addClass("open");
        }
    });

};

toggleNav();

function closeNav() {

    // TODO factorize with top file code
    let listItems = $("nav ul li");
    console.log(listItems);

    // Add li listener
    for(let i = 0; i < listItems.length; i++) {
        // Close nav on li click
        listItems[i].click(function(){
            // Close nav
            $("nav ul").removeClass("open")
        });
    }

}

closeNav();
