const linkColor = document.querySelectorAll('.nav-link');

function colorLink(){
	if(linkColor){
		linkColor.forEach(l => l.classList.remove('active'));
		this.classList.add('active')
	}
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

// SIDEBAR MENU TOGGLE
$(document).on("click", ".sidebar-toggle", function (e) {
	e.preventDefault();
	let GetParent = $(this).parent();
	var GetSibling = $(this).siblings();

	if ($(GetParent).hasClass("in")) {
		$(GetParent).removeClass("in");
		$(GetSibling).slideUp("fast");
		$(this).find(".sidebar-toggle-icon i").addClass("ri-arrow-up-s-line");
		$(this).find(".sidebar-toggle-icon i").removeClass("ri-arrow-down-s-line");
	} else {
		$(GetParent).addClass("in");
		$(GetSibling).slideDown("fast");
		$(this).find(".sidebar-toggle-icon i").addClass("ri-arrow-down-s-line");
		$(this).find(".sidebar-toggle-icon i").removeClass("ri-arrow-up-s-line");
	}
});


// SIDEBAR TOGGLE
$(document).on("click", "#mbSidebarToggle", function (e) {

    if($("#moWrapper").hasClass("show-sidebar")){
        $("#mbSidebarToggle").removeClass('ri-close-line'); 
        $("#mbSidebarToggle").addClass('ri-menu-line'); 
        $("#moWrapper").removeClass("show-sidebar")
    }else{
        $("#mbSidebarToggle").removeClass('ri-menu-line'); 
        $("#mbSidebarToggle").addClass('ri-close-line'); 
        $("#moWrapper").addClass("show-sidebar");
    }
})