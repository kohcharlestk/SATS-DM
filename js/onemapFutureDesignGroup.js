var postalCode = $('#postal').val();

$(function () {

	$("#postal").on("keyup", function () { 
		$.ajax({ 
			url: 'https://developers.onemap.sg/commonapi/search?searchVal={postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum={PageNumber}', 
            
			data: "search=" + $(this).val(), 
			success: function (results) { // data returned
				$(".country-list").html(""); // remove ch nodes
				$(".country-list").show(); // show the div
				$.each(JSON.stringify(results), function (i, results) {
					$(".country-list").append("<li>" + results + "</li>"); // append the response to div
				});
			},
		});
	});
	$(".country-list").on("click", "li", function () { // when a list item is clicked
		var val = $(this).val(); // get the text of the clicked item
		postal(val) // call the function to select the item
	});
});


