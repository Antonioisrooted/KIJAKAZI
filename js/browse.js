$(document).ready(function(){
  $('#makebid1').on ('click', function(e){
    e.preventDefault();
    alert('Success. Your Bid has been Placed');
  });

  $('#view').on ('click', function() {
    $('.job_detail').toggle();
    });
  $('#makebid').on ('click', function() {
    $('.browseform').toggle();
    $('.map').toggle();
  });
});